# RM Angular Dynamic Layout

Content-agnostic CSS Grid utilities and components for modern Angular. Zero JS overhead for layout, rich responsive utilities, and theming via CSS variables.

## Table of Contents
- Features
- Live Demo
- Why This Library
- Installation
- Quick Start
- Usage
- API Reference
- Advanced Configuration
- Peer Dependencies
- Best Practices
- Performance Optimization
- Browser Support
- Versioning & Angular Compatibility
- Breaking Changes
- FAQ
- Troubleshooting
- Project Structure
- Contributing Guidelines
- Roadmap
- Changelog
- License
- Examples
- Support & Community
- Acknowledgements
- References

## Features
- Standalone Angular components (`rm-layout`, `rm-layout-item`)
- Mobile-first responsive utilities (columns, spans, gaps, alignment)
- Declarative area grids (template areas, rows, columns)
- Theming with CSS custom properties
- Works with nested layouts and complex dashboards

## Live Demo
- Examples app routes: `/examples` in the demo application
- Browse code samples in `examples/` and docs in `docs/`

## Why This Library
- Content-agnostic grid primitives built for Angular
- Declarative, ergonomic, and highly customizable
- Scales from simple grids to complex area-based dashboards
- See `docs/WHY_THIS_LIBRARY.md`

## Installation
```bash
npm install rm-ng-dynamic-layout
```
Import standalone components where needed.
- See `docs/INSTALLATION.md`

## Quick Start
```ts
import { Component } from '@angular/core';
import { LayoutComponent, LayoutItemComponent } from 'rm-ng-dynamic-layout';

@Component({
  selector: 'app-quick-start',
  standalone: true,
  imports: [LayoutComponent, LayoutItemComponent],
  template: `
    <rm-layout [config]="{ columns: 12, gap: '1rem' }">
      <rm-layout-item [colSpan]="8">Main</rm-layout-item>
      <rm-layout-item [colSpan]="4">Side</rm-layout-item>
    </rm-layout>
  `
})
export class QuickStartComponent {}
```

## Usage
- Concepts, spans, areas, responsiveness, and styling
- See `docs/USAGE.md`

## API Reference
- Components, inputs, utility classes, CSS variables
- See `docs/API_REFERENCE.md`

## Advanced Configuration
- Responsive overrides and named areas
- Alignment and ordering
- Data-driven layouts
- See `docs/ADVANCED_CONFIGURATION.md`

## Peer Dependencies
- Angular 17+, TypeScript 5+, Node 18+, npm 9+
- See `docs/PEER_DEPENDENCY.md`

## Best Practices
- Maintainable and accessible layout patterns
- Theming via CSS variables, scoping classes, clear area names
- See `docs/BEST_PRACTICES.md`

## Performance Optimization
- Utility classes, minimal DOM nesting, avoid heavy re-rendering
- Build optimizations
- See `docs/PERFORMANCE_OPTIMIZATION.md`

## Browser Support
- Modern evergreen browsers; IE not supported
- See `docs/BROWSER_SUPPORT.md`

## Versioning & Angular Compatibility
- Semantic versioning and compatibility guarantees
- Notes on supported Angular versions
- See `docs/VERSIONING_SUPPORT.md`

## Breaking Changes
- Policy and migration guidance
- See `docs/BREAKING_CHANGE_POLICY.md`

## FAQ
- Common questions and usage tips
- See `docs/FAQ.md`

## Troubleshooting
- Template parse errors, style application, responsive behavior, build errors
- See `docs/TROUBLESHOOTING.md`

## Project Structure
- Repository layout and key folders
- See `docs/PROJECT_STRUCTURE.md`

## Contributing Guidelines
- Please follow Angular/TypeScript best practices
- See `projects/rm-ng-dynamic-layout/CONTRIBUTING.md`

## Roadmap
- Planned improvements and milestones
- See `docs/ROADMAP.md`

## Changelog
- Documentation changelog: `docs/CHANGELOG.md`
- Library release notes: `projects/rm-ng-dynamic-layout/CHANGELOG.md`

## License
- Documentation and examples follow the same license as the library
- See `docs/LICENSE.md` and `projects/rm-ng-dynamic-layout/LICENSE`

## Examples
- Explore code samples in `examples/`:
  - `basic`, `large-scale`, `advanced`, `configurable`, `customized`, `responsive`, `grid-areas`, `theming`
- Run the demo app and open `/examples` route

## Support & Community
- Issues and discussions in this repo
- PRs welcome

## Acknowledgements
- Inspired by well-structured Angular component documentation styles

## References
- rm-ng-star-rating Wiki (structure reference): https://github.com/malikrajat/rm-ng-star-rating/wiki
