# Contributing to Function Folding

We love your input! We want to make contributing to Function Folding as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/function-folding.git
   cd function-folding
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development**

   ```bash
   npm run watch
   ```

4. **Open in VS Code**

   ```bash
   code .
   ```

5. **Test the extension**
   - Press `F5` to open a new Extension Development Host window
   - Open a JavaScript or TypeScript file
   - Test the folding functionality

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Run `npm run lint` to check for style issues
- Use meaningful variable and function names
- Add comments for complex logic

## Testing

- Write tests for new functionality
- Ensure existing tests pass: `npm test`
- Test manually in different scenarios:
  - Various function declaration patterns
  - Different file types (JS, TS, JSX, TSX)
  - Edge cases and error conditions

## Commit Messages

Use clear and meaningful commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:

```
Add support for async arrow functions

- Update regex patterns to match async arrow functions
- Add test cases for async scenarios
- Fixes #123
```

## Bug Reports

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/your-username/function-folding/issues/new).

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Feature Requests

We welcome feature requests! Please [open an issue](https://github.com/your-username/function-folding/issues/new) with:

- Clear description of the feature
- Use cases and examples
- Why this would be valuable to users
- Any implementation ideas you might have

## Code of Conduct

### Our Pledge

We are committed to making participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to [open an issue](https://github.com/your-username/function-folding/issues/new) with any questions about contributing!
