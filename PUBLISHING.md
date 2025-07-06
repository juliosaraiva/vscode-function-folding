# Publishing Guide for Function Folding Extension

This guide will help you publish your Function Folding extension to the VS Code Marketplace.

## Prerequisites

1. **Visual Studio Code Extension Manager (vsce)**

   ```bash
   npm install -g vsce
   ```

2. **Azure DevOps Account**

   - Create an account at [Azure DevOps](https://dev.azure.com/)
   - Create a Personal Access Token (PAT) with "Marketplace" scope

3. **Publisher Account**
   - Create a publisher account at [VS Code Marketplace](https://marketplace.visualstudio.com/manage)

## Pre-Publishing Checklist

### 1. Update package.json

- [ ] Set your publisher name in `package.json`
- [ ] Update repository URL
- [ ] Verify version number
- [ ] Check all metadata fields

### 2. Update Documentation

- [ ] Update README.md with correct publisher name and repository links
- [ ] Update CHANGELOG.md with current version
- [ ] Review LICENSE file
- [ ] Update badge URLs in README.md

### 3. Add Visual Assets

- [ ] Create extension icon (128x128 PNG)
- [ ] Create demo GIF or screenshots
- [ ] Update README.md with correct image paths

### 4. Testing

- [ ] Test all commands work correctly
- [ ] Test keyboard shortcuts
- [ ] Test context menu integration
- [ ] Test on different file types (JS, TS, JSX, TSX)
- [ ] Test error handling

### 5. Code Quality

- [ ] Run linting: `npm run lint`
- [ ] Fix any linting issues
- [ ] Ensure TypeScript compilation: `npm run compile`
- [ ] Review code for any TODOs or debug code

## Publishing Steps

### Step 1: Prepare Your Extension

1. **Update package.json with your details:**

   ```json
   {
     "publisher": "your-publisher-name",
     "repository": {
       "type": "git",
       "url": "https://github.com/your-username/function-folding"
     }
   }
   ```

2. **Create an icon** (optional but recommended):

   - 128x128 PNG image
   - Save as `images/icon.png`
   - Add to package.json: `"icon": "images/icon.png"`

3. **Build the extension:**
   ```bash
   npm run vscode:prepublish
   ```

### Step 2: Package the Extension

```bash
# Create a .vsix package
vsce package

# This creates function-folding-1.0.0.vsix
```

### Step 3: Test the Package

```bash
# Install locally to test
code --install-extension function-folding-1.0.0.vsix

# Test all functionality
# Uninstall when done testing
code --uninstall-extension your-publisher.function-folding
```

### Step 4: Publish to Marketplace

1. **Login to vsce:**

   ```bash
   vsce login your-publisher-name
   # Enter your Personal Access Token when prompted
   ```

2. **Publish:**

   ```bash
   vsce publish
   ```

   Or publish a specific version:

   ```bash
   vsce publish 1.0.0
   ```

## Post-Publishing

### 1. Verify Publication

- Check your extension on the [VS Code Marketplace](https://marketplace.visualstudio.com/)
- Test installation from the marketplace
- Verify all metadata and images display correctly

### 2. Update Repository

- Tag the release in Git:
  ```bash
  git tag v1.0.0
  git push origin v1.0.0
  ```
- Create a GitHub release with the .vsix file

### 3. Monitor and Respond

- Monitor for user feedback and issues
- Respond to marketplace reviews
- Update documentation based on user feedback

## Version Updates

For future updates:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Test thoroughly
4. Build and publish:
   ```bash
   npm run vscode:prepublish
   vsce publish
   ```

## Marketplace Best Practices

### 1. Description

- Write a clear, concise description
- Use bullet points for features
- Include screenshots or GIFs
- Mention supported languages/file types

### 2. Keywords

- Use relevant keywords for discoverability
- Include terms like "folding", "javascript", "typescript", "productivity"

### 3. Categories

- Choose appropriate categories
- "Other" is often suitable for utility extensions

### 4. Regular Updates

- Keep the extension updated
- Respond to user feedback
- Fix bugs promptly
- Add requested features when appropriate

## Troubleshooting

### Common Issues

1. **"Publisher not found"**

   - Ensure you've created a publisher account
   - Use the correct publisher name in package.json

2. **"Personal Access Token is invalid"**

   - Regenerate PAT with "Marketplace (manage)" scope
   - Re-login with `vsce login`

3. **"Extension validation failed"**

   - Check package.json for required fields
   - Ensure all files are included in the package
   - Verify no syntax errors in TypeScript

4. **Images not displaying**
   - Use absolute URLs or relative paths from repository root
   - Ensure images are included in the package

## Resources

- [VS Code Extension Publishing Guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [vsce CLI Documentation](https://github.com/Microsoft/vscode-vsce)
- [Marketplace Publisher Management](https://marketplace.visualstudio.com/manage)
- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Example Commands Summary

```bash
# Install vsce globally
npm install -g vsce

# Package extension
vsce package

# Test package locally
code --install-extension function-folding-1.0.0.vsix

# Login to marketplace
vsce login your-publisher-name

# Publish extension
vsce publish

# Publish specific version
vsce publish 1.0.1
```

Remember to replace placeholder values (your-publisher-name, your-username, etc.) with your actual details!
