export const personalInfo = {
  name: "Sujeesh Lal",
  title: "Technical Architect",
  tagline: "17+ years crafting enterprise-grade digital experiences",
  bio: "I'm a Technical Architect with 17+ years of experience designing and delivering scalable web platforms for global enterprises. My expertise spans frontend architecture (React, Angular, Next.js), cloud infrastructure (Azure), and modern development practices including AI-assisted development and comprehensive test automation.",
  email: "sujeeshdl@gmail.com",
  github: "https://github.com/sujeesh-Lal",
  location: "India",
};

export const experience = [
  {
    company: "Tata Consultancy Services",
    shortName: "TCS",
    role: "Associate Consultant / Technical Architect",
    period: "2014 – 2026",
    duration: "12 years",
    description:
      "Led architecture and delivery of large-scale enterprise web applications for global clients. Drove adoption of React, Angular, and Next.js across delivery units. Championed AI-assisted development workflows and automated testing with Cypress.",
    tech: ["React", "Angular", "Next.js", "TypeScript", "Azure", "Cypress", "Node.js"],
  },
  {
    company: "Microobjects Pvt Ltd",
    shortName: "Microobjects",
    role: "Senior Software Engineer",
    period: "2010 – 2014",
    duration: "4 years",
    description:
      "Developed and maintained full-stack web applications. Led a team of developers in delivering client projects on time. Focused on building interactive frontends and robust backend services.",
    tech: ["JavaScript", "Node.js", "PHP", "MySQL", "jQuery"],
  },
  {
    company: "Digitalmesh Pvt Ltd",
    shortName: "Digitalmesh",
    role: "Software Engineer",
    period: "2007 – 2010",
    duration: "3 years",
    description:
      "Built web applications and CMS-driven sites for clients across various industries. Gained foundational expertise in web technologies and agile delivery.",
    tech: ["ColdFusion", "JavaScript", "HTML/CSS", "SQL"],
  },
];

export const skills = {
  Frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "Angular", level: 88 },
    { name: "TypeScript", level: 93 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Framer Motion", level: 82 },
  ],
  "Backend & Cloud": [
    { name: "Node.js", level: 88 },
    { name: "Azure", level: 85 },
    { name: "REST APIs", level: 92 },
    { name: "Azure DevOps", level: 83 },
  ],
  "Testing & QA": [
    { name: "Cypress", level: 90 },
    { name: "Jest", level: 85 },
    { name: "Testing Library", level: 84 },
  ],
  "AI & Tooling": [
    { name: "AI-assisted Dev", level: 90 },
    { name: "GitHub Copilot", level: 88 },
    { name: "CI/CD Pipelines", level: 85 },
    { name: "Git / GitHub", level: 95 },
  ],
};

export const projects = [
  {
    title: "ONIX Insurance Portal",
    description:
      "Enterprise insurance management portal handling complex underwriting workflows and policy management for a global insurer. Architected a modular React frontend on Azure with real-time data processing and role-based access control.",
    tech: ["React", "TypeScript", "Azure", "Node.js", "Azure AD", "REST APIs"],
    highlights: [
      "Architected scalable micro-frontend structure",
      "Integrated Azure Active Directory SSO",
      "Reduced load time by 40% via code splitting",
    ],
    color: "from-cyan-500/20 to-blue-600/20",
    accentColor: "text-cyan-400",
    icon: "🏛️",
  },
  {
    title: "Pay With Me",
    description:
      "Cross-platform mobile POS solution enabling merchants to accept payments via smartphones. Built with Apache Cordova, delivering a native-like experience across iOS and Android with secure payment processing.",
    tech: ["Apache Cordova", "JavaScript", "REST APIs", "Payment Gateway", "iOS", "Android"],
    highlights: [
      "Cross-platform iOS & Android deployment",
      "PCI-compliant payment flow",
      "Offline-first architecture with sync",
    ],
    color: "from-violet-500/20 to-purple-600/20",
    accentColor: "text-violet-400",
    icon: "💳",
  },
  {
    title: "TCS dreamUP",
    description:
      "Interactive data visualisation platform for TCS's innovation initiative, enabling real-time rendering of complex business intelligence dashboards with smooth animated SVG charts.",
    tech: ["Angular", "TypeScript", "SVG", "D3.js", "Node.js", "REST APIs"],
    highlights: [
      "Custom SVG animation engine",
      "Real-time data streaming support",
      "Accessible WCAG 2.1 AA compliant charts",
    ],
    color: "from-emerald-500/20 to-teal-600/20",
    accentColor: "text-emerald-400",
    icon: "📊",
  },
];

export const certifications = [
  {
    name: "Microsoft AZ-204",
    full: "Developing Solutions for Microsoft Azure",
    issuer: "Microsoft",
    icon: "☁️",
    color: "border-blue-500/40",
  },
  {
    name: "IBM Cloud Developer",
    full: "IBM Cloud Application Developer",
    issuer: "IBM",
    icon: "🔵",
    color: "border-indigo-500/40",
  },
  {
    name: "Adobe ColdFusion",
    full: "Adobe Certified Expert — ColdFusion",
    issuer: "Adobe",
    icon: "🅰️",
    color: "border-red-500/40",
  },
];
