# CSS Variables Reference

This document provides a complete reference for all CSS custom properties (variables) available in the RM Angular Dynamic Layout library.

## Layout Component Variables

### Grid Properties
```css
/* Grid structure */
--rm-layout-columns: 12;                    /* Number of columns */
--rm-layout-rows: auto;                     /* Number of rows */
--rm-layout-template-columns: repeat(12, 1fr); /* Grid template columns */
--rm-layout-template-rows: auto;            /* Grid template rows */
--rm-layout-template-areas: none;           /* Named grid areas */

/* Grid spacing */
--rm-layout-gap: 1rem;                      /* Grid gap (both row and column) */
--rm-layout-column-gap: 1rem;               /* Column gap */
--rm-layout-row-gap: 1rem;                  /* Row gap */

/* Grid auto behavior */
--rm-layout-auto-columns: auto;             /* Auto columns sizing */
--rm-layout-auto-rows: auto;                /* Auto rows sizing */
--rm-layout-auto-flow: row;                 /* Auto flow direction */
```

### Styling Properties
```css
/* Layout container styling */
--rm-layout-padding: 0;                     /* Container padding */
--rm-layout-margin: 0;                      /* Container margin */
--rm-layout-background: transparent;        /* Background color/image */
--rm-layout-border: none;                   /* Border */
--rm-layout-border-radius: 0;               /* Border radius */
--rm-layout-box-shadow: none;               /* Box shadow */

/* Layout dimensions */
--rm-layout-min-height: auto;               /* Minimum height */
--rm-layout-max-height: none;               /* Maximum height */
--rm-layout-width: auto;                    /* Width */
--rm-layout-max-width: none;                /* Maximum width */
--rm-layout-overflow: visible;              /* Overflow behavior */
```

### Responsive Breakpoint Variables
Each breakpoint (sm, md, lg, xl, xxl) supports all the above variables with prefixes:

```css
/* Small screens (≥576px) */
--rm-layout-sm-columns: 12;
--rm-layout-sm-gap: 1rem;
--rm-layout-sm-padding: 0;
--rm-layout-sm-background: transparent;
/* ... all other properties with -sm- prefix */

/* Medium screens (≥768px) */
--rm-layout-md-columns: 12;
--rm-layout-md-gap: 1rem;
/* ... all other properties with -md- prefix */

/* Large screens (≥992px) */
--rm-layout-lg-columns: 12;
/* ... all other properties with -lg- prefix */

/* Extra large screens (≥1200px) */
--rm-layout-xl-columns: 12;
/* ... all other properties with -xl- prefix */

/* Extra extra large screens (≥1400px) */
--rm-layout-xxl-columns: 12;
/* ... all other properties with -xxl- prefix */
```

## Layout Item Component Variables

### Grid Positioning
```css
/* Grid positioning */
--rm-layout-item-col-span: auto;            /* Column span */
--rm-layout-item-row-span: auto;            /* Row span */
--rm-layout-item-col-start: auto;           /* Column start position */
--rm-layout-item-col-end: auto;             /* Column end position */
--rm-layout-item-row-start: auto;           /* Row start position */
--rm-layout-item-row-end: auto;             /* Row end position */
--rm-layout-item-area: auto;                /* Grid area name */

/* Item behavior */
--rm-layout-item-order: 0;                  /* Display order */
--rm-layout-item-justify-self: auto;        /* Horizontal alignment */
--rm-layout-item-align-self: auto;          /* Vertical alignment */
```

### Styling Properties
```css
/* Item styling */
--rm-layout-item-padding: 0;                /* Item padding */
--rm-layout-item-margin: 0;                 /* Item margin */
--rm-layout-item-background: transparent;   /* Background color/image */
--rm-layout-item-border: none;              /* Border */
--rm-layout-item-border-radius: 0;          /* Border radius */
--rm-layout-item-box-shadow: none;          /* Box shadow */

/* Item dimensions */
--rm-layout-item-min-height: auto;          /* Minimum height */
--rm-layout-item-max-height: none;          /* Maximum height */
--rm-layout-item-min-width: auto;           /* Minimum width */
--rm-layout-item-max-width: none;           /* Maximum width */
--rm-layout-item-overflow: visible;         /* Overflow behavior */

/* Visual effects */
--rm-layout-item-opacity: 1;                /* Opacity */
--rm-layout-item-transform: none;           /* CSS transform */
--rm-layout-item-transition: none;          /* CSS transition */
```

### Responsive Breakpoint Variables
Each breakpoint supports all item variables with prefixes:

```css
/* Small screens (≥576px) */
--rm-layout-item-sm-col-span: auto;
--rm-layout-item-sm-padding: 0;
--rm-layout-item-sm-background: transparent;
/* ... all other properties with -sm- prefix */

/* Medium, Large, XL, XXL follow the same pattern */
--rm-layout-item-md-*
--rm-layout-item-lg-*
--rm-layout-item-xl-*
--rm-layout-item-xxl-*
```

## Usage Examples

### Basic Styling Override
```css
/* Global styles.css */
.my-layout {
  --rm-layout-gap: 2rem;
  --rm-layout-padding: 1rem;
  --rm-layout-background: #f5f5f5;
  --rm-layout-border-radius: 8px;
}

.my-layout-item {
  --rm-layout-item-padding: 1rem;
  --rm-layout-item-background: white;
  --rm-layout-item-border-radius: 4px;
  --rm-layout-item-box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Responsive Styling
```css
.responsive-layout {
  /* Mobile first */
  --rm-layout-gap: 0.5rem;
  --rm-layout-padding: 1rem;
  
  /* Tablet */
  --rm-layout-md-gap: 1rem;
  --rm-layout-md-padding: 2rem;
  
  /* Desktop */
  --rm-layout-lg-gap: 2rem;
  --rm-layout-lg-padding: 3rem;
}
```

### Theme-based Styling
```css
/* Light theme */
.theme-light {
  --rm-layout-background: #ffffff;
  --rm-layout-item-background: #f8f9fa;
  --rm-layout-item-border: 1px solid #e9ecef;
}

/* Dark theme */
.theme-dark {
  --rm-layout-background: #212529;
  --rm-layout-item-background: #343a40;
  --rm-layout-item-border: 1px solid #495057;
}
```

### Component-specific Overrides
```css
/* Card layout styling */
.card-layout {
  --rm-layout-gap: 1.5rem;
  --rm-layout-item-background: white;
  --rm-layout-item-border-radius: 12px;
  --rm-layout-item-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --rm-layout-item-transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-layout .rm-layout-item:hover {
  --rm-layout-item-transform: translateY(-2px);
  --rm-layout-item-box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}
```

### Dashboard Layout Example
```css
.dashboard-layout {
  --rm-layout-gap: 1rem;
  --rm-layout-padding: 1rem;
  --rm-layout-background: #f1f3f4;
  --rm-layout-min-height: 100vh;
}

.dashboard-widget {
  --rm-layout-item-background: white;
  --rm-layout-item-border-radius: 8px;
  --rm-layout-item-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  --rm-layout-item-padding: 1.5rem;
  --rm-layout-item-transition: box-shadow 0.2s ease;
}

.dashboard-widget:hover {
  --rm-layout-item-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

## Best Practices

### 1. Use CSS Custom Properties for Theming
```css
:root {
  /* Define your design system tokens */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-border: #e9ecef;
}

.my-layout {
  --rm-layout-gap: var(--spacing-md);
  --rm-layout-padding: var(--spacing-lg);
  --rm-layout-background: var(--color-background);
}
```

### 2. Responsive Design Patterns
```css
/* Mobile-first approach */
.responsive-grid {
  /* Base (mobile) */
  --rm-layout-columns: 1;
  --rm-layout-gap: var(--spacing-sm);
  
  /* Tablet */
  --rm-layout-md-columns: 2;
  --rm-layout-md-gap: var(--spacing-md);
  
  /* Desktop */
  --rm-layout-lg-columns: 3;
  --rm-layout-lg-gap: var(--spacing-lg);
  
  /* Large desktop */
  --rm-layout-xl-columns: 4;
  --rm-layout-xl-gap: var(--spacing-xl);
}
```

### 3. Component Isolation
```css
/* Use specific selectors to avoid conflicts */
.my-component .rm-layout {
  --rm-layout-gap: 2rem;
}

/* Or use CSS modules/scoped styles */
:host .rm-layout {
  --rm-layout-background: var(--component-background);
}
```

### 4. Performance Considerations
```css
/* Avoid complex calculations in CSS variables */
/* Good */
.layout {
  --rm-layout-gap: 1rem;
}

/* Avoid if possible */
.layout {
  --rm-layout-gap: calc(var(--base-spacing) * var(--multiplier) + 0.5rem);
}
```

## Container Queries Support

For modern browsers supporting container queries, you can use them alongside the library:

```css
.responsive-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .responsive-container .rm-layout {
    --rm-layout-columns: 2;
    --rm-layout-gap: 1rem;
  }
}

@container (min-width: 600px) {
  .responsive-container .rm-layout {
    --rm-layout-columns: 3;
    --rm-layout-gap: 1.5rem;
  }
}
```

This approach gives you element-based responsive behavior instead of viewport-based media queries.