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
    solution: "I built product launch roadmaps, integrating vertical videos, advertisements, and AI-powered personalization features. ",
    impact: [
      "700% increase in high-impact content engagement for clients.",
      "Launch timeline cut from 4+ months to ~2 months (50% faster).",
      "67% lift in team operational velocity after the QA workflow overhaul.",
    ].join("\n"),
    media: [
      {
        type: "image",
        url: "/assets/storyteller-grid-timberwolves.png",
        title: "Timberwolves app — Home with Latest News grid & game cards",
      },
      {
        type: "image",
        url: "/assets/storyteller-grid-lions.png",
        title: "Lions app — Storyteller grid (Lions in Munich, Headlines, Highlights)",
      },
      {
        type: "image",
        url: "/assets/storyteller-grid-fis.png",
        title: "FIS app — Athlete/event profiles & upcoming major events",
      },
    ],
  },
  {
    id: "united-way",
    company: "United Way",
    role: "Digital Transformation Consultant",
    tagline:
      "Personalized donor portal, a new mobile UI (with a Chatbot agent!), and a modernized data management system for the best digital donor experience.",
    timeline: "May 2024 – December 2024",
    teamSize: [
      "1 Designer",
      "2 Developers",
      "2 Analysts",
    ].join("\n"),
    problem:
      "Without an integrated digital data management system, Donation flows were dated and not built for mobile—even though 54% of traffic was on mobile. United Way needed a way to personalize the donor experience and capture Gen-Z and millennial donors.",
    solution:
      "I developed a three-phase product roadmap to digitalize donations at United Way, with 3 Core Features: predictive AI-powered donor data management system, a personalized donor portal, and an agentic chatbot to target Gen-Z and millenial segments. I led the deep dive to scope out the current digital donations landscape and defined the user stories for the product roadmap. I also conducted user research to define the user personas and user journeys. I also proposed a fundraiser discovery functionality that can personalize recommendations for users based on intent from using their search and donation history data analysis. I also redesigned the mobile UI for a more streamlined user experience and a more consistent branding.",
    impact: [
      "20% projected increase in donations from targeted Gen-Z and millennial segments.",
      "91% projected retention from segments using the personalized portal and recommendations.",
      "New mobile UI shipped and in use.",
    ].join("\n"),
    media: [],
  },
  {
    id: "cibc",
    company: "CIBC",
    role: "AI Strategy Consultant",
    tagline:
      "Designing AI governance and risk management strategy for improved client trust.",
    timeline: "May 2024 – June 2024",
    teamSize: "5 Consultants",
    problem:
      "CIBC’s Responsible AI story wasn’t clear to clients. Benchmarking against BMO, RBC, Capital One, and JP Morgan showed gaps in transparency and communication that hurt trust and lifetime value.",
    solution:
      "I designed the CIBC AI Center website MVP so governance, enterprise AI capabilities, and innovation goals could be communicated clearly to clients. Wrote user stories (inter-generational transparency, trust, communication gaps), built a strategic report with findings, use cases, and risk mitigation, and got leadership buy-in with a video demo and presentation.",
    impact: [
      "Lifted CIBC’s position in the AI maturity benchmark index by 7 spots.",
      "Leadership bought in on a new Responsible AI framework; impact tied to client trust and LTV.",
    ].join("\n"),
    media: [],
  },
  {
    id: "sickkids",
    company: "SickKids",
    role: "Change Management Consultant",
    tagline: "Streamlining complex surgery operations.",
    timeline: "May 2024 – June 2024",
    teamSize: "—",
    problem:
      "Complex surgery workflows had high friction for patients and staff, with room to reduce errors and improve efficiency. SickKids was looking at AI, 3D modelling, and Digital Twins but needed a clear path to implementation.",
    solution:
      "I led process design for 3D modelling and Digital Twin integration in complex surgery and built a three-phase implementation roadmap. Mapped current-state and future-state flows in Miro, called out pain points for patients and hospital users, and tied it to 2030 strategy via stakeholder requirement sessions.",
    impact: [
      "54% projected reduction in surgical errors; 230% projected gain in surgical efficiency.",
      "Clear before/after journey so improved patient experience was visible to stakeholders.",
    ].join("\n"),
    media: [],
  },
  {
    id: "adobe-ivey",
    company: "Adobe Ivey Digital Innovation Conference",
    role: "Technology Consultant",
    tagline:
      "Adobe Digital Experiences product strategy to drive credit card acquisitions at [confidential] bank.",
    timeline: "September 2023",
    teamSize: "5-member team",
    problem:
      "A major bank wanted to boost cardmember value and new card acquisitions. Premium loyalty and digital experiences were underused compared to players like Amex Platinum and WealthSimple.",
    solution:
      "I proposed a BMO–Adobe partnership using Adobe Digital Experience (including Adobe Firefly) to personalize credit card experiences. Led competitive benchmarking, built a 4-year implementation roadmap with use cases and profitability drivers, and pitched the strategy to industry pros with a 5-person team.",
    impact: [
      "Strategy presented to industry professionals; stakeholder buy-in on the partnership and roadmap.",
      "Clear link from digital experience to cardmember LTV and acquisition.",
    ].join("\n"),
    media: [],
  },
  {
    id: "caisa-fashion",
    company: "CAISA Fashion Show",
    role: "Creative Director",
    tagline:
      "Directed Canada's largest student-run charity fashion show with 1000+ attendees every year.",
    timeline: "September 2019 – April 2023",
    teamSize: "120-member cross-functional team",
    problem:
      "Canada’s largest student-run charity fashion show had to deliver a great experience, hit revenue goals, and stay aligned when COVID forced a full operational pivot.",
    solution:
      "I led a 120-person cross-functional team end-to-end: creative direction, operations, and change management. When COVID hit, I ran the pivot so goals and ways of working stayed clear and the show could still deliver.",
    impact: [
      "$60,000 profit generated for charity; 1000+ attendees at the show.",
      "Successful COVID pivot—team and objectives realigned and executed.",
    ].join("\n"),
    media: [],
  },
];
