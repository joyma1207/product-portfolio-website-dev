/**
 * PRD §5 — Project data for Work grid and Project Overlay (Deep Dive).
 */

export type ProjectMedia = {
  type: "loom" | "figma" | "image";
  url: string;
  title?: string;
};

export type Project = {
  id: string;
  company: string;
  role: string;
  tagline?: string;
  logo?: string;
  cardImage?: string | string[];
  cardImageLayout?: "side-by-side" | "stagger-overlap";
  /** Short label on grid card (upper right). */
  cardPill?: string;
  /** One-line impact teaser on grid card. */
  cardImpactTeaser?: string;
  timeline: string;
  teamSize: string;
  problem: string;
  /** "What I owned" bullets in the modal — paragraphs separated by blank lines. */
  whatOwned: string;
  /** Modal third column title (default: "The Impact"). */
  impactHeading?: string;
  /** Impact lines — one bullet per line. */
  impact: string;
  media?: ProjectMedia[];
  /** Live prototype / demo — shown on card and in modal ("Try it out"). */
  liveDemoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "aritzia",
    company: "Aritzia Virtual Try-On",
    logo: "/assets/aritzia-logo.png",
    role: "Builder",
    tagline: "Virtual Try-on feature to increase e-commerce conversions.",
    cardPill: "E-commerce | Digital Growth",
    timeline: "2025",
    teamSize: "Independent",
    problem:
      "Aritzia’s e-commerce revenue now accounts for over 50% of net revenue. Despite that scale, the brand has no virtual try-on capability on the product detail page, while competitors are actively closing the gap with AR and fit experiences—creating conversion, returns, and brand-perception risk on the channel that matters most.",
    whatOwned: [
      "Built a working web and native-appprototype for an Aritzia Studio–style virtual try-on on the PDP using React, Three.js, MediaPipe pose tracking, and optional WebXR on Android—plus a documented path for native app parity.",
      "Authored a 10-section PRD: three-phase roadmap, web and native user flows, UI specs, technical architecture, privacy and analytics hooks, and the cross-functional teams needed to deliver in a real roadmap.",
    ].join("\n\n"),
    impactHeading: "North Star",
    impact: [
      "Increase e-commerce conversion by 30%",
      "Reduce return rate by 20%",
      "Increase session depth",
      "Drive app engagement",
      "Elevate brand perception",
      "Concept portfolio work; not affiliated with Aritzia.",
    ].join("\n"),
    media: [
      { type: "image", url: "/assets/aritzia-grid-1.png", title: "Catalog try-on overlay — light colourway" },
      { type: "image", url: "/assets/aritzia-grid-2.png", title: "Mobile PDP — Light Birch blazer, studio try-on" },
      { type: "image", url: "/assets/aritzia-grid-3.png", title: "Mobile PDP — Heather Light Grey coat" },
    ],
    liveDemoUrl: "https://aritziavirtualtryon.netlify.app/",
  },
  {
    id: "storyteller",
    company: "Storyteller",
    role: "Project Delivery Manager",
    logo: "/assets/storyteller-logo.png",
    tagline:
      "Delivering TikTok-style vertical video products and personalization features for the sport teams you know and love.",
    cardPill: "Consumer Products | Features Launches | AI",
    cardImpactTeaser: "Impact: 700% lift in high-impact content engagement · 50% faster launches",
    timeline: "June 2025 - September 2025",
    teamSize: [
      "Chief Operating Officer",
      "Chief Technology Officer",
      "iOS, Android, Web Developers",
      "Product Designers",
      "Account Managers",
    ].join("\n"),
    problem:
      "At Storyteller, clients look for vertical video products and personalized features to increase content engagement on their iOS, Android, and web applications without the burden of in-house development. ",
    whatOwned: [
      "Led end-to-end delivery of vertical video, ads, and AI-powered personalization features for multiple sports clients, translating client goals and requirements into launch roadmaps and feature launch plans.",
      "Launched new AI-powered translation features for better fan content discovery and improved content accessibility.",
      "Collaborated with design and engineering to build evergreen and customized UI kits and content strategies tailored to each client's brand and fan experience.",
      "Directed user acceptance testing and launch readiness reviews to make sure new features felt reliable, on-brand, and ready for high-traffic moments.",
      "New and updated SOPs, streamlined project documentions with AI, redesigned QA workflows and checklists to increase team velocity and reduce launch risk.",
    ].join("\n\n"),
    impact: [
      "700% increase in high-impact content engagement for clients.",
      "Launch timeline cut from 4+ months to ~2 months (50% faster).",
      "67% lift in team operational velocity after the QA workflow overhaul.",
    ].join("\n"),
    media: [
      { type: "image", url: "/assets/storyteller-grid-1.png" },
      { type: "image", url: "/assets/storyteller-grid-2.png" },
      { type: "image", url: "/assets/storyteller-grid-3.png" },
      { type: "image", url: "/assets/storyteller-grid-4.png" },
      { type: "image", url: "/assets/storyteller-grid-5.png" },
    ],
  },
  {
    id: "united-way",
    company: "United Way",
    role: "Digital Transformation Consultant",
    logo: "/assets/united-way-logo.png",
    tagline:
      "Personalized donor portal, a new mobile UI (with a Chatbot agent!), and a modernized data management system for a digitalized donor experience.",
    cardPill: "Personalizations | Platforms",
    cardImpactTeaser: "Impact: +20% projected donations · 91% projected retention",
    timeline: "May 2024 – December 2024",
    teamSize: ["1 Designer", "2 Developers", "2 Analysts"].join("\n"),
    problem:
      "Without an integrated digital data management system, donation flows were dated and not built for mobile—even though 54% of traffic was on mobile. United Way needed a way to personalize the donor experience and capture Gen-Z and millennial donors.",
    whatOwned: [
      "Defined the product vision and 3-phase roadmap for digital donations and donor personalization.",
      "I proposed a fundraiser discovery feature, based on intent from their search and donation history data analysis - so that users can discover fundraisers that align with their interests and values.",
      "Redesigned the business website for a mobile-first experience - with a personalized donor portal, a chatbot agent for a more strealined and intuitive digital experience.",
      "Conducted user research, data analysis, and competitive review to shape the portal, chatbot, and data platform.",
    ].join("\n\n"),
    impact: [
      "20% projected increase in donations from targeted Gen-Z and millennial segments.",
      "91% projected retention from segments using the personalized portal and recommendations.",
    ].join("\n"),
    cardImage: "/assets/united-way-card.png",
    media: [],
  },
  {
    id: "cibc",
    company: "CIBC",
    role: "AI Strategy Consultant",
    logo: "/assets/cibc-logo.png",
    cardImage: ["/assets/cibc-card.png", "/assets/cibc-card-2.png", "/assets/cibc-card-3.png"],
    cardImageLayout: "stagger-overlap",
    tagline:
      "Building client trust, expanded communication, and future AI governance framework.",
    cardPill: "Consulting | Banking | Governance",
    cardImpactTeaser: "Impact: +7 places in AI maturity benchmark",
    timeline: "May 2024 – June 2024",
    teamSize: "5 Consultants",
    problem:
      "CIBC’s internal AI governance and Responsible AI frameworkwasn’t clear to clients - and this is impacting client trust and lifetime value.",
    whatOwned: [
      "Designed the CIBC AI Center MVP, connecting governance, use cases, and client-facing storytelling.",
      "Researched on business and client needs, industry best practices, to shape website requirements.",
      "I collaborated with my team to present the strategic report highlighting use cases, implementation roadmap and video product demo that secured leadership buy-in.",
    ].join("\n\n"),
    impact: ["Lifted CIBC’s position in the AI maturity benchmark index by 7 spots."].join("\n"),
    media: [],
  },
  {
    id: "sickkids",
    company: "SickKids Hospital",
    role: "Change Management Consultant",
    logo: "/assets/sickkids-logo.png",
    cardImage: "/assets/sickkids-card.png",
    tagline: "Reimagining the future of complex surgery with 3D Modelling and Virtual Reality.",
    cardPill: "Consulting| Growth | Strategy | ",
    cardImpactTeaser: "Impact: 54% fewer errors · 230% more efficiency (projected)",
    timeline: "May 2024 – June 2024",
    teamSize: "6 Consultants",
    problem:
      "SickKids Hospital is looking for technologies that can propel them towards their 2030 Precision Health goal.",
    whatOwned: [
      "Researched 3D modelling and VR use cases in complex surgery and mapped them to SickKids' Precision Health goals.",
      "Framed benefits and risks for clinicians and leadership, focusing on safety and efficiency.",
      "Defined a change-management approach for piloting and scaling the solution.",
    ].join("\n\n"),
    impact: [
      "54% projected reduction in surgical errors.",
      "230% projected increase in surgical efficiency.",
    ].join("\n"),
    media: [],
  },
  {
    id: "adobe-ivey",
    company: "Adobe Ivey Digital Innovation Conference",
    role: "Technology Consultant",
    logo: "https://static.cdnlogo.com/logos/a/90/adobe.png",
    cardImage: "/assets/adobe-card.png",
    tagline:
      "Adobe product strategy to drive credit card acquisitions at [confidential] bank.",
    cardPill: "Banking",
    cardImpactTeaser:
      "Impact: Strategy linking digital experience to cardmember LTV and acquisition",
    timeline: "September 2023",
    teamSize: "5-member team",
    problem:
      "How can one of Canada's largest banks leverage Adobe Digital Experience to boost credit card member value and new card acquisitions?",
    whatOwned: [
      "Co-created a 6-month roadmap using Adobe Digital Experience products to drive card acquisitions.",
      "Connected proposed experiences to cardmember LTV and acquisition metrics.",
      "Co-led the pitch to industry judges, synthesizing complex ideas into a clear story.",
    ].join("\n\n"),
    impact: [
      "Strategy presented to industry professionals; stakeholder buy-in on the partnership and roadmap.",
      "Clear link from digital experience to cardmember LTV and acquisition",
    ].join("\n"),
    media: [],
  },
  {
    id: "caisa-fashion",
    company: "CAISA Fashion Show",
    role: "Creative Director",
    logo: "/assets/caisa-fashion-logo.png",
    tagline:
      "Directed Canada's largest student-run charity fashion show with 1000+ attendees every year.",
    cardPill: "Design | Fashion",
    cardImpactTeaser: "Impact: $60K raised for charity · 1000+ attendees / year",
    timeline: "September 2019 – April 2023",
    teamSize: [
      "Core 3: Executive Director, Co-Creative Director",
      "13 Directors",
      "60 Executives ",
      "62 Models",
    ].join("\n"),
    problem:
      "CAISA Fashion Show is Canada's largest student-run charity fashion show, with 1000+ attendees every year.",
    whatOwned: [
      "Directed the overall creative vision for Canada's largest student-run charity fashion show.",
      "Coordinated a 120-person team across production, marketing, and operations.",
      "Led the pivot to virtual shows during COVID, including producing a 50-minute documentary.",
    ].join("\n\n"),
    impact: [
      "Throughout the 4 years at CAISA Fashion Show, we generated $60,000 profit for charity; After COVID-19 restrictions were lifted, we were able to see 1000+ attendees at the show.",
    ].join("\n"),
    cardImage: ["/assets/caisa-card-1.png", "/assets/caisa-card-2.png"],
    media: [],
  },
];
