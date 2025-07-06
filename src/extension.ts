import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Register the folding range provider for JS/TS/Python
  context.subscriptions.push(
    vscode.languages.registerFoldingRangeProvider(
      [
        { language: 'javascript', scheme: 'file' },
        { language: 'typescript', scheme: 'file' },
        { language: 'javascriptreact', scheme: 'file' },
        { language: 'typescriptreact', scheme: 'file' },
        { language: 'python', scheme: 'file' },
      ],
      new FunctionFoldingRangeProvider()
    )
  );

  // Register command to fold all functions
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.foldAllFunctions', async () => {
      await foldAllFunctions();
    })
  );

  // Register command to unfold all functions
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'extension.unfoldAllFunctions',
      async () => {
        await unfoldAllFunctions();
      }
    )
  );
}

export function deactivate() {
  // Extension deactivation cleanup if needed
}

async function foldAllFunctions() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage('No active editor');
    return;
  }

  const document = editor.document;
  const languageId = document.languageId;

  if (
    ![
      'javascript',
      'typescript',
      'javascriptreact',
      'typescriptreact',
      'python',
    ].includes(languageId)
  ) {
    vscode.window.showInformationMessage(
      'Function folding is only supported for JavaScript, TypeScript, and Python files'
    );
    return;
  }

  try {
    // Get folding ranges from our provider
    const foldingRanges = await vscode.commands.executeCommand<
      vscode.FoldingRange[]
    >('vscode.executeFoldingRangeProvider', document.uri);

    if (!foldingRanges || foldingRanges.length === 0) {
      vscode.window.showInformationMessage('No functions found to fold');
      return;
    }

    // Fold each function range
    for (const range of foldingRanges) {
      await vscode.commands.executeCommand('editor.fold', {
        selectionLines: [range.start],
      });
    }

    vscode.window.showInformationMessage(
      `Folded ${foldingRanges.length} functions`
    );
  } catch (error) {
    vscode.window.showErrorMessage(`Error folding functions: ${error}`);
  }
}

async function unfoldAllFunctions() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage('No active editor');
    return;
  }

  try {
    // Unfold all in the current editor
    await vscode.commands.executeCommand('editor.unfoldAll');
    vscode.window.showInformationMessage('Unfolded all functions');
  } catch (error) {
    vscode.window.showErrorMessage(`Error unfolding functions: ${error}`);
  }
}

class FunctionFoldingRangeProvider implements vscode.FoldingRangeProvider {
  private readonly jstsPatterns = [
    // Regular function declarations
    /^\s*(export\s+)?(async\s+)?function\s+[\w$]+\s*\(/,
    // Arrow functions assigned to variables/constants
    /^\s*(export\s+)?(const|let|var)\s+[\w$]+\s*=\s*(async\s+)?\(/,
    // Method shorthand in objects/classes
    /^\s*(async\s+)?[\w$]+\s*\([^)]*\)\s*{/,
    // Class methods
    /^\s*(public|private|protected|static)?\s*(async\s+)?[\w$]+\s*\([^)]*\)\s*{/,
    // Function expressions
    /^\s*(export\s+)?(const|let|var)\s+[\w$]+\s*=\s*(async\s+)?function\s*\(/,
    // Arrow functions with explicit return type (TypeScript)
    /^\s*(export\s+)?(const|let|var)\s+[\w$]+\s*:\s*[^=]+=\s*(async\s+)?\(/,
  ];

  private readonly pythonPatterns = [
    // Regular function definitions
    /^\s*def\s+[\w_]+\s*\(/,
    // Async function definitions
    /^\s*async\s+def\s+[\w_]+\s*\(/,
  ];

  async provideFoldingRanges(
    document: vscode.TextDocument,
    context: vscode.FoldingContext,
    token: vscode.CancellationToken
  ): Promise<vscode.FoldingRange[]> {
    const languageId = document.languageId;

    if (languageId === 'python') {
      return this.getPythonFoldingRanges(document, token);
    } else {
      return this.getJSTSFoldingRanges(document, token);
    }
  }

  private async getJSTSFoldingRanges(
    document: vscode.TextDocument,
    token: vscode.CancellationToken
  ): Promise<vscode.FoldingRange[]> {
    const ranges: vscode.FoldingRange[] = [];
    const text = document.getText();
    const lines = text.split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (token.isCancellationRequested) {
        return [];
      }

      const lineText = lines[i];

      // Skip empty lines and comments
      if (
        !lineText.trim() ||
        lineText.trim().startsWith('//') ||
        lineText.trim().startsWith('/*')
      ) {
        continue;
      }

      // Check if line matches any JS/TS function pattern
      if (this.isJSFunction(lineText)) {
        const range = this.findJSFunctionRange(lines, i);
        if (range && range.end > range.start) {
          ranges.push(
            new vscode.FoldingRange(
              range.start,
              range.end,
              vscode.FoldingRangeKind.Region
            )
          );
        }
      }
    }

    return ranges;
  }

  private async getPythonFoldingRanges(
    document: vscode.TextDocument,
    token: vscode.CancellationToken
  ): Promise<vscode.FoldingRange[]> {
    const ranges: vscode.FoldingRange[] = [];
    const text = document.getText();
    const lines = text.split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (token.isCancellationRequested) {
        return [];
      }

      const lineText = lines[i];

      // Skip empty lines and comments
      if (!lineText.trim() || lineText.trim().startsWith('#')) {
        continue;
      }

      // Check if line matches any Python function pattern
      if (this.isPythonFunction(lines, i)) {
        const range = this.findPythonFunctionRange(lines, i);
        if (range && range.end > range.start) {
          ranges.push(
            new vscode.FoldingRange(
              range.start,
              range.end,
              vscode.FoldingRangeKind.Region
            )
          );
        }
      }
    }

    return ranges;
  }

  private isJSFunction(lineText: string): boolean {
    return this.jstsPatterns.some(pattern => pattern.test(lineText));
  }

  private isPythonFunction(lines: string[], lineIndex: number): boolean {
    const lineText = lines[lineIndex];

    // Skip decorators - we'll catch the actual function definition
    if (lineText.trim().startsWith('@')) {
      return false;
    }

    // Check if this line is a function definition
    return (
      lineText.trim().startsWith('def ') ||
      lineText.trim().startsWith('async def ') ||
      /^\s*def\s+[\w_]+\s*\(/.test(lineText) ||
      /^\s*async\s+def\s+[\w_]+\s*\(/.test(lineText)
    );
  }

  private findJSFunctionRange(
    lines: string[],
    startLine: number
  ): { start: number; end: number } | null {
    let openBraces = 0;
    let foundStartBrace = false;
    let endLine = startLine;

    // Handle single-line arrow functions
    const currentLine = lines[startLine];
    if (currentLine.includes('=>') && !currentLine.includes('{')) {
      // Single-line arrow function
      return { start: startLine, end: startLine };
    }

    for (let i = startLine; i < lines.length; i++) {
      const line = lines[i];

      for (const char of line) {
        if (char === '{') {
          openBraces++;
          foundStartBrace = true;
        } else if (char === '}') {
          openBraces--;
          if (openBraces === 0 && foundStartBrace) {
            endLine = i;
            return { start: startLine, end: endLine };
          }
        }
      }
    }

    return foundStartBrace ? { start: startLine, end: endLine } : null;
  }

  private findPythonFunctionRange(
    lines: string[],
    startLine: number
  ): { start: number; end: number } | null {
    const functionLine = lines[startLine];
    const functionIndent = this.getIndentLevel(functionLine);

    // Check if there are decorators before this function
    let actualStartLine = startLine;
    for (let i = startLine - 1; i >= 0; i--) {
      const line = lines[i];
      if (!line.trim()) {
        continue; // Skip empty lines
      }
      if (line.trim().startsWith('@')) {
        actualStartLine = i;
        continue;
      }
      break; // Stop at first non-decorator, non-empty line
    }

    // Find the end of the function by looking for the next line with same or less indentation
    let endLine = startLine;
    let hasBody = false;

    for (let i = startLine + 1; i < lines.length; i++) {
      const line = lines[i];

      // Skip empty lines and comments
      if (!line.trim() || line.trim().startsWith('#')) {
        continue;
      }

      const currentIndent = this.getIndentLevel(line);

      // If we find a line with less or equal indentation, we've reached the end
      if (currentIndent <= functionIndent) {
        break;
      }

      // Mark that we found function body
      hasBody = true;
      endLine = i;
    }

    // Only return a range if there's actually a function body
    return hasBody ? { start: actualStartLine, end: endLine } : null;
  }

  private getIndentLevel(line: string): number {
    const match = line.match(/^(\s*)/);
    return match ? match[1].length : 0;
  }
}
