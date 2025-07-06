#!/bin/bash

# Function Folding Extension - Publishing Setup Script
# This script helps you prepare your extension for publishing

set -e

echo "🚀 Function Folding Extension - Publishing Setup"
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}➤ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if required tools are installed
check_requirements() {
    print_step "Checking requirements..."
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install Node.js and npm."
        exit 1
    fi
    
    if ! command -v vsce &> /dev/null; then
        print_warning "vsce is not installed. Installing globally..."
        npm install -g vsce
    fi
    
    print_success "Requirements check passed"
}

# Install dependencies
install_dependencies() {
    print_step "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
}

# Build the extension
build_extension() {
    print_step "Building extension..."
    npm run compile
    print_success "Extension built successfully"
}

# Run linting
lint_code() {
    print_step "Running linting..."
    npm run lint
    print_success "Linting passed"
}

# Check package.json for required fields
check_package_json() {
    print_step "Checking package.json..."
    
    # Check if placeholder values need to be replaced
    if grep -q "REPLACE_WITH_YOUR_PUBLISHER_NAME" package.json; then
        print_warning "Please update the publisher name in package.json"
        print_warning "Replace 'REPLACE_WITH_YOUR_PUBLISHER_NAME' with your actual publisher name"
    fi
    
    if grep -q "REPLACE_WITH_YOUR_USERNAME" package.json; then
        print_warning "Please update the repository URL in package.json"
        print_warning "Replace 'REPLACE_WITH_YOUR_USERNAME' with your actual GitHub username"
    fi
    
    print_success "Package.json check completed"
}

# Package the extension
package_extension() {
    print_step "Packaging extension..."
    vsce package
    print_success "Extension packaged successfully"
}

# Test the package locally
test_package() {
    print_step "Testing package locally..."
    
    # Find the .vsix file
    VSIX_FILE=$(find . -name "*.vsix" -type f | head -n 1)
    
    if [ -z "$VSIX_FILE" ]; then
        print_error "No .vsix file found. Package creation may have failed."
        exit 1
    fi
    
    echo "Extension package created: $VSIX_FILE"
    echo "To test locally, run: code --install-extension $VSIX_FILE"
    print_success "Package test completed"
}

# Display publishing instructions
show_publishing_instructions() {
    echo ""
    echo "🎉 Your extension is ready for publishing!"
    echo ""
    echo "Next steps:"
    echo "1. Create a publisher account at: https://marketplace.visualstudio.com/manage"
    echo "2. Create a Personal Access Token in Azure DevOps"
    echo "3. Login to vsce: vsce login your-publisher-name"
    echo "4. Publish: vsce publish"
    echo ""
    echo "For detailed instructions, see PUBLISHING.md"
}

# Main execution
main() {
    check_requirements
    install_dependencies
    build_extension
    lint_code
    check_package_json
    package_extension
    test_package
    show_publishing_instructions
}

# Run the main function
main

echo ""
print_success "Setup completed successfully!"
echo "📖 Check PUBLISHING.md for detailed publishing instructions"
echo "🎯 Don't forget to update package.json with your publisher name and repository URL"
