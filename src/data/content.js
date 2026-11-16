// ─────────────────────────────────────────────────────────────
// EDIT YOUR PORTFOLIO CONTENT HERE. Every section reads from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sirivennela Akula',
  headline: 'AI/ML Enthusiast | Software Developer | Generative AI Explorer',
  rotating: ['AI/ML Enthusiast', 'Software Developer', 'Generative AI Explorer'],
  intro:
    'Computer Science graduate passionate about building intelligent applications and scalable software solutions. I enjoy exploring AI-driven technologies, developing practical applications and solving real-world problems through technology.',
  location: 'Hyderabad, Telangana',
  email: 'siriakula01@gmail.com',
  phone: '+91 6281535953',
  // 👇 Paste your profile URLs here (e.g. 'https://github.com/yourname'). Empty = icon is hidden.
  github: '',
  linkedin: '',
  resume: '/Sirivennela_Akula_Resume.pdf',
}

export const nav = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
]

export const aboutPoints = [
  { icon: 'code', title: 'Strong Foundations', text: 'Python, Java, Data Structures, Object-Oriented Programming, SQL and software development.' },
  { icon: 'brain', title: 'Exploring Generative AI', text: 'Hands-on learning across Generative AI, Large Language Models and Natural Language Processing through technical study and projects.' },
  { icon: 'spark', title: 'AI Meets Engineering', text: 'Interested in building intelligent applications that combine AI capabilities with practical software engineering.' },
]

export const stats = [
  { value: '8.68', label: 'B.Tech CGPA' },
  { value: '2', label: 'Featured Projects' },
  { value: '1st', label: 'Google API Ideathon' },
]

export const skills = [
  { title: 'Programming Languages', icon: 'code', items: ['Python', 'Java', 'SQL'] },
  { title: 'Web Technologies', icon: 'globe', items: ['HTML', 'CSS'] },
  { title: 'Frameworks & Tools', icon: 'layers', items: ['Spring Boot', 'Bootstrap'] },
  { title: 'AI Technologies', icon: 'brain', items: ['Generative AI', 'Large Language Models (LLMs)', 'Natural Language Processing (NLP)'], featured: true },
  { title: 'Core Computer Science', icon: 'cpu', items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks'] },
  { title: 'Soft Skills', icon: 'users', items: ['Communication', 'Problem Solving', 'Adaptability', 'Collaboration'] },
]

export const projects = [
  {
    id: 'herhealth',
    kind: 'health',
    index: '01',
    category: 'AI / ML · Healthcare',
    title: 'HerHealth',
    subtitle: 'Machine Learning Framework for PCOS Screening',
    summary:
      'A cross-platform healthcare application focused on early-stage PCOS screening, combining symptom tracking with machine learning, explainable AI and privacy-preserving synthetic data.',
    features: [
      'Symptom monitoring',
      'Menstrual cycle tracking',
      'Chatbot support',
      'PCOS prediction modules',
      'Machine learning-based screening',
      'Explainable AI using SHAP',
      'Synthetic medical data generation using Bayesian Networks',
    ],
    highlights: [
      'Developed and evaluated multiple machine learning models using symptom-based and clinical datasets.',
      'Used SHAP to understand feature importance and improve model interpretability.',
      'Designed a Bayesian Network-based synthetic data generation pipeline that preserves statistical relationships while maintaining patient privacy.',
    ],
    tech: ['Machine Learning', 'SHAP', 'Explainable AI', 'Bayesian Networks'],
    github: '',
    demo: '',
  },
  {
    id: 'docs',
    kind: 'cloud',
    index: '02',
    category: 'Cloud · Software Engineering',
    title: 'Cloud-Based Document Collaboration System',
    subtitle: 'Real-time multi-user editing platform',
    summary:
      'A real-time multi-user document collaboration platform designed to enable simultaneous editing and synchronization across users.',
    features: [
      'Real-time collaborative editing',
      'Live synchronization',
      'Instant updates across users',
      'Version control',
      'Role-based access permissions',
      'User authentication',
      'In-document comments and annotations',
    ],
    highlights: [
      'Designed for simultaneous editing with live synchronization so every collaborator sees updates instantly.',
      'Secured with user authentication and role-based access permissions.',
      'Supports version control plus in-document comments and annotations for team review.',
    ],
    tech: [],
    github: '',
    demo: '',
  },
]

export const experience = {
  org: 'EduSkills Academy',
  role: 'Java Full Stack Development Intern',
  points: [
    'Completed Java Full Stack Development internship.',
    'Worked with HTML, CSS, Bootstrap and JavaScript.',
    'Learned backend development using Core Java, Spring and Spring Boot.',
    'Gained hands-on exposure to enterprise application development.',
    'Learned Object-Relational Mapping (ORM).',
    'Worked with SQL database management.',
    'Gained experience with Git version control.',
  ],
  tech: ['Core Java', 'Spring', 'Spring Boot', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ORM', 'SQL', 'Git'],
}

export const education = [
  { level: 'B.Tech – Computer Science Engineering', school: 'Gokaraju Rangaraju Institute of Engineering and Technology', years: '2022 – 2026', scoreLabel: 'CGPA', score: '8.68', primary: true },
  { level: 'Intermediate – MPC', school: 'MasterMinds Junior College', years: '2020 – 2022', scoreLabel: 'Percentage', score: '92.3%' },
  { level: 'SSC', school: 'Gowtham Model School', years: '2020', scoreLabel: 'CGPA', score: '10' },
]

export const achievements = [
  { title: '1st Place', event: 'Google API Ideathon', note: 'Conducted at GRIET' },
]

export const certifications = [
  { title: 'Web Development – Bootstrap & Flexbox' },
  { title: 'SQL – Introduction to Databases' },
]
