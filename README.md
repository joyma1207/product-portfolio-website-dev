# Joy Ma — Product Portfolio

Single-page portfolio (Next.js App Router, Tailwind, Framer Motion) per your PRD.

## PRD alignment (source of truth)

- **Stack:** Next.js (App Router), Tailwind CSS, Framer Motion. 21st.dev components: add when you share a component.
- **Palette:** Background `#FAFAFA`; accents: soft yellow, orange, lavender, baby blue; light borders, `shadow-sm`, no dark black or hyper-saturated colours.
- **Placeholder text:** Long paragraphs use placeholders; only your name and contact info are real (update `src/data/site.ts` and project copy in `src/data/projects.ts`).

## What’s built

| Milestone | Status | Notes |
|-----------|--------|--------|
| **1. Shell** | Done | Hero (sticky), Work/About toggle, sticky footer |
| **2. Work** | Done | Grid + Project modal (Framer Motion) |
| **3. About** | Done | About section, hover dropdown, scrollable sections |
| **4. Content** | Pending | Replace placeholders in `projects.ts` |
| **5. Polish** | Pending | Staggered fades, pastel transitions |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Your edits

1. **Contact & meta:** `src/data/site.ts` — name, tagline, email, LinkedIn, resume URL.
2. **Projects:** `src/data/projects.ts` — real case studies (problem → solution → impact), media URLs.
3. **Resume PDF:** Put your file at `public/resume.pdf` (or change `resumeUrl` in `site.ts`).

## If things get inconsistent

If the assistant starts contradicting the PRD or making things up, **start a new chat** and say: “Continue my Joy Ma portfolio from the PRD; current state: [paste this README or list what’s done].” That resets context and reduces hallucinations.
