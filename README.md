# Function Folding

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/juliosaraiva.function-folding.svg)](https://marketplace.visualstudio.com/items?itemName=juliosaraiva.function-folding)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/juliosaraiva.function-folding.svg)](https://marketplace.visualstudio.com/items?itemName=juliosaraiva.function-folding)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful VS Code extension that provides smart function folding capabilities for JavaScript, TypeScript, and Python files. Focus on your code structure by folding only function definitions while keeping other code blocks visible.

## ✨ Features

- **🎯 Function-only folding**: Intelligently fold only function definitions
- **🔍 Smart pattern matching**: Supports all modern JavaScript/TypeScript function patterns
- **⚡ Quick shortcuts**: Fold/unfold with customizable keyboard shortcuts
- **📱 Context menu**: Right-click integration for easy access
- **🌐 Multi-language support**: Works with JS, TS, JSX, TSX, and Python files
- **🎨 Clean interface**: Seamless integration with VS Code's native folding

### Supported Function Patterns

**JavaScript & TypeScript:**

- Regular function declarations: `function myFunction() {}`
- Arrow functions: `const myFunc = () => {}`
- Method shorthand: `{ methodName() {} }`
- Class methods: `class MyClass { method() {} }`
- Async functions: `async function myAsyncFunc() {}`
- TypeScript methods with modifiers: `public async method(): Promise<void> {}`
- Export functions: `export function myFunc() {}`

**Python:**

- Function definitions: `def my_function():`
- Async functions: `async def my_async_function():`
- Class methods: `def method(self):`
- Static methods: `@staticmethod def my_method():`
- Class methods: `@classmethod def my_method(cls):`
- Decorated functions: `@decorator def my_function():`

## 🚀 Quick Start

1. Install the extension from the VS Code Marketplace
2. Open any JavaScript, TypeScript, or Python file
3. Use `Ctrl+Alt+F` (Windows/Linux) or `Cmd+Alt+F` (Mac) to fold all functions
4. Use `Ctrl+Alt+U` (Windows/Linux) or `Cmd+Alt+U` (Mac) to unfold all functions

## 📋 Usage

### Commands

| Command                  | Shortcut (Windows/Linux) | Shortcut (Mac) | Description                                      |
| ------------------------ | ------------------------ | -------------- | ------------------------------------------------ |
| **Fold All Functions**   | `Ctrl+Alt+F`             | `Cmd+Alt+F`    | Fold all function definitions in the active file |
| **Unfold All Functions** | `Ctrl+Alt+U`             | `Cmd+Alt+U`    | Unfold all folded regions in the active file     |

### Context Menu

Right-click in any JavaScript, TypeScript, or Python file to access folding commands from the context menu.

### Command Palette

- Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
- Type "Function Folding" to see available commands

## 🎬 Demo

![Function Folding Demo](https://raw.githubusercontent.com/your-username/function-folding/main/images/demo.gif)

_Quickly fold and unfold functions to focus on the code structure you need._

## 📦 Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Function Folding"
4. Click Install

### Manual Installation

```bash
# Download the latest .vsix file from releases
code --install-extension function-folding-1.0.0.vsix
```

## ⚙️ Configuration

The extension works out of the box with no configuration needed. However, you can customize the keyboard shortcuts:

1. Go to File → Preferences → Keyboard Shortcuts
2. Search for "Function Folding"
3. Modify the keybindings as needed

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- VS Code (v1.74.0 or higher)

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/function-folding.git
cd function-folding

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch mode for development
npm run watch
```

### Testing

```bash
# Run linting
npm run lint

# Compile and run tests
npm run test
```

### Building

```bash
# Build for production
npm run vscode:prepublish

# Package the extension
vsce package
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Issues

Found a bug or have a feature request? Please [open an issue](https://github.com/your-username/function-folding/issues) with:

- Clear description of the problem or feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

## 📝 Changelog

### [1.0.0] - 2025-01-07

#### Added

- Initial release
- Function folding for JavaScript and TypeScript files
- Support for various function declaration patterns
- Keyboard shortcuts (`Ctrl+Alt+F` / `Cmd+Alt+F` for fold, `Ctrl+Alt+U` / `Cmd+Alt+U` for unfold)
- Context menu integration
- Multi-language support (JS, TS, JSX, TSX, Python)

## 🔧 Troubleshooting

### Common Issues

**Q: The extension doesn't fold my functions**
A: Make sure you're in a supported file type (JS, TS, JSX, TSX, Python). Check that your functions match the supported patterns.

**Q: Keyboard shortcuts don't work**
A: Check if there are conflicting keybindings in your VS Code settings. You can customize them in the Keyboard Shortcuts settings.

**Q: Some functions aren't detected**
A: Please [report an issue](https://github.com/your-username/function-folding/issues) with the function pattern that isn't working.

## 📄 License

This extension is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Thanks to the VS Code team for the excellent extension API
- Inspired by the community's need for better code folding tools
- Built with ❤️ for the developer community

---

**Enjoy using Function Folding!** ⭐ If you find this extension useful, please consider leaving a review on the VS Code Marketplace.
