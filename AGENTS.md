# Renaise Portfolio

## Project Overview
Personal portfolio site for Renaise Kim — a visual producer and prototyper. Built with Astro + Tailwind CSS, deployed to Cloudflare Pages.

## Design Concept: "Showroom"
- Dark theme with dot grid background
- RENAISE wordmark as subtle background watermark (3% opacity)
- macOS Dock-style sidebars that magnify on hover
- Center content swaps to show project preview on hover

## Tech Stack
- **Framework:** Astro 4.x (static output)
- **Styling:** Tailwind CSS
- **Fonts:** Inter (sans), Playfair Display (serif)
- **Hosting:** Cloudflare Pages

## File Structure
```
portfolio/
├── src/
│   ├── layouts/
│   │   └── Base.astro         # HTML shell, fonts, meta tags
│   ├── components/
│   │   ├── ProjectCard.astro  # (unused in current design)
│   │   └── SocialLink.astro   # (unused in current design)
│   └── pages/
│       └── index.astro        # Main showroom page
├── public/
│   ├── assets/
│   │   ├── projects/          # Project icons (SVG)
│   │   ├── tools/             # Tool icons (SVG)
│   │   └── socials/           # Social icons (SVG)
│   └── favicon.svg
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Key File: src/pages/index.astro
This is the main file. Contains:
- `projects` array — edit to add/update projects
- `tools` array — edit to update toolbox
- `profiles` array — edit to update social links
- Dock magnification CSS
- Project preview swap JavaScript

## Current Projects Array Structure
```js
{
  id: 'project-id',
  name: 'Project Name',
  icon: '/assets/projects/icon.svg',
  href: 'https://link-to-case-study.com',
  description: 'Short description',
  tags: ['Tag1', 'Tag2']
}
```

## Commands
```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment (Cloudflare Pages)
1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`
5. Point domain DNS to Cloudflare

## Owner Context
Renaise Kim is:
- Visual producer + prototyper (8 years experience)
- Based in NYC
- Studio partner at Studio Artifice
- Targeting A24 Labs designer role (Scott Belsky)
- Also pursuing Asimov managed service retainer

## Design Goals
- Show "brand integrity + UX ingenuity" (per A24 Labs job post)
- Position as creative director, not just designer
- Highlight Google Labs/Veo3 project as AI + creativity proof point
- Keep it minimal, tasteful, distinctive

## Next Steps
- [ ] Add real project icons to `/public/assets/projects/`
- [ ] Update project hrefs to link to case studies (Notion, Figma, etc.)
- [ ] Add project thumbnail images for expanded view
- [ ] Deploy to Cloudflare Pages
- [ ] Connect renaise.com domain
