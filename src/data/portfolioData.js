export const personalInfo = {
  name: "Mayank Rajpoot",
  shortName: "MR",
  role: "Full Stack Developer",
  tagline: "Building modern web experiences, scalable applications and digital products.",
  headline: "Hi, I'm Mayank Rajpoot",
  subheadline: "Full Stack Developer building modern, scalable and user-focused digital experiences.",
  location: "Mathura, Uttar Pradesh, India",
  status: "Open to Full Stack Developer Opportunities",
  email: "mayankrajpoot.dev@gmail.com",
  github: "https://github.com/mayank995676",
  linkedin: "https://linkedin.com/in/mayank-rajpoot",
  bio: "I am a Full Stack Developer and Computer Science student passionate about building clean, performant, and scalable digital solutions. With solid engineering fundamentals across modern frontend frameworks, backend architecture, and database management, I translate complex user needs into polished digital products.",
  education: {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    focus: "Software Engineering, Data Structures & Algorithms, Web Technologies, Database Systems",
    status: "Undergraduate Student"
  },
  interests: [
    "Full Stack Web Architecture",
    "Scalable RESTful API Design",
    "Modern Responsive UI/UX Systems",
    "Database Optimization & Modeling",
    "Cloud & Distributed Technologies"
  ],
  whatIBuild: [
    {
      title: "Interactive Web Applications",
      desc: "Single-page and full-stack web applications with responsive design, state management, and smooth micro-interactions."
    },
    {
      title: "Scalable Backend APIs",
      desc: "Robust REST APIs built with Node.js, Express, and PHP with proper authentication, validation, and database queries."
    },
    {
      title: "Database Architectures",
      desc: "Structured relational (SQLite) and document-based (MongoDB, Firebase) schemas tuned for data integrity and speed."
    },
    {
      title: "E-Commerce & Digital Solutions",
      desc: "Business-ready platforms incorporating payment gateways, discovery portals, and dynamic content management."
    }
  ],
  stats: [
    { value: "5+", label: "Featured Projects", subtitle: "Full Stack & Web Apps" },
    { value: "18+", label: "Technologies", subtitle: "Frontend, Backend & DBs" },
    { value: "100%", label: "Code Dedication", subtitle: "Clean & Maintainable" },
    { value: "Mathura", label: "Location, India", subtitle: "Available Remote / Relocation" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "programming", label: "Programming" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
    { id: "other", label: "Other Specialties" }
  ],
  skills: [
    // Frontend
    { name: "HTML5", category: "frontend", icon: "Code2", level: "Semantic Markup, Accessibility, SEO", highlight: true },
    { name: "CSS3", category: "frontend", icon: "Palette", level: "Flexbox, Grid, Animations, Custom Properties", highlight: true },
    { name: "JavaScript (ES6+)", category: "frontend", icon: "FileCode", level: "Async/Await, DOM, Event Loop, Modular JS", highlight: true },
    { name: "React.js", category: "frontend", icon: "Atom", level: "Hooks, Context, State Management, Components", highlight: true },
    { name: "Tailwind CSS", category: "frontend", icon: "Layers", level: "Utility-first Design, Custom Configurations", highlight: false },

    // Backend
    { name: "Node.js", category: "backend", icon: "Server", level: "Event-driven Runtime, Asynchronous I/O, NPM", highlight: true },
    { name: "Express.js", category: "backend", icon: "Cpu", level: "Middleware, RESTful Routing, Error Handling", highlight: true },
    { name: "PHP", category: "backend", icon: "Terminal", level: "Server-side Scripting, MVC, Backend Integration", highlight: false },

    // Programming
    { name: "Java", category: "programming", icon: "Binary", level: "OOP Concepts, Data Structures, Algorithms", highlight: true },
    { name: "C", category: "programming", icon: "Hash", level: "Pointers, Memory Management, Procedural Code", highlight: false },
    { name: "C++", category: "programming", icon: "Code", level: "STL, Performance, Object-Oriented Design", highlight: true },

    // Database
    { name: "MongoDB", category: "database", icon: "Database", level: "Document Modeling, Mongoose ODM, Aggregations", highlight: true },
    { name: "SQLite", category: "database", icon: "HardDrive", level: "Relational Queries, Schema Design, Transactions", highlight: false },
    { name: "Firebase", category: "database", icon: "Flame", level: "Firestore, Realtime DB, Auth & Hosting", highlight: false },

    // Tools
    { name: "Git", category: "tools", icon: "GitBranch", level: "Version Control, Branching, Merging, Rebase", highlight: true },
    { name: "GitHub", category: "tools", icon: "Github", level: "Collaborative Workflows, PRs, Issue Tracking", highlight: true },
    { name: "VS Code", category: "tools", icon: "Monitor", level: "Extensions, Debugging, Environment Setup", highlight: false },
    { name: "WordPress", category: "tools", icon: "Globe", level: "CMS Management, Themes, Dynamic Layouts", highlight: false },

    // Other
    { name: "REST APIs", category: "other", icon: "Workflow", level: "API Endpoints, JSON, Authentication, Status Codes", highlight: true },
    { name: "Payment Gateway", category: "other", icon: "CreditCard", level: "Checkout Flows, Webhooks, Transaction Verification", highlight: true },
    { name: "Responsive Design", category: "other", icon: "Smartphone", level: "Mobile-First Architecture, Cross-Browser Support", highlight: true }
  ]
};

export const projectsData = [
  {
    id: "pg-mitra",
    name: "PG Mitra",
    category: "Full Stack",
    filterKey: "fullstack",
    tagline: "Student Accommodation & PG Discovery Platform",
    description: "A specialized platform engineered to solve student housing challenges by providing verified PG listings, transparent pricing, automated room booking, and an integrated student community.",
    image: "/projects/pg-mitra.svg",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "CSS3"],
    features: [
      "Room booking & real-time availability tracking",
      "Incentivized student referral & reward system",
      "Interactive student community & roommate finder",
      "Advanced filtering by proximity to colleges, amenities, and budget"
    ],
    architecture: "Client-server architecture with React SPA frontend communicating via RESTful endpoints to an Express/Node backend, backed by MongoDB for user profiles, booking states, and hostel metadata.",
    liveUrl: null, // Placeholder as requested
    githubUrl: "https://github.com/mayank995676/pg-mitra",
    featured: true,
    badge: "Student Accommodation"
  },
  {
    id: "findmyblood",
    name: "FindMyBlood",
    category: "Full Stack",
    filterKey: "fullstack",
    tagline: "Emergency Blood Donation & Donor Discovery Platform",
    description: "A life-saving digital network connecting individuals facing urgent medical requirements with eligible, location-compatible blood and plasma donors in real time.",
    image: "/projects/findmyblood.svg",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation", "REST APIs"],
    features: [
      "Geolocation and blood-type matching algorithm",
      "One-click emergency broadcast alert system",
      "Donor verification and donation eligibility tracking",
      "Privacy-shielded direct communication between parties"
    ],
    architecture: "Real-time query processing matching blood group compatibility matrices and distance radius, with clean responsive views optimized for high-urgency mobile situations.",
    liveUrl: null,
    githubUrl: "https://github.com/mayank995676/findmyblood",
    featured: true,
    badge: "Healthcare Platform"
  },
  {
    id: "pantrypal",
    name: "PantryPal",
    category: "Web Application",
    filterKey: "webapp",
    tagline: "Modern Smart Food & Pantry Management Web App",
    description: "A modern kitchen inventory web application designed to combat food waste by tracking expiration dates, categorizing ingredients, and suggesting recipes based on items already in stock.",
    image: "/projects/pantrypal.svg",
    technologies: ["Next.js", "Tailwind CSS", "React.js", "REST APIs", "Modern Web Technologies"],
    features: [
      "Visual pantry inventory with automated expiration warnings",
      "Smart recipe recommendation based on available ingredients",
      "Zero-waste kitchen assistant and grocery shopping list",
      "Fast client-side search and category tagging"
    ],
    architecture: "Next.js architecture with client-side reactive state management, modular components, and responsive utility styling.",
    liveUrl: null,
    githubUrl: "https://github.com/mayank995676/pantrypal",
    featured: true,
    badge: "Smart Management"
  },
  {
    id: "safebite",
    name: "SafeBite",
    category: "AI & Concepts",
    filterKey: "ai",
    tagline: "AI-Powered Food & Plant Safety Assistant Concept",
    description: "An AI-guided safety concept application engineered to evaluate potential toxicity, botanical hazards, and allergen risks in food items and household plants for people and pets.",
    image: "/projects/safebite.svg",
    technologies: ["React.js", "JavaScript", "AI Integration", "REST APIs", "Modern Web Technologies"],
    features: [
      "Instant risk classification (Safe, Moderate Caution, Severe Hazard)",
      "Dedicated pet toxicity alerts (dogs, cats, domestic animals)",
      "Actionable emergency care instructions and symptom checklists",
      "Clean visual HUD scanner interface"
    ],
    architecture: "Engineered around rapid tokenized queries against toxicity datasets and AI prompt structuring to provide immediate safety ratings.",
    liveUrl: null,
    githubUrl: "https://github.com/mayank995676/safebite",
    featured: false,
    badge: "AI Concept"
  },
  {
    id: "kiddy-solutions",
    name: "Kiddy Solutions",
    category: "Web Application",
    filterKey: "webapp",
    tagline: "Web Development & Digital Solutions Business Platform",
    description: "A commercial digital solutions website engineered to showcase bespoke web development services, technical client case studies, and structured consultation workflows.",
    image: "/projects/kiddysolutions.svg",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress", "Responsive Design"],
    features: [
      "Showcase of modern digital services & engineering capabilities",
      "Interactive consultation inquiry form and quote generator",
      "SEO-optimized semantic structure with high Lighthouse performance",
      "Cross-browser and mobile-first responsive architecture"
    ],
    architecture: "Modular UI architecture designed with strong semantic HTML5, custom responsive layouts, and performant asset delivery.",
    liveUrl: null,
    githubUrl: "https://github.com/mayank995676/kiddy-solutions",
    featured: false,
    badge: "Client Agency"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
