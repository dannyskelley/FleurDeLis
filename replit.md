# Intermediate Website Kit (SASS + Eleventy)

## Project Overview

A static website for "Fleur de Lis Full Service Salon" built with the CodeStitch Intermediate Starter Kit. Uses Eleventy (11ty) as the static site generator, Nunjucks for templating, SASS for styling, and Decap CMS for content management.

## Architecture

- **Build System:** Eleventy (11ty) v3
- **Package Manager:** npm
- **Template Engine:** Nunjucks (.njk)
- **Styling:** SASS with PostCSS (autoprefixer + cssnano in production)
- **JS Bundling:** esbuild
- **CMS:** Decap CMS (headless, admin panel at /admin)
- **Image Optimization:** @codestitchofficial/eleventy-plugin-sharp-images

## Project Structure

```
src/                    # Source files (Eleventy input)
  _data/               # Global data (client.js with site info)
  _includes/           # Nunjucks partials
    components/        # Reusable page sections
    layouts/           # Page layout templates
  admin/               # Decap CMS admin panel
  assets/              # Static assets (images, fonts, JS, SASS)
  config/              # Eleventy configuration helpers
    filters/           # Date formatting filters
    plugins/           # Sitemap, images config
    processors/        # SASS and JS build processors
  content/             # Content pages and blog posts
    pages/             # Site pages (about, contact, services, etc.)
    blog/              # Blog posts (markdown)
public/                # Build output (generated, not committed)
```

## Development

- **Dev server:** `cross-env ELEVENTY_ENV=DEV eleventy --serve`
- **Port:** 5000 (bound to 0.0.0.0)
- **Production build:** `npm run build:eleventy` (ELEVENTY_ENV=PROD)

## Deployment

- **Type:** Static site
- **Build command:** `npm run build:eleventy`
- **Public directory:** `public/`

## Key Configuration Files

- `.eleventy.js` — Main Eleventy config (plugins, filters, shortcodes, dev server)
- `src/_data/client.js` — Site-wide data (name, address, phone, etc.)
- `src/admin/config.yml` — Decap CMS configuration
- `netlify.toml` — Netlify deployment settings (original, not used in Replit)
