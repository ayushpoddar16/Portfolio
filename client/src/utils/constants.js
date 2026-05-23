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
  codingNinjas: "https://www.naukri.com/code360/profile/6aff9294-7047-4f53-bb33-f037d144c3d1",
  resume: "/resume.pdf",
  heroDesc:
    "Full Stack MERN Developer building scalable, AI-powered web applications that solve real-world problems. Backend-focused with strong DSA foundations.",
  aboutSummary: [
    "I'm a final-year CS student at Jabalpur Engineering College, passionate about building production-ready web applications. I specialize in the MERN stack with a strong focus on backend engineering and scalable architecture.",
    "My journey spans two internships — at Zoro Innovation and Syandrix Infotech — where I built real-world APIs, integrated payment gateways, and deployed production systems. I love bridging AI capabilities with clean backend logic.",
    "Outside development, I actively solve DSA problems on LeetCode to sharpen algorithmic thinking — a habit that directly improves my code quality and system design.",
  ],
};

export const TYPED_PHRASES = [
  "Full Stack MERN Developer",
  "Backend Engineer",
  "AI-Powered App Builder",
  "Problem Solver · DSA Enthusiast",
];

export const HERO_STACK = [
  "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Gemini AI",
];

export const STATS = [
  { count: 300, label: "LeetCode Problems", suffix: "+" },
  { count: 50, label: "APIs Built", suffix: "+" },
  { count: 2, label: "Internships", suffix: "" },
  { count: 95, label: "JEE Percentile", suffix: "" },
];

export const SKILLS = [
  {
    icon: "⚛️",
    name: "Frontend",
    pills: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
  },
  {
    icon: "⚙️",
    name: "Backend",
    pills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Nodemailer", "Multer"],
  },
  {
    icon: "🗄️",
    name: "Database",
    pills: ["MongoDB", "MySQL", "Mongoose", "SQL"],
  },
  {
    icon: "🔧",
    name: "Tools & Integrations",
    pills: ["Razorpay", "Twilio", "Cloudinary", "Postman", "Git / GitHub", "Render"],
  },
  {
    icon: "🚀",
    name: "DevOps & AI",
    pills: ["Docker", "Redis", "OCR / pdf-parse"],
  },
  {
    icon: "🧠",
    name: "CS Fundamentals",
    pills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks", "C++"],
  },
];

export const EXPERIENCE = [
  {
    company: "Zoro Innovation",
    period: "Jul – Sep 2025",
    role: "Backend Developer Intern · MERN Stack",
    desc: "Contributed to production-level backend systems, building and optimizing RESTful APIs for real-world applications with a focus on performance and scalability.",
    achievements: [
      "Developed and optimized 10+ RESTful APIs using Node.js, Express.js, and MongoDB, improving backend response efficiency.",
      "Integrated Razorpay payment gateway for seamless transaction handling.",
      "Built WhatsApp notification system using Twilio REST APIs for real-time user alerts.",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Razorpay", "Twilio", "REST APIs"],
  },
  {
    company: "Syandrix Infotech",
    period: "2024",
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
    role: "B.Tech — Computer Science · CGPA: 7.6",
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
    label: "QAI",
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
    stack: ["React.js", "Node.js", "MongoDB", "Gemini AI", "OCR"],
    github: "https://github.com/ayushpoddar16/QuestionAI",
    live: "https://questionai-ayush.onrender.com/",
  },
  {
    id: "edusubmit",
    name: "EduSubmit",
    tagline: "Educational Submission Platform",
    label: "EDU",
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
];

export const DSA_COUNTERS = [
  { target: 300, label: "LeetCode Problems", sub: "leetcode.com/u/ayushpoddarr", suffix: "+" },
  { target: 80, label: "Coding Ninjas", sub: "code360 profile", suffix: "+" },
  { target: 50, label: "REST APIs Built", sub: "In production", suffix: "+" },
  { target: 95, label: "JEE Percentile", sub: "All India 2022", suffix: "" },
];

export const ACHIEVEMENTS = [
  { icon: "🏆", text: "JEE 2022 — 95 Percentile nationwide" },
  { icon: "📘", text: "Class 12th — 93.66% (CBSE Board)" },
  { icon: "⚡", text: "Implemented JWT Auth, OTP verification, Razorpay & Multer in production apps" },
  { icon: "🤖", text: "Integrated Google Gemini Vision AI & OCR in a real-world student platform" },
  { icon: "🔗", text: "CGPA 7.6 at Jabalpur Engineering College, Madhya Pradesh" },
];

export const ABOUT_TAGS = [
  "MERN Stack", "REST APIs", "Gemini AI", "JWT Auth", "Razorpay", "DSA",
];
