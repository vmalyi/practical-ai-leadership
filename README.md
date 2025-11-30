# Practical AI Leadership

Professional consulting website for AI advisory services, designed for client acquisition.

## 🌐 Live Site

**[practical-ai-leadership.com](https://practical-ai-leadership.com)** - AI strategy and engineering consultant.

## 🏗️ Built With

- **[MkDocs](https://www.mkdocs.org/)** - Static site generator
- **[shadcn Theme](https://github.com/chrieke/mkdocs-shadcn)** - Dark mode, single-page design
- **GitHub Actions** - Automated deployment

## 📚 Content

Single-page conversion site:
- **Hero** - Value proposition and primary CTA
- **Services** - Three-tier engagement model (Advisory, Active Participation, Full Integration)
- **Framework** - AI leadership methodology
- **Testimonials** - Social proof
- **Client Outcomes** - Results and transformations
- **Imprint** - Legal compliance (German TMG § 5)

## 🎨 Design

**Minimal conversion-focused UI:**
- Dark mode by default
- No search, navigation, or TOC
- Clean header, simple footer
- Two CTAs (hero + end)
- Mobile responsive

## 🚀 Deployment

### Automatic Deployment
Site deploys to GitHub Pages on push to `main` branch via GitHub Actions.

### Local Development
```bash
# Install dependencies
pip install mkdocs mkdocs-shadcn

# Serve locally
mkdocs serve -a localhost:8001

# Build static site
mkdocs build
```

## ⚙️ Configuration

- **Site Config**: `mkdocs.yml`
- **Content**: `docs/index.md` (single page), `docs/imprint.md`
- **Custom Templates**: `overrides/templates/` (header, footer, page, bottom_navigation, main)
- **Custom CSS**: `overrides/assets/stylesheets/extra.css`

## 📊 Analytics

**PostHog** (EU Cloud, cookieless) - No GDPR consent banner required.

Tracked events:
- `booking_cta_clicked` - Google Calendar booking CTA clicks
- `section_viewed` - Scroll tracking (hero, features, testimonials, etc.)
- `external_link_clicked` - Outbound link clicks

Config: `docs/assets/javascripts/posthog.js`

---

Built with MkDocs, deployed via GitHub Actions.
