// ============================================================
// PORTFOLIO DATA — Edit this file to update all site content
// ============================================================

export const PERSONAL = {
  name: "Ayush Poddar",
  initials: "AP",
  tagline: "Full Stack MERN Developer",
  location: "Jabalpur, Madhya Pradesh",
  email: "ayush16373@gmail.com",
  phone: "8827531757",
  linkedin: "https://www.linkedin.com/in/ayush-poddar-780b37251",
  github: "https://github.com/ayushpoddar16",
  leetcode: "https://leetcode.com/u/ayushpoddarr/",
  codingNinjas:
    "https://www.naukri.com/code360/profile/6aff9294-7047-4f53-bb33-f037d144c3d1",
  resume: "/Resume.pdf",
  heroDesc:
    "Computer Science student and aspiring Software Engineer with hands-on MERN stack experience, building scalable web applications and AI-powered solutions for real-world problems.",
  aboutSummary: [
    "I'm a graduate CS student at Jabalpur Engineering College, passionate about building production-ready web applications. I specialize in the MERN stack with a strong focus on backend engineering and scalable architecture.",
    "Across internships at Zoro Innovation and Syandrix Infotech, I architected e-commerce workflows, built REST APIs, and integrated Razorpay and Twilio. I also enjoy bridging AI capabilities with clean backend logic.",
    "Outside development, I solve DSA problems on LeetCode and Coding Ninjas to sharpen algorithmic thinking — a habit that directly improves my code quality and system design.",
  ],
};

export const TYPED_PHRASES = [
  "Full Stack MERN Developer",
  "Backend Engineer",
  "AI-Powered App Builder",
  "Problem Solver · DSA Enthusiast",
];

export const HERO_STACK = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Gemini AI",
];

export const STATS = [
  { count: 400, label: "Coding Problems", suffix: "+" },
  { count: 50, label: "APIs Built", suffix: "+" },
  { count: 2, label: "Internships", suffix: "" },
  { count: 95, label: "JEE Percentile", suffix: "" },
];

export const SKILLS = [
  {
    icon: "💻",
    name: "Languages",
    pills: ["C", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    icon: "⚛️",
    name: "Frontend",
    pills: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
  },
  {
    icon: "⚙️",
    name: "Backend",
    pills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "JWT Auth",
      "Nodemailer",
      "Multer",
    ],
  },
  {
    icon: "🗄️",
    name: "Database",
    pills: ["MongoDB", "MySQL", "Mongoose", "SQL"],
  },
  {
    icon: "🔧",
    name: "Tools & Integrations",
    pills: [
      "Git",
      "GitHub",
      "Postman",
      "Render",
      "Cloudinary",
      "Twilio",
      "Razorpay",
      "Visual Studio Code",
    ],
  },
  {
    icon: "🚀",
    name: "DevOps & AI",
    pills: [
      "Docker",
      "Redis",
      "OCR / pdf-parse",
      "Prompt Engineering",
      "Airtable",
      "Pinecone",
      "RAG",
      "AI Agents",
      "OpenAI",
      "Gemini",
      "n8n",
    ],
  },
  {
    icon: "🧠",
    name: "CS Fundamentals",
    pills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
  },
];

export const EXPERIENCE = [
  {
    company: "Zoro Innovation",
    period: "Jul – Sep 2025",
    role: "Backend Developer Intern · MERN Stack Development",
    desc: "Architected a full-stack e-commerce platform with product, cart, authentication, and order management workflows.",
    achievements: [
      "Built REST APIs for product catalog, cart, authentication, and order management using the MERN stack.",
      "Integrated Razorpay payment gateway for transaction handling.",
      "Integrated Twilio WhatsApp API for automated order notifications.",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Twilio",
    ],
  },
  {
    company: "Syandrix Infotech",
    period: "april - may 2026",
    role: "MERN Developer Intern",
    desc: "Worked on full-stack web development using the MERN stack, contributing to both frontend components and backend API development.",
    achievements: [
      "Built and maintained full-stack MERN features for production applications.",
      "Implemented JWT-based authentication and role-based access control systems.",
      "Collaborated in an agile environment, shipping features on tight timelines.",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "JWT"],
  },
  {
    company: "Jabalpur Engineering College",
    period: "2022 – 2026",
    role: "B.Tech — Computer Science · CGPA: 7.7",
    desc: "Pursuing B.Tech in Computer Science. Strong foundation in CS fundamentals, algorithms, and software engineering principles.",
    achievements: [],
    tags: ["Computer Science", "DSA", "DBMS", "OS", "Networks"],
  },
];

export const PROJECTS = [
  {
    id: "questionai",
    name: "QuestionAI",
    tagline: "AI-Powered Academic Assistant",
    image: "/QuestionAi.png",
    gradientFrom: "#071520",
    gradientTo: "#0a1f35",
    accentLine: "linear-gradient(90deg, #00E5A0, #0099FF)",
    desc: "Centralized platform for 1000+ students to access 500+ previous-year question papers across 10+ branches, powered by Google Gemini AI.",
    features: [
      "Gemini Vision OCR + pdf-parse for adaptive text extraction",
      "Context-aware AI chatbot for personalized academic guidance",
      "Practice question generation using AI",
      "Multi-branch paper organization & search",
    ],
    stack: ["Gemini AI", "OCR", "React.js", "Node.js", "MongoDB"],
    github: "https://github.com/ayushpoddar16/QuestionAI",
    live: "https://questionai-ayush.onrender.com/",
  },
  {
    id: "edusubmit",
    name: "EduSubmit",
    tagline: "Educational Submission Platform",
    image: "/Edusubmit.png",
    gradientFrom: "#0f1520",
    gradientTo: "#0a1525",
    accentLine: "linear-gradient(90deg, #0099FF, #00E5A0)",
    desc: "End-to-end assignment workflow for 50+ teachers and 500+ students, reducing manual evaluation effort by 40% through intelligent dashboards.",
    features: [
      "Role-based auth — Teacher & Student dashboards",
      "Anti-plagiarism: copy-paste, right-click restrictions",
      "Submission history, grading & feedback system",
      "Centralized assignment management",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "JWT", "Express.js"],
    github: "https://github.com/ayushpoddar16/EduSubmit",
    live: "https://edusubmit-ayush.onrender.com/",
  },
  {
    id: "roadsathi",
    name: "RoadSathi",
    tagline: "Real-Time Roadside Assistance Platform",
    image: "/RoadSathi.png",
    gradientFrom: "#20140b",
    gradientTo: "#3a1f0d",
    accentLine: "linear-gradient(90deg, #FFB347, #FF6B35)",
    desc: "Real-time roadside assistance platform that connects vehicle owners with nearby mechanics for flat tyres, empty fuel tanks, and dead batteries.",
    features: [
      "MongoDB GeoJSON and 2dsphere search for approved, online mechanics within 5 km",
      "Socket.IO notifications and atomic request acceptance to prevent double-booking",
      "Live mechanic GPS tracking on interactive Leaflet maps with updates every 5 seconds",
      "JWT authentication, role-based workflows, Razorpay payments, and Cloudinary uploads",
    ],
    stack: [
      "Socket.IO",
      "Leaflet",
      "Razorpay",
      "Redis",
      "React.js",
      "Node.js",
      "MongoDB",
    ],
    github: "https://github.com/ayushpoddar16/RoadSathi.git",
    live: "https://roadsathi.onrender.com/",
  },
];

export const DSA_COUNTERS = [
  {
    target: 400,
    label: "Coding Problems",
    sub: "LeetCode + Coding Ninjas",
    suffix: "+",
  },
  { target: 50, label: "REST APIs", sub: "Built in production", suffix: "+" },
  { target: 95, label: "JEE Percentile", sub: "All India 2022", suffix: "" },
  {
    target: 7.7,
    label: "CGPA",
    sub: "Jabalpur Engineering College",
    suffix: "",
  },
];

export const ACHIEVEMENTS = [
  { icon: "🏆", text: "JEE 2022 — 95 Percentile nationwide" },
  { icon: "📘", text: "Class 12th — 93.67% (CBSE Board)" },
  {
    icon: "⚡",
    text: "Implemented JWT Authentication, MVC, OTP verification, file uploads, and Razorpay in production projects",
  },
  {
    icon: "🤖",
    text: "Built AI automations using Prompt Engineering, RAG, AI agents, OpenAI, Gemini, and n8n",
  },
  {
    icon: "🔗",
    text: "CGPA 7.7 at Jabalpur Engineering College, Madhya Pradesh",
  },
];

export const ABOUT_TAGS = [
  "MERN Stack",
  "REST APIs",
  "Gemini AI",
  "JWT Auth",
  "Razorpay",
  "DSA",
];
