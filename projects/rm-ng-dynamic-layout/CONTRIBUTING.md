# Contributing to RM Angular Dynamic Layout

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code:

- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain a welcoming environment for all contributors

## How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use the issue template** if available
3. **Provide clear reproduction steps** for bugs
4. **Include environment details** (Angular version, browser, etc.)

### Suggesting Features

For feature requests:

1. **Check if it aligns with the library's goals** (content-agnostic, layout-only)
2. **Provide clear use cases** and examples
3. **Consider backward compatibility** implications
4. **Discuss implementation approach** if you have ideas

### Pull Requests

#### Before You Start

1. **Open an issue first** for significant changes
2. **Fork the repository** and create a feature branch
3. **Follow the coding standards** outlined below

#### Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/rm-ng-dynamic-layout.git
cd rm-ng-dynamic-layout

# Install dependencies
npm install

# Start development server
ng serve rm-ng-dynamic-layout-main

# Build library
ng build rm-ng-dynamic-layout

# Run tests
ng test rm-ng-dynamic-layout
```

#### Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the guidelines below
3. **Add/update tests** for your changes
4. **Update documentation** if needed
5. **Ensure all tests pass**
6. **Create a clear PR description** explaining your changes

## Coding Standards

### Do's ✅

#### Architecture
- **Keep it content-agnostic** - no assumptions about rendered content
- **Use CSS Grid** as the foundation for layout functionality
- **Leverage CSS custom properties** for styling extensibility
- **Support standalone components** and traditional modules
- **Maintain tree-shaking compatibility**

#### Code Quality
- **Follow Angular style guide** conventions
- **Use TypeScript strict mode** features
- **Write self-documenting code** with clear variable names
- **Add JSDoc comments** for public APIs
- **Keep functions small** and focused on single responsibilities

#### CSS/SCSS
- **Use CSS custom properties** for all configurable values
- **Follow BEM-like naming** for CSS classes (`rm-layout`, `rm-layout-item`)
- **Mobile-first responsive design** approach
- **Avoid hard-coded values** - use variables instead
- **Keep specificity low** to allow easy overrides

#### Testing
- **Write unit tests** for all public methods
- **Test edge cases** and error conditions
- **Mock external dependencies** properly
- **Use descriptive test names** that explain the scenario

### Don'ts ❌

#### Architecture
- **Don't add business logic** - keep it purely layout-focused
- **Don't depend on third-party UI libraries** (Bootstrap, Material, etc.)
- **Don't make assumptions about content** (charts, cards, images, etc.)
- **Don't auto-manage responsive behavior** - let consumers control it
- **Don't break existing APIs** without major version bump

#### Code Quality
- **Don't use `any` type** - prefer proper typing
- **Don't ignore TypeScript errors** - fix them properly
- **Don't add unused code** or commented-out blocks
- **Don't use `console.log`** in production code
- **Don't bypass Angular's change detection** unnecessarily

#### CSS/SCSS
- **Don't use `!important`** unless absolutely necessary
- **Don't hard-code colors or dimensions** - use CSS variables
- **Don't create global styles** that could conflict with host apps
- **Don't use vendor prefixes** - let build tools handle them
- **Don't nest selectors** more than 3 levels deep

#### Performance
- **Don't create memory leaks** - unsubscribe from observables
- **Don't trigger unnecessary change detection** cycles
- **Don't use complex CSS calculations** in custom properties
- **Don't add heavy dependencies** to the library

## Documentation Standards

### Code Documentation
- **Document all public APIs** with JSDoc comments
- **Include usage examples** in documentation
- **Explain complex logic** with inline comments
- **Keep comments up-to-date** with code changes

### README Updates
- **Update examples** when APIs change
- **Add new features** to the feature list
- **Keep installation instructions** current
- **Update version compatibility** information

### Changelog
- **Follow semantic versioning** (semver)
- **Document breaking changes** clearly
- **Include migration guides** for major versions
- **Credit contributors** in release notes

## Testing Guidelines

### Unit Tests
- **Test public API methods** thoroughly
- **Mock dependencies** appropriately
- **Test error conditions** and edge cases
- **Maintain high code coverage** (aim for >90%)

### Integration Tests
- **Test component interactions** with real DOM
- **Verify CSS custom properties** are applied correctly
- **Test responsive behavior** at different breakpoints
- **Validate accessibility** features

### Manual Testing
- **Test in multiple browsers** (Chrome, Firefox, Safari, Edge)
- **Verify on different devices** and screen sizes
- **Check with screen readers** for accessibility
- **Test with real-world content** scenarios

## Release Process

### Version Numbering
- **Patch** (1.0.1): Bug fixes, documentation updates
- **Minor** (1.1.0): New features, backward-compatible changes
- **Major** (2.0.0): Breaking changes, API modifications

### Pre-Release Checklist
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] CHANGELOG.md is updated
- [ ] Version number is bumped
- [ ] Build artifacts are clean

### Angular Version Compatibility

The library maintains compatibility with:
- **Current**: Latest Angular version
- **LTS**: Current Angular LTS version
- **Previous LTS**: Previous Angular LTS version (when possible)

#### Compatibility Strategy
- **Peer dependencies** specify minimum supported versions
- **Build targets** support modern browsers (ES2022+)
- **Testing** covers supported Angular versions
- **Documentation** clearly states version requirements

## Getting Help

### Questions
- **Check existing documentation** first
- **Search closed issues** for similar questions
- **Open a discussion** for general questions
- **Be specific** about your use case

### Debugging
- **Provide minimal reproduction** cases
- **Include error messages** and stack traces
- **Share relevant code** snippets
- **Mention your environment** details

## Recognition

Contributors will be:
- **Listed in CONTRIBUTORS.md** file
- **Mentioned in release notes** for significant contributions
- **Credited in documentation** for major features
- **Thanked publicly** on social media (with permission)

Thank you for helping make this library better! 🚀