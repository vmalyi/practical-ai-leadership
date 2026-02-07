# PostHog Setup

## Site Tracking (practical-ai-leadership.com)

This site is wired to PostHog via `posthog-js` and a client tracker component.

### Files
- `src/components/PostHogTracker.tsx`
- `src/components/Providers.tsx`
- `src/components/Hero.tsx`
- `src/components/FinalCta.tsx`
- `src/components/Navbar.tsx`
- `src/components/Tiers.tsx`
- `.github/workflows/deploy.yml`
- `.env.example`

### Required Public Env Vars
- `NEXT_PUBLIC_POSTHOG_KEY` (optional override, fallback is hardcoded to the project key in `PostHogTracker.tsx`)
- `NEXT_PUBLIC_POSTHOG_HOST` (default set to `https://eu.i.posthog.com`)
- `NEXT_PUBLIC_POSTHOG_PROJECT_ID` (optional metadata property)

### Events Captured
- `$pageview` on route changes
- `booking_cta_clicked` for Google Calendar booking links
- `cta_clicked` for in-page primary CTA links to `#investment-options`
- `section_viewed` once per section when 50% visible
- `external_link_clicked` for outbound links
- `contact_email_clicked` for `mailto:` links

## Deploy Wiring (GitHub Pages)

The GitHub Action injects PostHog env vars during `npm run build` so static exports include analytics config.
The build now injects the project API key directly. This key is public by design for client-side ingestion and prevents silent "no-key" builds that strip tracking logic from the bundle.

## Validation Checklist

1. `npm run verify`
2. `npm run build`
3. Deploy to GitHub Pages
4. Open site in browser and interact with:
   - any booking CTA
   - primary in-page CTA
   - scroll through sections
5. In PostHog Live Events, verify events appear:
   - `booking_cta_clicked`
   - `cta_clicked`
   - `section_viewed`
   - `external_link_clicked`

## MCP Setup (Codex)

Codex MCP server entry:

```toml
[mcp_servers.posthog]
url = "https://mcp.posthog.com/mcp"
```

### Important
`phc_...` keys are PostHog project ingestion keys and do not authenticate MCP.

For MCP access, use one of:
- PostHog OAuth login flow in Codex (recommended)
- Personal API key (`phx_...`) if supported by your PostHog MCP auth flow

After updating Codex config, restart Codex to reload MCP servers.
