# Mohammed Arshaq — Portfolio

A modern, immersive portfolio website built with a **Neon Void** design system — deep dark backgrounds, neon cyan/magenta accents, smooth scroll animations, and a floating dock navigation.

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| Icons | Font Awesome 6 |
| Fonts | Outfit + JetBrains Mono (Google Fonts) |

## ✨ Features

- **Neon Void Design** — Custom dark theme with cyan, magenta, lime, and violet neon accents
- **Floating Dock Navigation** — Bottom-center glassmorphism nav bar on desktop; hamburger menu on mobile
- **Animated Hero** — Gradient-clipped name, terminal-style typewriter for roles, availability badge
- **Bento Grid Skills** — Skills organized in a responsive bento layout with color-coded categories
- **Spotlight Project Cards** — Alternating left/right layout with 3D tilt on hover and detail modals
- **Neon Timeline** — Experience and education with glowing timeline indicators
- **Certificate Lightbox** — Click-to-view full-resolution certificates
- **Ambient Background** — Soft animated glow orbs and a subtle dot grid
- **Cursor Glow** — Ambient light that follows the mouse (desktop only)
- **Fully Responsive** — Optimized for desktop, tablet, and mobile

## 📂 Structure

```
src/
├── app/
│   ├── globals.css      # Design tokens & base styles
│   ├── layout.tsx        # Root layout with fonts & providers
│   └── page.tsx          # Page composition
├── components/
│   ├── hero.tsx          # Hero section with typewriter
│   ├── navbar.tsx        # Floating dock nav + mobile menu
│   ├── skills.tsx        # Bento grid skills
│   ├── projects.tsx      # Spotlight project cards
│   ├── experience.tsx    # Timeline experience
│   ├── education.tsx     # Timeline education
│   ├── certifications.tsx# Certification cards + lightbox
│   ├── contact.tsx       # Contact CTA + social links
│   ├── footer.tsx        # Minimal footer
│   ├── section-heading.tsx
│   ├── ambient-background.tsx
│   ├── cursor-glow.tsx
│   ├── smooth-scroll.tsx
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts
public/
└── images/              # Project screenshots, logos, certificates
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Deployment

Deployed on [Vercel](https://vercel.com). Any push to `main` triggers auto-deployment.

## 📬 Contact

- **Email**: arshaq2312@gmail.com
- **LinkedIn**: [mohammedarshaq7](https://www.linkedin.com/in/mohammedarshaq7/)
- **GitHub**: [md-arshaq](https://github.com/md-arshaq)

---

© 2026 Mohammed Arshaq. All rights reserved.
