/**
 * PRD §5 — Site-wide config: contact, resume, meta.
 * About content from resume; tone: casual but professional (late 20s Asian American).
 */

export const site = {
  name: "Joy Ma",
  tagline:
    "Launching consumer products and features that grow engagement, loyalty, and love for you.",
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
  allAboutMe: `My passions sit at the intersection of product, design, technology, and the evolution of AI — especially where they show up in everyday consumer experiences. I love taking fuzzy ideas, turning them into clear roadmaps, and shipping features that people actually use. There's nothing quite like launching an experience that feels intuitive, drives real results, and makes someone's day a little better.

I've had experiences delivering impactful strategies, launching products, apps, and AI-powered features informed by data and user research across consulting, sports & entertainment tech, non-profit, healthcare, and banking, and I'm interested in exploring more industries. I love how my diverse background lets me bring fresh ideas from one space into another, while still staying grounded in user needs and business goals.

Lately I've been exploring vibe coding and tinkering with AI-powered workflows — building side projects like this portfolio. 

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
        { label: "Microsoft 365" },
        { label: "Slack" },
      ],
    },
    {
      label: "Design",
      children: [{ label: "Figma" }],
    },
    {
      label: "AI",
      children: [
        {
          label: "Agentic AI",
          children: [
            { label: "Cursor" },
            { label: "n8n" },
            { label: "Claude Code" },
          ],
        },
        {
          label: "Generative AI",
          children: [{ label: "ChatGPT" }, { label: "Gemini" }],
        },
        { label: "Vercel" },
      ],
    },
  ],

  /** My Skills & Capabilities — grid cards with title + description. */
  skillsCapabilities: [
    {
      title: "Product Strategy & Discovery",
      description:
        "From fuzzy idea to launch: clarifying the problem, scoping MVPs, mapping user journeys, and making trade-offs that balance user value and business goals.",
    },
    {
      title: "Cross-functional Leadership",
      description:
        "Acting as the bridge between design, engineering, and stakeholders — setting context, unblocking decisions, and making sure everyone ships in the same direction.",
    },
    {
      title: "Research & Analysis",
      description:
        "Running user interviews, surveys, and market/competitive analysis to understand what users actually need and how that maps to product opportunities.",
    },
    {
      title: "Workflow Improvements",
      description:
        "Improving how we work: streamlining processes, better documentation, and reducing manual burden and frictions so the team can focus on building outcomes.",
    },
    {
      title: "MVP Design",
      description:
        "Designing MVPs that ship: translating user problems into crisp scopes, prioritizing what matters most, and partnering with design and engineering to deliver a first version that’s learnable, measurable, and ready to iterate.",
    },
    {
      title: "SDLC: Testing & Readiness",
      description:
        "Driving releases with confidence: defining acceptance criteria, coordinating QA and UAT, running readiness assessments (analytics, edge cases, support, rollbacks), and making sure launches are stable, trackable, and aligned across teams.",
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
