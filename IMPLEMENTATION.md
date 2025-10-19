# Feature Grid Implementation Guide

## Overview
Built mkdocs-material style feature grid for "What I Take Off Your Plate" section using chrome-devtools MCP server to inspect real implementation.

## Tools Used
- **chrome-devtools MCP server** - Inspect live mkdocs-material CSS/HTML
- **Claude Code** - Development agent with browser automation
- **MkDocs + shadcn theme** - Static site generator
- **Chrome DevTools** - Viewport testing, computed styles analysis

## Approach

### 1. Research Phase
- Navigated to reference: https://squidfunk.github.io/mkdocs-material/#everything-you-would-expect
- Used `mcp__chrome-devtools__evaluate_script` to extract computed styles from `.mdx-expect` component
- Analyzed actual CSS values (not guessed):
  - List: `display: flex`, `flex-wrap: wrap`, `gap: 32px`
  - Item: `flex: 1 0 48%`, `width: 578px` (desktop)
  - Icon: `44px`, `background: rgba(226, 228, 233, 0.12)`, `border-radius: 100%`
  - Typography: h2 `25px/700`, p `16px/400`
  - Key trick: paragraph `margin-left: -56px` to span full width

### 2. Implementation
**HTML Structure** (`docs/index.md`):
```html
<div class="feature-section">
  <ul class="feature-list">
    <li class="feature-list__item md-typeset">
      <div class="feature-list__icon">
        <svg>...</svg>
      </div>
      <div class="feature-list__description">
        <h2>Title</h2>
        <p>Description</p>
      </div>
    </li>
  </ul>
</div>
```

**CSS** (`overrides/assets/stylesheets/extra.css`):
- Desktop: `flex: 1 0 calc((100% - 32px) / 2) !important` (accounts for gap)
- Mobile: `flex: 1 0 100% !important` (match specificity to override)
- Used `!important` to override theme defaults
- Responsive breakpoint: `@media (max-width: 768px)`

### 3. Testing
- Tested at multiple viewports: 375px, 768px, 1490px
- Used `resize_page` + `evaluate_script` to verify layout
- Confirmed items stack vertically on mobile, side-by-side on desktop

## Key Lessons

1. **Never guess CSS** - Always inspect actual implementation with DevTools
2. **Specificity matters** - Mobile rule needs same specificity as desktop (`.feature-section .feature-list .feature-list__item`)
3. **flex-basis over width** - Use `flex` property, not just `width`, for proper flex layout
4. **Account for gaps** - `calc((100% - 32px) / 2)` subtracts gap from available width
5. **Test responsive** - Chrome DevTools resize + computed styles verification

## Reference Materials

- **Live example**: https://squidfunk.github.io/mkdocs-material/#everything-you-would-expect
- **Icon source**: https://fonts.google.com/icons (Material Design Icons)
- **Alternative icons**: https://pictogrammers.com/library/mdi/

## Workflow Summary

```
1. Navigate to reference page
2. inspect_element → get computed styles (NOT source CSS)
3. Extract values: display, flex, gap, padding, margin, colors, typography
4. Implement matching HTML structure
5. Copy exact CSS values from inspection
6. Test at 3 viewports (mobile, tablet, desktop)
7. Fix specificity issues with !important if needed
8. Commit surgical changes
```

## Critical Pattern

**Problem**: Desktop CSS overrides mobile due to specificity
**Solution**: Match specificity in mobile breakpoint + use `!important`

```css
/* Desktop */
.feature-section .feature-list .feature-list__item {
  flex: 1 0 calc((100% - 32px) / 2) !important;
}

/* Mobile - MUST match specificity */
@media (max-width: 768px) {
  .feature-section .feature-list .feature-list__item {
    flex: 1 0 100% !important;  /* Override with equal specificity */
  }
}
```

---

**Built**: 2025-10-19
**Commits**: d6477db, 925bb92, 07221d2
