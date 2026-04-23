type Metric = {
  value: string;
  label: string;
};

type Profile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  heroBadge: string;
  metrics: Metric[];
  photo?: {
    src: string;
    alt: string;
    caption?: string;
  };
};

type Project = {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  github?: string;
  demo?: string;
  type: string;
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" }
];

export const profile: Profile = {
  name: "Sandesh Prasad Paudel",
  role: "IT Tutor | Backend Developer | DevOps Enthusiast",
  tagline:
    "I build reliable platforms that turn messy operational problems into measurable business outcomes.",
  summary:
    "I approach software like an owner: clarify the constraint, design the simplest durable system, and ship improvements that make teams faster. My work spans product engineering, backend architecture and the delivery discipline needed to operate at enterprise scale.",
  location: "Open to remote and hybrid opportunities",
  email: "paudelsandesh1200@gmail.com",
  linkedin: "https://www.linkedin.com/in/sandesh-paudel-b6238017a/",
  github: "https://github.com/MrSandSort",
  heroBadge: "Shipping  systems with product focus",
  metrics: [
    { value: "2+", label: "Years building software" },
    { value: "99.98%", label: "Platform reliability" },
  ],
  photo: {
    src: "/images/sandesh.jpeg",
    alt: "Portrait of Sandesh Prasad Paudel",
    caption: "Backend developer, tutor, and DevOps enthusiast."
  }
};

export const aboutHighlights = [
  {
    title: "Builder mindset",
    description:
      "I like starting with ambiguous problems, mapping the failure modes, and turning that into a system that is easy for teams to trust and evolve."
  },
  {
    title: "Engineering maturity",
    description:
      "My default mode is the one expected on senior teams: clear tradeoffs, APIs, thoughtful observability, and code that remains readable after the launch rush."
  }
];

export const skills = [
  {
    category: "Frontend",
    description: "Interfaces that stay fast, legible, and accessible across devices.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "Accessibility"]
  },
  {
    category: "Backend",
    description: "Services designed for resilience, maintainability, and scale.",
    items: ["Node.js", "Python", "Express", "FastAPI", "MongoDB", "PostgreSQL"]
  },
  {
    category: "DevOps",
    description: "Delivery pipelines and infrastructure that remove release friction.",
    items: ["Docker", "AWS", "Terraform", "GitHub Actions", "Kubernetes", "Observability"]
  },
  {
    category: "Academic Tutor",
    description: "Applied tutoring in programming languages, data structures, and algorithms",
    items: ["Communication", "Problem Solving", "Java", "Python"]
  }
];

export const projects: Project[] = [
  {
    title: "IoT-Based Agricultural Automation System",
    summary:
      "A backend-driven system that automates agricultural monitoring by integrating IoT devices with real-time data processing.It was intially worked for Lalitpur Metropolitan City to monitor soil moisture, temperature, and humidity for greenhouse management.",
    impact:
      "Eliminated manual monitoring and enabled real-time insights for agricultural operations.",
    stack: ["NestJS", "Node.js", "MongoDB", "PostgreSQL", "IoT"],
    github: "",
    demo: "https://itech.automation.muktinathitech.com.np/",
    type: "IoT + Backend"
  },
  {
    title: "Government Web Application (Nepal Police)",
    summary:
      "A web-based system built using ASP.NET MVC to handle internal workflows and data management for government operations.",
    impact:
      "Improved efficiency and reliability of internal processes through structured MVC architecture & Clean Architecture.",
    stack: ["ASP.NET", "MVC", "SQL", "HTML", "CSS", "Bootstrap", "AJAX"],
    demo: "https://www.nepalpolice.gov.np/",
    type: "Enterprise Application"
  },
  {
    title: "Secure Cloud File Storage (Zero-Knowledge Encryption)",
    summary:
      "A cloud-based file storage system implementing zero-knowledge encryption to ensure that user data remains private and inaccessible even to the server.",
    impact:
      "Enhanced data privacy and security by enforcing client-side encryption and secure storage mechanisms.",
    stack: ["Node.js", "Next.js", "Crypto", "MongoDB", "Cloud Storage"],
    github: "https://github.com/MrSandSort/RoleAuth",
    demo: "",
    type: "Security + Cloud"
  },
  
  {
  title: "Google Form Clone (Backend API with Django)",
  summary:
    "Built a backend API for a Google Form–like system using Django, enabling dynamic form creation, question management, and response collection through RESTful endpoints.",
  impact:
    "Enabled scalable and structured data handling for form submissions, demonstrating strong backend design, API development, and database modeling skills.",
  stack: ["Django", "Python", "REST API", "SQLite/PostgreSQL"],
  github: "https://github.com/MrSandSort/GoogleFormClone",
  demo: "",
  type: "Backend Engineering"
}
];

export const experience = [
  {
  role: "Full-time Academic Tutor",
  company: "Islington College",
  period: "August 2025 - Present",
  location: "On-site",
  achievements: [
    "Delivered interactive sessions on Java, databases, and software engineering concepts to undergraduate students, improving conceptual clarity and engagement.",
    "Designed and implemented hands-on labs and real-world projects to bridge theory with practical development skills.",
    "Mentored students in debugging, problem-solving, and project development, resulting in improved academic performance and confidence.",
    "Simplified complex topics like exception handling, OOP, and database design into relatable real-world analogies.",
    "Provided academic support and guidance, helping students prepare for exams, assignments, and technical interviews."
  ]
 },
  {
  role: "Junior Backend Developer",
  company: "Muktinath Krishi Company",
  period: "August 2024 - June 2025",
  location: "On-site",
  achievements: [
    "Developed and maintained backend services using Node.js and NestJS for scalable agricultural systems.",
    "Transformed a manual IoT-based monitoring system into an automated solution, improving data collection efficiency and reducing manual intervention.",
    "Built and optimized RESTful APIs using Next.js (API routes) and Node.js to support frontend and device integrations.",
    "Designed and managed databases using MongoDB and PostgreSQL, ensuring data consistency and performance optimization.",
    "Integrated IoT devices with backend systems for real-time data processing and monitoring.",
    "Collaborated with cross-functional teams to deliver reliable and production-ready features."
  ]
},
 {
  role: "Software Developer Intern",
  company: "LIS Nepal Pvt. Ltd.",
  period: "September 2023 - January 2024",
  location: "Hybrid",
  achievements: [
    "Contributed to government-based web applications, including projects for Nepal Police, using ASP.NET MVC architecture.",
    "Developed and maintained backend functionalities using ASP.NET with ORM-based database operations.",
    "Built responsive frontend interfaces using HTML, CSS, Bootstrap, and AJAX for dynamic user interactions.",
    "Implemented MVC design patterns to ensure clean separation of concerns and maintainable code structure.",
    "Worked on database integration and CRUD operations, ensuring data consistency and efficient querying.",
    "Collaborated with senior developers to debug, test, and deploy features in production environments."
  ]
}
];

export const githubStats = [
  { label: "Full-stack projects", value: "6+" },
  { label: "Backend systems built", value: "10+" },
  { label: "IoT integrations", value: "2+" },
  { label: "Technologies explored", value: "12+" }
];

const activitySeed = [0, 1, 2, 3, 1, 0, 4, 2, 1, 3, 4, 2, 0, 1];

export const githubHeatmap = Array.from({ length: 84 }, (_, index) => ({
  day: index,
  level: activitySeed[(index + Math.floor(index / 7)) % activitySeed.length]
}));
