# Changelog

All notable changes to the "Function Folding" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Nothing yet

### Changed

- Nothing yet

### Fixed

- ✅ **Python function folding now works correctly** with all supported patterns
- ✅ Improved decorator detection and handling for Python functions
- ✅ Fixed indentation-based folding logic for Python
- ✅ Enhanced function pattern detection reliability
- ✅ Decorator functions now properly include decorators in the folding range

## [1.0.0] - 2025-01-07

### Added

- Initial release of Function Folding extension
- Function folding provider for JavaScript, TypeScript, and Python files
- Support for multiple function declaration patterns:

  **JavaScript & TypeScript:**
  - Regular function declarations (`function name() {}`)
  - Arrow functions (`const name = () => {}`)
  - Method shorthand (`{ methodName() {} }`)
  - Class methods (`class MyClass { method() {} }`)
  - Async functions (`async function name() {}`)
  - TypeScript methods with access modifiers (`public method(): void {}`)
  - Export functions (`export function name() {}`)

  **Python:**
  - Function definitions (`def my_function():`)
  - Async functions (`async def my_async_function():`)
  - Class methods (`def method(self):`)
  - Static methods (`@staticmethod def my_method():`)
  - Class methods (`@classmethod def my_method(cls):`)
  - Decorated functions (`@decorator def my_function():`)

- Keyboard shortcuts:
  - `Ctrl+Alt+F` / `Cmd+Alt+F` - Fold all functions
  - `Ctrl+Alt+U` / `Cmd+Alt+U` - Unfold all functions
- Context menu integration for right-click access
- Multi-language support (JavaScript, TypeScript, JSX, TSX, Python)
- Command palette integration
- Smart error handling and user feedback
- Comprehensive documentation and examples

### Technical Details

- Built with TypeScript for type safety
- Modern VS Code API (1.74.0+) compatibility
- ESLint configuration for code quality
- Proper project structure with source files in `src/` directory
- Language-specific folding algorithms:
  - Brace-based folding for JavaScript/TypeScript
  - Indentation-based folding for Python
- Comprehensive test coverage preparation
