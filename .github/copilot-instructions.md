# GitHub Copilot Instructions for Function Folding Extension

## Project Overview
This is a VS Code extension called "Function Folding" that provides smart function folding capabilities for JavaScript, TypeScript, and Python files. The extension allows developers to fold only function definitions while keeping other code blocks visible, improving code readability and navigation.

## Architecture & Code Style

### Language Support
- **JavaScript/TypeScript**: Uses brace-based folding (`{` `}`)
- **Python**: Uses indentation-based folding
- **File Types**: `.js`, `.ts`, `.jsx`, `.tsx`, `.py`

### Core Components
- `src/extension.ts` - Main extension entry point with activation logic
- `FunctionFoldingRangeProvider` - Core class implementing `vscode.FoldingRangeProvider`
- Language-specific folding algorithms for different syntax patterns

### Code Style Guidelines
- Use TypeScript with strict mode enabled
- Follow Prettier formatting rules (2 spaces, single quotes, trailing commas)
- Use ESLint for code quality
- Prefer explicit types over `any`
- Use descriptive variable and function names
- Add JSDoc comments for public methods

## Function Detection Patterns

### JavaScript/TypeScript Patterns
When suggesting function detection regex patterns, use these established patterns:
```typescript
// Regular function declarations
/^\s*(export\s+)?(async\s+)?function\s+[\w$]+\s*\(/

// Arrow functions assigned to variables/constants
/^\s*(export\s+)?(const|let|var)\s+[\w$]+\s*=\s*(async\s+)?\(/

// Method shorthand in objects/classes
/^\s*(async\s+)?[\w$]+\s*\([^)]*\)\s*{/

// Class methods with access modifiers
/^\s*(public|private|protected|static)?\s*(async\s+)?[\w$]+\s*\([^)]*\)\s*{/
```

### Python Patterns
When working with Python function detection:
```typescript
// Regular function definitions
/^\s*def\s+[\w_]+\s*\(/

// Async function definitions
/^\s*async\s+def\s+[\w_]+\s*\(/

// Class methods (including self parameter)
/^\s*def\s+[\w_]+\s*\([^)]*self[^)]*\)\s*:/

// Decorated functions (multi-line pattern)
/^\s*@[\w_.]+.*\n\s*def\s+[\w_]+\s*\(/
```

## VS Code Extension Best Practices

### Registration Patterns
Always register providers and commands in the `activate` function:
```typescript
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerFoldingRangeProvider(
      [{ language: 'javascript', scheme: 'file' }],
      new FunctionFoldingRangeProvider()
    )
  );
}
```

### Error Handling
Use comprehensive error handling with user feedback:
```typescript
try {
  // Operation
  vscode.window.showInformationMessage('Success message');
} catch (error) {
  vscode.window.showErrorMessage(`Error: ${error}`);
}
```

### Language Detection
Always check file language before processing:
```typescript
const languageId = document.languageId;
if (!['javascript', 'typescript', 'python'].includes(languageId)) {
  return;
}
```

## Folding Algorithm Guidelines

### Brace-based Folding (JS/TS)
- Track opening `{` and closing `}` braces
- Handle nested functions correctly
- Support single-line arrow functions
- Skip comments and strings

### Indentation-based Folding (Python)
- Use `getIndentLevel()` helper function
- Compare indentation levels to determine function boundaries
- Skip empty lines and comments
- Handle decorators properly

### Common Patterns
```typescript
// Cancellation token checking
if (token.isCancellationRequested) {
  return [];
}

// Line validation
if (!lineText.trim() || lineText.trim().startsWith('//')) {
  continue;
}

// Range creation
new vscode.FoldingRange(startLine, endLine, vscode.FoldingRangeKind.Region)
```

## Testing & Quality

### Package.json Scripts
Use these npm scripts for development:
- `npm run compile` - TypeScript compilation
- `npm run lint` - ESLint checking
- `npm run format` - Prettier formatting
- `npm run watch` - Development mode
- `npm run package` - Create .vsix package

### Code Quality Checks
- Always run linting before committing
- Ensure TypeScript compiles without errors
- Test on multiple file types and edge cases
- Validate keyboard shortcuts work across languages

## CI/CD Integration

### GitHub Actions Workflows
The project uses automated workflows:
- **CI Pipeline**: Tests every push/PR
- **Release Pipeline**: Publishes on version tags
- **Code Quality**: Comprehensive quality checks
- **Dependency Updates**: Weekly automated updates

### Development Workflow
1. Create feature branch
2. Make changes with proper formatting
3. Test functionality manually
4. Run `npm run lint` and fix issues
5. Commit with conventional commit messages
6. Create PR for review

## Extension Metadata

### Package.json Configuration
- Support multiple languages in `activationEvents`
- Define keyboard shortcuts with platform-specific keys
- Include proper context menu integration
- Use semantic versioning

### Keyboard Shortcuts
- `Ctrl+Alt+F` / `Cmd+Alt+F` - Fold all functions
- `Ctrl+Alt+U` / `Cmd+Alt+U` - Unfold all functions
- Apply to supported file types only

## Performance Considerations

### Optimization Guidelines
- Use cancellation tokens in async operations
- Minimize regex operations in large files
- Cache compiled regex patterns
- Skip unnecessary line processing
- Handle large files gracefully

### Memory Management
- Don't store large text in memory unnecessarily
- Clean up resources in `deactivate()`
- Use efficient string operations
- Limit folding range calculations

## Multi-language Support

### Adding New Languages
When adding support for new languages:
1. Add language to folding provider registration
2. Update keyboard shortcut conditions
3. Create language-specific pattern detection
4. Implement appropriate folding algorithm
5. Update documentation and tests

### Language-specific Considerations
- **JavaScript/TypeScript**: Handle ES6+ syntax, JSX, decorators
- **Python**: Handle PEP 8 compliance, decorators, async/await
- **Future languages**: Consider syntax differences and folding patterns

## Documentation Standards

### Code Comments
- Use JSDoc for public methods and classes
- Explain complex regex patterns
- Document algorithm choices
- Include usage examples

### README Updates
- Keep feature list current
- Update supported patterns
- Include clear usage instructions
- Maintain troubleshooting section

## Security & Reliability

### Input Validation
- Validate document content before processing
- Handle malformed code gracefully
- Protect against regex DoS attacks
- Sanitize user inputs

### Error Recovery
- Graceful degradation on failures
- Clear error messages for users
- Logging for debugging
- Fallback behaviors

---

## When Making Suggestions

### Code Generation
- Follow established patterns in the codebase
- Use TypeScript types consistently
- Include proper error handling
- Consider performance implications

### Refactoring
- Maintain backward compatibility
- Update tests when changing logic
- Keep documentation in sync
- Follow semantic versioning

### New Features
- Consider multi-language support
- Follow VS Code extension guidelines
- Include keyboard shortcuts and commands
- Update package.json contributions

This instruction set should help GitHub Copilot provide contextually appropriate suggestions that align with the project's architecture, coding standards, and best practices.
