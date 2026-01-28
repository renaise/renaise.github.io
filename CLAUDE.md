# Renaise Portfolio

## Owner
Renaise Kim — Visual producer + prototyper, 8 years experience. Based in NYC. Studio partner at Studio Artifice.

## Immediate Goal
Land the **A24 Labs designer role** (Scott Belsky). Secondary: Close Asimov managed service retainer.

## What A24 Labs Wants
> "A designer who values brand integrity as much as UX ingenuity, who loves the story behind unforgettable stories, eager to work closely with super ambitious engineers, and seeks an execution-oriented team."

## Key Proof Point
**Google Labs / Veo3** — Creative direction for pre-release AI video model. Shifted narrative from "stock footage replacement" to "avant-garde medium." This proves Renaise already understands the AI + creativity intersection A24 Labs is pursuing.

---

## Project: renaisedotcom

### Stack
- Astro 4.x (static)
- Tailwind CSS
- Cloudflare Pages (deploy target)

### Design: "Showroom"
- Dark theme (#0a0a0a) with dot grid background
- RENAISE wordmark as subtle watermark (3% opacity)
- macOS Dock-style sidebars (magnify on hover)
- Center content swaps to show project preview on hover
- Minimal, tasteful, distinctive — not Awwwards flashy

### Key File
`src/pages/index.astro` — Contains projects array, dock behavior CSS, preview swap JS.

### Project Data Structure
```js
{
  id: 'project-id',
  name: 'Project Name',
  icon: '/assets/projects/icon.svg',
  href: 'https://case-study-link.com',
  description: 'One-line description',
  tags: ['Tag1', 'Tag2']
}
```

### Commands
```bash
npm run dev      # localhost:4321
npm run build    # outputs to dist/
```

### Deploy
Push to GitHub → Cloudflare Pages auto-deploys. Build: `npm run build`, Output: `dist`.

---

## Current State
- [x] Scaffold complete
- [x] Showroom layout with dock behavior
- [x] Project hover → center preview
- [ ] Real project icons needed
- [ ] Project hrefs need real links (Notion, Figma, Loom)
- [ ] Deploy to Cloudflare
- [ ] Connect renaise.com domain

## Design Reference
The original mockup has:
- "2026" top left
- Profiles bar top center (social icons)
- Projects sidebar left (dock behavior)
- Toolbox sidebar right (dock behavior)
- Large RENAISE watermark center (background)
- Bio text + branding footer
- "renaise.com" vertical text bottom right

## Constraints
- No Awwwards-style animations — substance over flash
- Portfolio should show judgment and leadership, not just pixels
- Frame work as "here's the decision I made" not "here's what it looks like"
- Keep it fast-loading, minimal dependencies
