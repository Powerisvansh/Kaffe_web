<p align="center">
  <img src="public/icon.svg" alt="Kaafe Logo" width="80" />
</p>

<h1 align="center">Kaafe ☕</h1>

<p align="center">
  <strong>The Widest Ganga View Cafe in Rishikesh</strong><br />
  <em>Where sacred waters meet culinary excellence</em>
</p>

<p align="center">
  <a href="https://powerisvansh.github.io/Kaffe_web/" target="_blank">
    <img src="https://img.shields.io/badge/Live-Demo-8B5CF6?style=for-the-badge&logo=githubpages&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-16.2.6-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## ✦ Overview

A luxury riverside cafe website for **Kaafe** — a serene sanctuary nestled along the Ganga in Rishikesh, offering the widest panoramic view of the sacred river. Built as a static Next.js export and deployed on **GitHub Pages**.

### Features

| Feature | Description |
|---|---|
| 🏔️ **Hero Section** | Fullscreen video-style hero with Ganga sunset imagery |
| 📖 **About** | Brand story, philosophy, and stats (180° view, est. 2017, 50K+ guests) |
| 🍽️ **Menu** | Signature dishes with pricing, tags, and descriptions |
| 🖼️ **Gallery** | Interactive masonry lightbox gallery |
| 🌅 **Experience** | Timed experience cards (Morning / Afternoon / Sunset) |
| ⭐ **Testimonials** | Carousel with guest reviews, dot navigation |
| 📍 **Contact** | Info cards, Google Maps embed, reservation form |
| 💬 **WhatsApp Integration** | Direct booking via WhatsApp |

---

## ✦ Tech Stack

```
Framework   → Next.js 16 (Static Export)
Styling     → Tailwind CSS 4 + CSS Variables
UI          → Radix UI + shadcn/ui (New York style)
Animation   → Framer Motion
Icons       → Lucide React
Forms       → React Hook Form + Zod
Maps        → Google Maps Embed
Fonts       → Cormorant Garamond + Inter (Google Fonts)
```

---

## ✦ Getting Started

```bash
# Clone
git clone https://github.com/Powerisvansh/Kaffe_web.git
cd Kaffe_web

# Install
npm install

# Dev server
npm run dev

# Build (static export)
npm run build
```

The static export is output to the `out/` directory.

---

## ✦ Project Structure

```
├── app/                  # Next.js App Router
│   ├── globals.css       # Tailwind + global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/
│   └── images/           # Static assets
├── styles/               # Legacy styles
├── next.config.mjs       # Next.js config (static export)
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript config
└── package.json
```

---

## ✦ Deployment

The site is statically exported and deployed to **GitHub Pages** at:

👉 **[https://powerisvansh.github.io/Kaffe_web/](https://powerisvansh.github.io/Kaffe_web/)**

Any push to `main` triggers an automatic deployment via GitHub's built-in Pages workflow.

---

## ✦ License

MIT © Powerisvansh
