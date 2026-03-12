# PRD §4 — File Structure & §5 — Backend & Data

## §4 File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata
│   ├── page.tsx            # Landing: Hero, Toggle, Work grid (or About)
│   └── globals.css         # Tailwind + PRD palette
├── components/
│   ├── Hero.tsx            # Sticky hero: name + brief description
│   ├── WorkAboutToggle.tsx # Centered Work / About switch
│   ├── WorkGrid.tsx        # Hover-animated cards (Company + Role)
│   ├── ProjectModal.tsx    # Deep-dive overlay (context, content, media)
│   ├── AboutSection.tsx    # About + dropdown sections
│   ├── Footer.tsx          # Sticky footer contact
│   └── ui/                 # 21st.dev or custom small components
├── data/
│   ├── projects.ts         # Project list for grid + modal
│   └── site.ts             # Contact, resume URL, site meta
└── lib/
    └── utils.ts            # cn() etc.
public/
├── resume.pdf              # Your resume (you add)
└── ...                     # Logos, images
```

## §5 Backend & Data

- **No server backend.** Static data only.
- **`src/data/projects.ts`** — Array of projects. Each project: `id`, `company`, `role`, `logo`, `timeline`, `teamSize`, `problem`, `solution`, `impact`, `media[]` (loom/figma/image).
- **`src/data/site.ts`** — Your name, tagline, `resumeUrl`, `linkedIn`, `email`, about section keys.
- **Populate** `projects.ts` with real PM case studies in Milestone 4.
