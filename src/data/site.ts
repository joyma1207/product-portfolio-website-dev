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

  /** All About Me — aligned with PM roles (customer-first, cross-functional, discovery→launch, data/research); keeps your voice. */
  allAboutMe: `I love discovering, designing, building, and launching new ideas, and I love how my unique background in business, technology, design and healthcare innovations help me do this: I've been told I bring a fresh perspective and ideas people haven't considered, and this is where my product thinking sits. 

  My background means that I also had the opportunity to work with people from different backgrounds. I've built 

I've owned end-to-end software product delivery in sports & entertainment, non-profit, banking, and healthcare—leading roadmaps, aligning stakeholders, and shipping features that makes an impact for the people (whether it's my team members, the users, or anyone in between). I'm comfortable influencing and aligning intent, resources, and prioritization across design, engineering, and the business, and I like finding growth opportunities through quantitative work, case studies, and a clear view of what's possible in a fast-moving environment.

I have a Bachelor's and a Master's in Digital Management (Ivey), 2+ years in tech and consulting, and a mix of product sense and technical depth from building with AI, agile delivery, and side projects like this portfolio. 

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
