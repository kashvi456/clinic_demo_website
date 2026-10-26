# Clinic Website Template

A premium, responsive, single-page website for clinics. It is built as a reusable template: all clinic-specific information lives in one configuration file, so the same codebase can be used for many clinics.

The site is frontend-only. It needs no database, no backend, and no API. Appointments are handled by telephone: every appointment button is a `tel:` link to the clinic's number.

## Features

- Single-page layout with Home, About, Testimonials, and Contact sections
- Sticky navigation with smooth scrolling and a mobile hamburger menu
- Hero section with configurable headline, subtitle, and calls to action
- About section with configurable feature cards
- Sample testimonials, clearly labelled as demo content
- Contact section with telephone actions
- Footer with quick links, conditional social links, and an automatic copyright year
- Optional demo disclaimer, controlled from configuration
- Branding colors applied from configuration through CSS custom properties
- Scroll reveal animations (Intersection Observer) and entrance animations
- Reduced-motion support, keyboard focus styles, and semantic HTML

## Technologies

- React 18
- Vite (build tool and development server)
- Plain CSS with custom properties
- Lucide React (icons)

## Prerequisites

- Node.js 18 or later
- npm (installed with Node.js)

## Installation

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Vite prints a local address (usually http://localhost:5173). Open it in your browser.

## Build for production

```bash
npm run build
```

The optimized static site is written to the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

## Static deployment

The contents of `dist/` are plain static files. They can be hosted on any static host, for example Netlify, Vercel, GitHub Pages, Cloudflare Pages, or a standard web server.

1. Run `npm run build`.
2. Upload the contents of the `dist/` folder to your host.

The build uses relative asset paths (`base: "./"` in `vite.config.js`), so it also works from a sub-folder.

## Customizing a clinic

Almost everything clinic-specific is in **`src/config/clinic.js`**. Edit that file and do not change the components.

| What to change | Where |
| --- | --- |
| Clinic name and tagline | `name`, `tagline` |
| Location | `location.city`, `location.state`, `location.country` (the displayed address is generated from these) |
| Telephone number | `contact.phone`. The `tel:` link is generated automatically from it. |
| Brand colors | `branding` |
| Hero headline and subtitle | `content.heroTitle`, `content.heroSubtitle` |
| About heading and description | `content.aboutTitle`, `content.aboutDescription` |
| Contact heading and description | `content.contactTitle`, `content.contactDescription` |
| Trust indicators (hero) | `trustIndicators` |
| About feature cards | `aboutFeatures` |
| Image paths and alt text | `images` |
| Social media links | `socialLinks`. Leave a link empty to hide it. |
| Demo disclaimer | `demo.isDemo`, `demo.showDemoNotice` |

**Telephone number:** Use the international format where possible, for example `"+91 44 1234 5678"`. Verify the number and its dialing format with the clinic before deployment. The number is defined only in `clinic.js`.

## Changing colors

Edit the `branding` block in `src/config/clinic.js`:

- `primaryColor`: buttons, accents, and the logo badge
- `secondaryColor`: section tints and the hero background
- `accentColor`: icon badges and image backgrounds
- `textColor`: body text
- `backgroundColor`: page background

The colors are applied as CSS custom properties at startup, so the whole site updates consistently. Hover colors are derived automatically from the primary color.

## Changing images

Replace the files in `public/images/` with the clinic's own photos, keeping the same file names or updating the paths in `images` in `clinic.js`. Also update the alt text there so it describes the new photo.

- The hero and about images are currently photographs in `public/images/clinic-hero.jpg` and `public/images/clinic-about.jpg`. For a new clinic, use high-quality photographs of its own premises and staff. Keep files around 1600 px wide and compressed (JPG or WebP, under about 300 KB) so pages load quickly.
- Write meaningful alt text describing the image.
- Only use photographs you have permission to publish.

## Replacing sample testimonials

The current testimonials are fictional and exist only for demonstration. They are stored in **`src/data/testimonials.js`**.

Before a real clinic uses the site:

1. Replace the entries with genuine, client-approved patient reviews. Only use reviews the patient has agreed to share.
2. Keep each review's name and rating accurate.
3. Set `demo.isDemo` and `demo.showDemoNotice` to `false` in `clinic.js` only after the demo content has been replaced and the clinic has approved the site. While `isDemo` is `true`, the page labels the reviews as sample content.

## Project structure

```
src/
  config/clinic.js        Central clinic configuration
  data/testimonials.js    Testimonial content
  components/             UI sections (Navbar, Hero, About, Testimonials, Contact, Footer, DemoNotice)
  utils/branding.js       Applies brand colors
  App.jsx, main.jsx, index.css
public/images/            Clinic images
```

See `ARCHITECTURE.md` for more detail.

## Backend and database

This website does not require a database, a backend server, authentication, or any API. It contains no contact or booking forms, no WhatsApp integration, and no map embeds. It can be deployed to any static host.
