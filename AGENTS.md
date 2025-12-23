# Next.js Project Agent Guidelines

## Project Overview

**Framework:** Next.js 15.x with App Router
**Styling:** Tailwind CSS
**Deployment:** GitHub Pages (static export)
**Domain:** practical-ai-leadership.com

This is a single-offer landing page for the AI Agent Velocity Audit service.

---

## Before Making Any Change

1. Ensure you're in the correct directory: `projects/ai-consultancy/websites/practical-ai-leadership/`
2. Check the dev server is running or start it: `npm run dev`
3. Understand which component/file you're modifying

---

## After Every Change

### Mandatory Verification Steps

Run these after every code change:

```bash
# 1. Format code
npm run format

# 2. Lint code
npm run lint

# 3. Type check
npm run type-check

# 4. Verify dev server still works
# (should already be running, check for errors in terminal)

# 5. Build test (before committing)
npm run build
```

### Quick Verification (During Development)

```bash
npm run verify
```

This runs format, lint, and type-check in sequence.

---

## Development Workflow

### Starting Development

```bash
cd projects/ai-consultancy/websites/practical-ai-leadership
npm install          # Only first time or after package changes
npm run dev          # Start development server at localhost:3000
```

### Making Changes

1. Make your code change
2. Check browser for visual verification
3. Run `npm run verify` to check formatting/linting/types
4. If all passes, continue to next change
5. Before committing: run `npm run build`

### Before Committing

```bash
npm run build        # Full static export build
```

This ensures the static export works and no runtime errors exist.

---

## Package.json Scripts

Ensure these scripts exist in `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "type-check": "tsc --noEmit",
    "verify": "npm run format && npm run lint && npm run type-check"
  }
}
```

---

## Required Dev Dependencies

```bash
npm install -D prettier eslint-config-prettier
```

---

## Code Quality Standards

### TypeScript
- All files use `.tsx` or `.ts` extensions
- No `any` types without explicit justification
- Props interfaces defined for all components

### Tailwind CSS
- Use Tailwind utility classes exclusively
- No inline styles unless absolutely necessary
- Follow mobile-first responsive design

### Component Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── [route]/      # Additional routes
├── components/       # React components
├── config/           # Configuration and content
└── lib/              # Utilities
```

### File Naming
- Components: PascalCase (e.g., `Hero.tsx`, `ThemeToggle.tsx`)
- Config files: camelCase (e.g., `site.ts`, `content.ts`)
- Utilities: camelCase (e.g., `utils.ts`)

---

## Common Issues and Solutions

### Hydration Errors
- Use `'use client'` directive for components with useState/useEffect
- Add `suppressHydrationWarning` to html tag for theme provider
- Use mounted state pattern for client-only content

### Static Export Issues
- No `getServerSideProps` or API routes
- Use `output: 'export'` in next.config.js
- Set `images: { unoptimized: true }` for static images

### Theme Toggle Issues
- Ensure ThemeProvider wraps entire app
- Use `defaultTheme="dark"` and `enableSystem={false}`
- Handle hydration with mounted state check

---

## Git Workflow

### Commit Messages
```
feat: Add Hero component with CTA button
fix: Resolve hydration error in FAQ accordion
style: Format all components with Prettier
refactor: Extract common styles to Container
```

### Before Push
```bash
npm run build        # Must succeed
git status           # Check for untracked files
git diff             # Review changes
```

---

## Directory Reference

| Path | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout with providers |
| `src/app/page.tsx` | Home page composition |
| `src/components/` | All React components |
| `src/config/site.ts` | Site configuration |
| `src/config/content.ts` | Landing page content |
| `public/` | Static assets (images, CNAME) |
| `next.config.js` | Next.js configuration |
| `tailwind.config.ts` | Tailwind configuration |
