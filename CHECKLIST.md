# Pre-Publishing Checklist

Use this checklist to ensure your extension is ready for publishing to the VS Code Marketplace.

## 📋 Required Updates

### 1. Publisher Information

- [ ] Update `"publisher"` in `package.json` with your actual publisher name
- [ ] Update repository URL in `package.json` with your GitHub username
- [ ] Update homepage URL in `package.json`
- [ ] Update bugs URL in `package.json`

### 2. README Updates

- [ ] Update badge URLs in README.md with correct publisher name
- [ ] Update repository links in README.md
- [ ] Update demo GIF/screenshot paths if you add them
- [ ] Review and customize the content to match your preferences

### 3. Visual Assets (Optional but Recommended)

- [ ] Create an extension icon (128x128 PNG)
- [ ] Add `"icon": "images/icon.png"` to package.json
- [ ] Create demo GIF or screenshots
- [ ] Update README.md with correct image paths

## 🛠️ Technical Preparation

### 1. Code Quality

- [ ] Run `npm run lint` and fix any issues
- [ ] Run `npm run compile` to ensure TypeScript builds correctly
- [ ] Test all extension commands manually
- [ ] Test keyboard shortcuts work correctly
- [ ] Test context menu integration

### 2. Testing

- [ ] Test fold/unfold functionality on different function types
- [ ] Test with JavaScript files
- [ ] Test with TypeScript files
- [ ] Test with JSX/TSX files
- [ ] Test error handling (empty files, no functions, etc.)

### 3. Dependencies

- [ ] Ensure all dependencies are correctly listed in package.json
- [ ] No unused dependencies
- [ ] All devDependencies are properly categorized

## 🏪 Marketplace Setup

### 1. Prerequisites

- [ ] Install vsce globally: `npm install -g vsce`
- [ ] Create Azure DevOps account
- [ ] Create Personal Access Token with "Marketplace (manage)" scope
- [ ] Create VS Code publisher account

### 2. Publishing Process

- [ ] Run the setup script: `./setup.sh`
- [ ] Login to vsce: `vsce login your-publisher-name`
- [ ] Publish: `vsce publish`

## 📝 Documentation

### 1. Required Files

- [ ] README.md (comprehensive with examples)
- [ ] CHANGELOG.md (version history)
- [ ] LICENSE (MIT license included)
- [ ] package.json (complete with all metadata)

### 2. Optional but Helpful

- [ ] CONTRIBUTING.md (contribution guidelines)
- [ ] PUBLISHING.md (detailed publishing instructions)
- [ ] GitHub repository with proper description and topics

## 🔍 Final Verification

### 1. Local Testing

- [ ] Package the extension: `vsce package`
- [ ] Install locally: `code --install-extension function-folding-1.0.0.vsix`
- [ ] Test all functionality works as expected
- [ ] Uninstall test version: `code --uninstall-extension publisher.function-folding`

### 2. Pre-Publish Review

- [ ] Version number is correct (start with 1.0.0)
- [ ] Description is clear and under 150 characters
- [ ] Keywords are relevant and helpful for discovery
- [ ] No sensitive information (API keys, passwords, etc.)
- [ ] No debug code or console.log statements

## 🚀 Ready to Publish!

Once all items are checked:

1. Run: `vsce publish`
2. Monitor the marketplace for your extension
3. Test installation from marketplace
4. Respond to any user feedback

## 📊 Post-Publishing

- [ ] Tag the release in Git: `git tag v1.0.0 && git push origin v1.0.0`
- [ ] Create GitHub release with .vsix file
- [ ] Monitor marketplace reviews and ratings
- [ ] Set up issue tracking and support

---

**Note**: Replace all placeholder values (publisher names, URLs, etc.) with your actual information before publishing!
