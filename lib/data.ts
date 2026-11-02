export const site = {
  name: "Ogunsakin Olive Tomilola",
  shortName: "Olive Tomilola",
  role: "Software Engineering Student & Full-Stack Developer",
  location: "Nigeria",
  tagline:
    "I build web apps, mobile apps, and the backend systems that hold them up.",
  description:
    "Portfolio of Ogunsakin Olive Tomilola — a full-stack developer from Nigeria building web applications, mobile apps, backend systems, and cloud-integrated solutions.",
  // personal Info
  url: "https://olivetomi.vercel.app",
  email: "tommmyolive@gmail.com",
  phone: "+234 705 400 9804",
  github: "https://github.com/olivetomi",
  twitter: "https://x.com/olivetomi",
  linkedin: "https://linkedin.com/in/olive-ogunsakin-4572662aa/",
  resumeUrl: "/Olive's_Resume.pdf",
  avatar: "/images/Olive.png",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export const interests = [
  "Web Development",
  "Mobile App Development",
  "Backend Engineering",
  "Artificial Intelligence",
  "Cloud Computing",
  "UI/UX Design",
  "System Design",
];

export const funFacts = [
  "Ships side projects in the same week the idea shows up.",
  "Debugs best with worship music playing in the background.",
  "Believes the database schema is the real architecture diagram.",
  "Prefers a whiteboard sketch over a 40-slide spec.",
];

export type SkillGroupKey =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "Cloud"
  | "Languages"
  | "Tools";

export interface Skill {
  name: string;
  level: number; // 0-100, used for animated bars
}

export const skillGroups: Record<SkillGroupKey, Skill[]> = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 65 },
    { name: "HTML & CSS", level: 92 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 82 },
    { name: "Tailwind CSS", level: 88 },
  ],
  Backend: [
    { name: "Node.js", level: 55 },
    { name: "Express.js", level: 55 },
    { name: "Flask", level: 80 },
    { name: "PHP", level: 70 },
  ],
  Mobile: [
    { name: "React Native", level: 85 },
    { name: "Expo", level: 82 },
    { name: "Android Studio", level: 65 },
  ],
  Database: [
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "MySQL", level: 85 },
    { name: "Supabase", level: 82 },
  ],
  Cloud: [{ name: "AWS S3", level: 55 }],
  Languages: [
    { name: "Java", level: 60 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 82 },
    { name: "Python", level: 67 },
    { name: "PHP", level: 70 },
    { name: "C++", level: 65 },
    { name: "C", level: 60 },
  ],
  Tools: [
    { name: "Git", level: 51 },
    { name: "GitHub", level: 51 },
    { name: "VS Code", level: 95 },
    { name: "Android Studio", level: 65 },
    { name: "Postman", level: 85 },
    { name: "Expo", level: 82 },
    { name: "EAS Build", level: 80 },
  ],
};

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "daily-grace-devotional-website",
    title: "Daily Grace Devotional website",
    category: "Mobile and Web",
    description:
      "A Christian devotional mobile app with daily devotions, Bible study, and read-aloud functionality.",
    longDescription:
      "Daily Grace is a mobile devotional companion built for daily spiritual growth. It delivers daily devotions and Bible studies, keeps users informed with ministry announcements, and includes a read-aloud mode so devotions can be listened to on the go. Firebase Authentication secures every account, and the interface follows a calm, modern mobile design language suited to quiet, reflective use.",
    technologies: ["React Native", "Expo", "Infinityfree"],
    features: [
      "Daily devotions",
      "Bible study",
      "Announcements",
      "Read-aloud functionality",
      "Firebase Authentication",
      "Modern mobile UI",
    ],
    githubUrl: "https://github.com/olivetomi",
    liveUrl: 'https://dailygracedevotional.is-great.net',
    image: "/images/daily-grace.jpeg",
  },
  {
    slug: "church-devotional-management-website",
    title: "Church Devotional Management Website",
    category: "Web",
    description:
      "A content management system for church administrators to publish devotionals and studies.",
    longDescription:
      "This CDMS gives church administrators a single dashboard to manage the content behind the Daily Grace ecosystem: uploading devotionals and Bible studies and organizing ministry resources. Built with a PHP and MySQL backend for straightforward, reliable hosting, with a JavaScript-driven admin interface for day-to-day content updates.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    features: [
      "Upload devotionals",
      "Upload Bible studies",
      "Manage ministry resources",
    ],
    githubUrl: "https://github.com/olivetomi",
    liveUrl: "https://dailygracedevotional.is-great.net/admin/dashboard.php",
    image: "/images/cdms.png",
  },
  {
    slug: "word-of-grace-international-gospel-centre-website",
    title: "Word of Grace International Gospel Centre Website",
    category: "Full-Stack",
    description:
      "A modern church website with a responsive front end and admin dashboard for managing events.",
    longDescription:
      "This production-ready website for Word of Grace International Gospel Centre in Abuja, Nigeria, combines a polished church site with a full admin workflow for event management. Church staff can publish recurring and multi-day events, manage flyers, update schedules, and maintain a clean public-facing calendar without touching code. The platform is powered by Next.js, Supabase, and Vercel to keep the site fast, content-driven, and easy to manage.",
    technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "Vercel"],
    features: [
      "Multi-page church website",
      "Recurring event scheduling",
      "Monthly calendar and day-detail panel",
      "Event modal with flyer and map directions",
      "Admin dashboard with CRUD controls",
      "Featured event announcements and popup carousel",
      "Flyer uploads and contact form",
      "Responsive design and SEO setup",
    ],
    githubUrl: "https://github.com/olivetomi/WGIGC",
    liveUrl: "https://wgigc.vercel.app",
    image: "/images/WGimage.png",
  },
  {
  slug: "daily-devotion-app",
  title: "Daily Grace Devotion Mobile App",
  category: "Mobile",
  description:
    "A full-stack mobile app for daily devotionals, helping users build a consistent habit of reflection and spiritual growth.",
  longDescription:
    "A React Native mobile app built with Expo that delivers daily devotionals to users, with a Supabase backend handling authentication, content storage, and user progress. Designed to make daily reflection simple and consistent, with a clean reading experience and a history of past entries so users can track their journey over time.",
  technologies: ["React Native", "Expo", "Supabase"],
  features: [
    "Daily devotional content feed",
    "User authentication and profiles",
    "Prophetic declarations and prayers",
    "Note-taking and journaling features",
    "Offline-friendly reading experience",
  ],
  githubUrl: "https://github.com/olivetomi",
  liveUrl: null,
  image: "/images/dgmobile.jpeg",
  },
  {
    slug: "traffic-regulation-system",
    title: "Traffic Regulation System",
    category: "Full-Stack",
    description:
      "A final-year software engineering project for vehicle plate recognition, violation recording, and fine management.",
    longDescription:
      "A final-year software engineering project built to bring structure to traffic enforcement. The system recognizes vehicle plates, records traffic violations as they occur, manages the fines tied to each violation, and surfaces everything through a reporting dashboard for oversight. A React Native front end pairs with a Spring Boot backend and PostgreSQL database to keep records consistent across every stage.",
    technologies: ["React Native", "Spring Boot", "PostgreSQL"],
    features: [
      "Vehicle plate recognition",
      "Traffic violation recording",
      "Fine management",
      "Reporting dashboard",
    ],
    githubUrl: "https://github.com/olivetomi",
    liveUrl: null,
    image: "/images/project-traffic-system-placeholder.jpg",
  },
];

export const projectFilters = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export interface TimelineEntry {
  id: string;
  type: "work" | "academic" | "achievement";
  title: string;
  organization: string;
  period: string;
  points: string[];
}

export const timeline: TimelineEntry[] = [
  {
    id: "internship",
    type: "work",
    title: "IT Support Intern AND Mobile Development Student",
    organization: "Semlark Technologies Ltd & Brain-Blocks Academy",
    period: " Jan 2025 — Jun 2025",
    points: [
      "Built and maintained Flask backend APIs powering core application features",
      "Integrated AWS S3 for secure file storage and retrieval",
      "Developed mobile application features using React Native",
      "Handled database management across relational data stores",
      "Built and consumed REST APIs across mobile and web clients",
      "Fixed bugs and carried out software testing before releases",
      "Implemented authentication systems for user account security",
    ],
  },
  {
    id: "academic",
    type: "academic",
    title: "B.Sc. Software Engineering",
    organization: "Babcock University ",
    period: "2022 — 2026",
    points: [
      "Coursework spanning data structures, algorithms, databases, and system design",
      "Final-year project: Traffic Regulation System (React Native, Spring Boot, PostgreSQL)",
      "Active contributor to personal and team-based software projects",
    ],
  },
  {
    id: "achievement",
    type: "achievement",
    title: "Independent Projects & Technical Achievements",
    organization: "Self-Directed",
    period: "Ongoing",
    points: [
      "Designed and shipped the Daily Grace devotional mobile app end-to-end",
      "Built a church content management system used to publish devotionals and studies",
      "Architected a Flask + AWS S3 backend for surveillance footage storage",
      "Comfortable across the full stack: web, mobile, backend, and cloud",
    ],
  },
];

export const socials = [
  { label: "GitHub", href: site.github, icon: "github" as const },
  { label: "X / Twitter", href: site.twitter, icon: "twitter" as const },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" as const },
];
