import {
  IconBrain,
  IconCloud,
  IconCode,
  IconCpu,
  IconHeartRateMonitor,
  IconTools,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";

type TablerIcon = typeof IconCode;

export const profile = {
  name: "Sirivennela Akula",
  headline: "AI/ML Enthusiast | Software Developer | Generative AI Explorer",
  intro:
    "Computer Science graduate passionate about building intelligent applications and scalable software solutions. I enjoy exploring AI-driven technologies, developing practical applications and solving real-world problems through technology.",
  location: "Hyderabad, Telangana",
  email: "siriakula01@gmail.com",
  phone: "+91 6281535953",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "8.68", label: "B.Tech CGPA" },
  { value: "2", label: "Featured projects" },
  { value: "1st", label: "Place, Google API Ideathon" },
  { value: "1", label: "Full stack internship" },
];

export const aboutParagraphs = [
  "I am a Computer Science Engineering graduate from GRIET with a CGPA of 8.68. My foundation spans Python, Java, Data Structures, Object-Oriented Programming, SQL and software development.",
  "Through my technical learning and projects, I have explored Generative AI, Large Language Models and Natural Language Processing.",
  "I am interested in building intelligent applications that combine AI capabilities with practical software engineering.",
];

export const skillGroups: { title: string; icon: TablerIcon; items: string[] }[] =
  [
    {
      title: "Programming Languages",
      icon: IconCode,
      items: ["Python", "Java", "SQL"],
    },
    {
      title: "Web Technologies",
      icon: IconWorld,
      items: ["HTML", "CSS"],
    },
    {
      title: "Frameworks and Tools",
      icon: IconTools,
      items: ["Spring Boot", "Bootstrap"],
    },
    {
      title: "AI Technologies",
      icon: IconBrain,
      items: [
        "Generative AI",
        "Large Language Models (LLMs)",
        "Natural Language Processing (NLP)",
      ],
    },
    {
      title: "Core Computer Science",
      icon: IconCpu,
      items: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      title: "Soft Skills",
      icon: IconUsers,
      items: ["Communication", "Problem Solving", "Adaptability", "Collaboration"],
    },
  ];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  features: string[];
  highlights: string[];
  icon: TablerIcon;
};

export const projects: Project[] = [
  {
    id: "herahealth",
    title: "HeraHealth",
    subtitle: "Machine Learning Framework for PCOS Screening",
    summary:
      "A cross-platform healthcare application for early-stage PCOS screening that brings chatbot support, menstrual cycle tracking, symptom monitoring and prediction modules into one user-friendly platform.",
    tags: [
      "Machine Learning",
      "Explainable AI (SHAP)",
      "Bayesian Networks",
      "Synthetic Data",
      "Chatbot Support",
    ],
    features: [
      "Symptom monitoring",
      "Menstrual cycle tracking",
      "Chatbot support",
      "PCOS prediction modules",
      "Machine learning-based screening",
      "Explainable AI using SHAP",
      "Synthetic medical data generation using Bayesian Networks",
    ],
    highlights: [
      "Developed and evaluated multiple machine learning models using symptom-based and clinical datasets.",
      "Used SHAP to analyze feature importance and improve model interpretability.",
      "Designed a Bayesian Network-based synthetic data generation pipeline that preserves statistical relationships while maintaining patient privacy.",
    ],
    icon: IconHeartRateMonitor,
  },
  {
    id: "collaboration",
    title: "Cloud-Based Document Collaboration System",
    subtitle: "Real-time multi-user document editing",
    summary:
      "A real-time, multi-user document collaboration platform designed to enable simultaneous editing and synchronization across users.",
    tags: [
      "Real-time Collaboration",
      "Live Synchronization",
      "Version Control",
      "Role-based Access",
      "User Authentication",
    ],
    features: [
      "Real-time collaborative editing",
      "Live synchronization",
      "Instant updates across users",
      "Version control",
      "Role-based access permissions",
      "User authentication",
      "In-document comments and annotations",
    ],
    highlights: [
      "Built a real-time, multi-user platform enabling simultaneous editing, live synchronization and instant updates across users.",
      "Implemented version control, role-based access permissions, user authentication and in-document comments and annotations for secure, efficient collaboration.",
    ],
    icon: IconCloud,
  },
];

export const experience = {
  role: "Java Full Stack Development Intern",
  organization: "EduSkills Academy",
  bullets: [
    "Completed a Java Full Stack Development internship covering front-end technologies such as HTML, CSS, Bootstrap and JavaScript.",
    "Learned back-end development using Core Java, Spring and Spring Boot.",
    "Gained hands-on exposure to enterprise application development and object-relational mapping (ORM).",
    "Worked with SQL database management and version control using Git.",
  ],
  technologies: [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "Core Java",
    "Spring",
    "Spring Boot",
    "ORM",
    "SQL",
    "Git",
  ],
};

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
    period: "2022 – 2026",
    score: "CGPA: 8.68",
    highlight: true,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "MasterMinds Junior College",
    period: "2020 – 2022",
    score: "Percentage: 92.3%",
    highlight: false,
  },
  {
    degree: "SSC",
    institution: "Gowtham Model School",
    period: "2020",
    score: "CGPA: 10",
    highlight: false,
  },
];

export const achievement = {
  title: "Google API Ideathon",
  place: "1st Place",
  detail: "Conducted at GRIET",
};

export const certifications = [
  "Web Development – Bootstrap & Flexbox",
  "SQL – Introduction to Databases",
];
