/**
 * PRD §5 — Site-wide config: contact, resume, meta.
 * About content from resume; tone: casual but professional (late 20s Asian American).
 */

export const site = {
  name: "Joy Ma",
  tagline:
    "Launching digital products, app features, and bringing technology & AI solutions for you",
  resumeUrl: "/resume.pdf",
  linkedIn: "https://www.linkedin.com/in/joy-m-50136b133/",
  email: "joyma2000@hotmail.com",
  aboutSections: ["contact", "resume", "experiences", "passions"] as const,
  location: "Toronto, Canada",
  education:
    "MSc Digital Management @ Ivey Business School · BA Kinesiology @ Western University",
  certification: "PMP expected May 2026 · Google Project Management Certificate",

  /** All About Me — aligned with PM roles (customer-first, cross-functional, discovery→launch); keeps your voice. */
  allAboutMe: `My passions lay in the intersection of product, design, technology and the evolution of AI - and how I can used my combined skills to help people, whether it's users, customers, coworkers, and beyond. This is why I love product: I get excited by new ideas and by making them real. There's nothing quite like launching apps and features that makes an impact, gets people excited, and makes their  better.

I've had experiences launching AI solutions, apps, and AI-powered features across consulting, sports & entertainment tech, non-profit, healthcare, and I'm interested in exploring more industries. I love how my diverse background gives me a unique ability to bring ideas to the table that feel fresh and interesting. 

Lately I've been exploring vibe coding and tinkering with AI-powered workflows - building side projects like this portfolio. 

You can also find me writing Beli reviews for under-the-radar food spots, at the rock climbing gym, or painting at home to my newest Spotify playlist.`,

  /** My experiences — you'll drop in components later; placeholder copy optional. */
  experiencesIntro:
    "A few roles and projects that shaped how I think about product and delivery. More details in the Work section above.",

  /** Things I'm super proud about — CAISA, Chinese Student's association, pivot from healthcare. */
  proud: [
    {
      title: "Building this portfolio",
      body: "This portfolio is a testament to my ability to keep up with the ever-evolving tech and AI landscape. I'm proud of the work I've done, from creating the PRD, designing the UI and user flows build something from scratch and bring it from 0-1. I built this portfolio with Cursor, React, Next.js, and Tailwind.",
    },
    {
      title: "CAISA Fashion Show",
      body: "I led a 120-person team as the Creative Director for Canada's largest student-run charity fashion show— for our in-person shows, we pulled off 1000+ attendees and fundraised $60K+ for charity. When COVID hit, I designed and implemented the change management process so we could pivot operations and keep the show (and the team) aligned.",
    },
    {
      title: "Chinese Student's Association",
      body: "As part of Western University's largest cultural club, I was part of an amazing, tight-knit community as their Productions Director, Design Director, and more. I helped run events and initiatives that brought people together.",
    },
  ],
} as const;
