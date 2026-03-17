/**
 * PRD §5 — Project data for Work grid and Project Overlay (Deep Dive).
 * Structure: Context (logo, timeline, team) → Content (problem, solution, impact) → Media.
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
  tagline?: string; // short line for grid card; if missing, role is shown
  logo?: string; // path or URL
  /** Optional image(s) shown on the grid card only (not in modal demo). Single string = one image; array = multiple images. */
  cardImage?: string | string[];
  /** When cardImage is an array: "side-by-side" (default) or "stagger-overlap". */
  cardImageLayout?: "side-by-side" | "stagger-overlap";
  timeline: string;
  teamSize: string;
  problem: string;
  solution: string;
  impact: string; // metrics
  media?: ProjectMedia[];
};

/**
 * Real PM case studies. Tagline shows on grid cards; problem/solution/impact in modal.
 */
export const projects: Project[] = [
  {
    id: "storyteller",
    company: "Storyteller",
    role: "Project Delivery Manager",
    logo: "/assets/storyteller-logo.png",
    tagline:
      "Delivering TikTok-style vertical video products and personalization features for the sport teams you know and love.",
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
    solution: [
      "I built customized product launch roadmaps, launching vertical videos, advertisements, and AI-powered personalization features based on client requirements and vendor capabilities.",
      "I also improved my team's testing workflow by redesigning the testing checklist and process.",
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
    timeline: "May 2024 – December 2024",
    teamSize: [
      "1 Designer",
      "2 Developers",
      "2 Analysts",
    ].join("\n"),
    problem:
      "Without an integrated digital data management system, donation flows were dated and not built for mobile—even though 54% of traffic was on mobile. United Way needed a way to personalize the donor experience and capture Gen-Z and millennial donors.",
    solution: [
      "I developed a three-phase product roadmap to digitalize donations at United Way, with 3 Core Features: predictive AI-powered donor data management system, a personalized donor portal, and an agentic chatbot to target Gen-Z and millenial customer segments. I led the deep dive to scope out the current digital donations landscape - conducting user research to define the user personas and user journeys, leading quantitative analysis of web traffic, competitive benchmarking for digital donation platforms best practices.",
      "I also proposed a fundraiser discovery functionality that can personalize recommendations for users based on intent from using their search and donation history data analysis.",
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
    timeline: "May 2024 – June 2024",
    teamSize: "5 Consultants",
    problem:
      "CIBC’s internal AI governance and Responsible AI frameworkwasn’t clear to clients - and this is impacting client trust and lifetime value.",
    solution: [
      "I designed the CIBC AI Center website MVP - showcasing CIBC's enterprise AI capabilities, governance framework, and case studies for client-facing communications. I also conducted user research to define the user personas and user journeys, leading quantitative analysis of web traffic, competitive benchmarking for digital donation platforms best practices.",
      "I also wrote user stories (inter-generational transparency, trust, communication gaps), built a strategic report with findings, use cases, and risk mitigation, and got leadership buy-in with a video demo and presentation.",
    ].join("\n\n"),
    impact: [
      "Lifted CIBC’s position in the AI maturity benchmark index by 7 spots.", 
    ].join("\n"),
    media: [],
  },
  {
    id: "sickkids",
    company: "SickKids Hospital",
    role: "Change Management Consultant",
    logo: "/assets/sickkids-logo.png",
    cardImage: "/assets/sickkids-card.png",
    tagline: "Reimagining the future of complex surgery with 3D Modelling and Virtual Reality.",
    timeline: "May 2024 – June 2024",
    teamSize: "6 Consultants",
    problem:
      "SickKids Hospital is looking for technologies that can propel them towards their 2030 Precision Health goal.",
    solution:
      "Through researching use cases and industry best practices, I proposed to implement 3D Modelling and Virtual Reality in complex surgery operations, which will increase surgical efficiency, reduce surgical errors, and offer a more streamlined patient experience.",
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
    timeline: "September 2023",
    teamSize: "5-member team",
    problem:
      "How can one of Canada's largest banks leverage Adobe Digital Experience to boost credit card member value and new card acquisitions?",
    solution:
      "I proposed leveragingAdobe Digital Experiences products (such as Adobe Firefly) to personalize credit card experiences. I built a 6 month strategic roadmap with use cases and profitability drivers, and pitched the strategy to industry professionals with a 5-person team.",
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
    timeline: "September 2019 – April 2023",
    teamSize: [
      "Core 3: Executive Director, Co-Creative Director",
      "13 Directors",
      "60 Executives ",
      "62 Models",
    ].join("\n"),
    problem:
      "CAISA Fashion Show is Canada's largest student-run charity fashion show, with 1000+ attendees every year.",
    solution: [
      "As the Creative Director, I provided the overall creative directon, designing the annual theme, aligning different teams for content designs, marketing content (from short-form videos, to 50 minute documentaries, to 6 different editorials).",
      "I also redesigned our website for higher ticket sales and engagement.",
      "When COVID hit, I lead the 120-members team to pivot the show to a virtual format, ensuring the show could still deliver and we can still fulfil our fundraising goals. I produced CAISA Fashion Show's first full-length, 50 minutes documentary to maintain engagement - even when in-person shows couldn't go on.",
    ].join("\n\n"),
    impact: [
      "Throughout the 4 years at CAISA Fashion Show, we generated $60,000 profit for charity; After COVID-19 restrictions were lifted, we were able to see 1000+ attendees at the show.",
    ].join("\n"),
    cardImage: ["/assets/caisa-card-1.png", "/assets/caisa-card-2.png"],
    media: [],
  },
];
