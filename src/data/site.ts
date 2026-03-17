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
  /** Optional GitHub profile URL; omit or set to empty to hide from social icons. */
  github: "",
  aboutSections: ["contact", "resume", "passions"] as const,
  location: "Toronto, Canada",
  education:
    "MSc Digital Management @ Ivey Business School",
  certification: "PMP expected May 2026 · Google Project Management Certificate",

  /** All About Me — aligned with PM roles (customer-first, cross-functional, discovery→launch); keeps your voice. */
  allAboutMe: `My passions lay in the intersection of product, design, technology and the evolution of AI - and how I can used my combined skills to help people, whether it's users, customers, coworkers, and beyond. This is why I love product: I get excited by new ideas and by making them real. There's nothing quite like launching apps and features that makes an impact, gets people excited, and makes their  better.

I've had experiences launching AI solutions, apps, and AI-powered features across consulting, sports & entertainment tech, non-profit, healthcare, and I'm interested in exploring more industries. I love how my diverse background gives me a unique ability to bring ideas to the table that feel fresh and interesting. 

Lately I've been exploring vibe coding and tinkering with AI-powered workflows - building side projects like this portfolio. 

You can also find me writing Beli reviews for under-the-radar food spots, at the rock climbing gym, or painting at home to my newest Spotify playlist.`,

  /** Tools I use — with brief description of when and how. */
  tools: {
    items: ["AirTable", "Confluence"],
    description:
      "I use AirTable for product backlogs, roadmaps, and cross-team tracking when we need flexibility. Confluence is my go-to for project documentations and team collaboration.",
  },

  /** AI — tools and how I use them. */
  ai: {
    areas: [
      "Generative AI",
      "Agentic AI (Cursor, n8n, Claude Code)",
      "Vercel",
    ],
    description:
      "I use generative AI for copy, ideation, and documentation. For agentic workflows I rely on Cursor for development, n8n for automations, and Claude for reasoning. I ship and iterate on Vercel for side projects and demos.",
  },

  /** My Tools — tree structure: root (e.g. Management tools, AI) with branches and optional sub-branches. */
  toolsTree: [
    {
      label: "Management tools",
      children: [
        { label: "AirTable" },
        { label: "Confluence" },
      ],
    },
    {
      label: "AI",
      children: [
        { label: "Generative AI" },
        {
          label: "Agentic AI",
          children: [
            { label: "Cursor" },
            { label: "n8n" },
            { label: "Claude Code" },
          ],
        },
        { label: "Vercel" },
      ],
    },
  ],

  /** My Skills & Capabilities — grid cards with title + description. */
  skillsCapabilities: [
    {
      title: "Product Thinking",
      description:
        "Taking ideas from discovery through launch: from gathering requirements, to user research, to design and building, and all the way launch - I love to be in the middle of it. ",
    },
    {
      title: "I love my team, I love my crew",
      description:
        "I have experience acting as the bridge between design, engineering, and different stakeholders to align on goals and ship together.",
    },
    {
      title: "Research & Analysis",
      description:
        "I have experience conducting user and market research, understanding user needs and market trends to inform product decisions, solve user challenges and propel business/industry standings.",
    },
    {
      title: "Workflow Improvements",
      description:
        "Improving how we work: streamlining processes, better documentation, and reducing manual burden and frictions so the team can focus on building outcomes.",
    },
  ],

  /** My Process — 6 steps for circular diagram. */
  processSteps: [
    { title: "Product launch lifecycle", description: "From idea to live." },
    { title: "Requirement gathering", description: "User stories and documentation." },
    { title: "Software development lifecycle", description: "Plan, build, and iterate with engineering." },
    { title: "Design", description: "Wireframes, prototypes, and feedback loops." },
    { title: "Testing", description: "QA, user testing, and validation." },
    { title: "Launch", description: "Release, measure, and improve." },
  ],
} as const;
