# GitHub Actions CI/CD Setup Guide

This document explains how to set up and configure the automated CI/CD pipeline for the Function Folding extension.

## 🚀 Pipeline Overview

The repository includes several automated workflows:

1. **CI Pipeline** (`ci.yml`) - Runs on every push and PR
2. **Release Pipeline** (`release.yml`) - Triggers on version tags
3. **Code Quality** (`code-quality.yml`) - Comprehensive quality checks
4. **Dependency Updates** (`dependencies.yml`) - Weekly dependency updates
5. **Version Bump** (`version-bump.yml`) - Manual version management

## 📋 Setup Requirements

### 1. GitHub Secrets Configuration

You need to configure the following secrets in your GitHub repository:

#### VS Code Marketplace Publishing

1. Go to [VS Code Marketplace Publisher Management](https://marketplace.visualstudio.com/manage)
2. Create a Personal Access Token (PAT)
3. Add it as a secret named `VSCE_PAT`

#### Open VSX Registry (Optional)

1. Go to [Open VSX Registry](https://open-vsx.org/)
2. Create an account and generate a PAT
3. Add it as a secret named `OVSX_PAT`

#### To add secrets:

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and Variables → Actions
3. Click "New repository secret"
4. Add the following secrets:
   - `VSCE_PAT`: Your VS Code Marketplace Personal Access Token
   - `OVSX_PAT`: Your Open VSX Registry Personal Access Token (optional)

### 2. Branch Protection Rules (Recommended)

Set up branch protection for `main`:

1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require status checks to pass before merging
   - Require branches to be up to date before merging
   - Include administrators

## 🔄 Workflow Details

### CI Pipeline (`ci.yml`)

**Triggers**: Push to `main`/`develop`, Pull Requests to `main`

**What it does**:

- Tests on multiple Node.js versions (18.x, 20.x)
- Runs linting and TypeScript compilation
- Executes tests
- Packages the extension
- Performs security audit
- Uploads build artifacts

### Release Pipeline (`release.yml`)

**Triggers**: Version tags (e.g., `v1.0.0`, `v2.1.3`)

**What it does**:

- Builds and tests the extension
- Creates GitHub release with changelog
- Publishes to VS Code Marketplace
- Publishes to Open VSX Registry
- Uploads .vsix file as release asset

### Code Quality (`code-quality.yml`)

**Triggers**: Push to `main`/`develop`, Pull Requests to `main`

**What it does**:

- Comprehensive linting analysis
- Code formatting checks
- Bundle size analysis
- Security scanning
- Comments PR with quality report

### Dependency Updates (`dependencies.yml`)

**Triggers**: Weekly schedule (Mondays), Manual dispatch

**What it does**:

- Checks for outdated dependencies
- Updates minor and patch versions
- Runs tests after updates
- Creates automated Pull Request

### Version Bump (`version-bump.yml`)

**Triggers**: Manual dispatch only

**What it does**:

- Bumps version (patch/minor/major)
- Updates CHANGELOG.md
- Creates and pushes version tag
- Creates draft release

## 🎯 Usage Instructions

### Releasing a New Version

#### Method 1: Automated Version Bump (Recommended)

1. Go to Actions tab in your GitHub repository
2. Select "Version Bump" workflow
3. Click "Run workflow"
4. Choose version type (patch/minor/major)
5. Optionally create pre-release
6. The workflow will:
   - Bump version in package.json
   - Update CHANGELOG.md
   - Create and push version tag
   - Create draft release

#### Method 2: Manual Tag Creation

1. Update version in package.json
2. Update CHANGELOG.md
3. Commit changes
4. Create and push tag:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

### Monitoring Workflows

- Check the Actions tab for workflow status
- Failed workflows will send notifications
- Review build artifacts and logs as needed

### Quality Assurance

- All PRs automatically get quality reports
- Security vulnerabilities are flagged
- Code formatting is enforced
- Dependencies are kept up to date

## 🛠️ Customization

### Modify Trigger Conditions

Edit the `on:` section in workflow files to change when they run.

### Adjust Node.js Versions

Update the matrix strategy in `ci.yml` to test different Node.js versions.

### Add More Quality Checks

Extend `code-quality.yml` to include additional tools like:

- SonarCloud integration
- Code coverage reporting
- Performance benchmarks

### Custom Release Notes

Modify the release creation section in `release.yml` to customize release notes format.

## 🔧 Troubleshooting

### Common Issues

1. **Release fails with permission error**
   - Check that `VSCE_PAT` secret is correctly set
   - Verify the token has necessary permissions

2. **Version bump doesn't work**
   - Ensure you have write permissions to the repository
   - Check that branch protection rules allow the action

3. **Security audit fails**
   - Review the audit output
   - Update vulnerable dependencies
   - Consider using `npm audit fix`

4. **Quality checks fail**
   - Review ESLint errors and fix them
   - Ensure code follows formatting standards
   - Check TypeScript compilation errors

### Getting Help

- Check workflow logs for detailed error messages
- Review GitHub Actions documentation
- Check VS Code extension publishing documentation

## 📈 Benefits

This CI/CD pipeline provides:

- **Automated Quality Assurance**: Every change is tested and validated
- **Consistent Releases**: Standardized release process with proper versioning
- **Security Monitoring**: Regular dependency updates and vulnerability scanning
- **Code Quality Enforcement**: Consistent code style and quality standards
- **Automated Publishing**: Seamless publishing to multiple registries
- **Documentation**: Automated changelog and release notes
- **Collaboration**: PR comments with quality reports and status checks

---

## 🎉 You're All Set!

Once configured, your extension will have a professional-grade CI/CD pipeline that automatically handles building, testing, quality assurance, and publishing. This ensures high-quality releases and makes collaboration easier for contributors.
