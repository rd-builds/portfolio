import {
  FaAws,
  FaCode,
  FaCodeBranch,
  FaCertificate,
  FaGithub,
  FaKaggle,
  FaLinkedin,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import {
  SiCodeforces,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiOpenai,
  SiPytorch,
  SiTailwindcss,
  SiTensorflow,
  SiVercel,
} from 'react-icons/si'

export const portfolio = {
  name: 'Riya Duggal',
  roleWords: ['Web Developer', 'AI Explorer', 'Full-Stack Learner', 'Problem Solver'],

  intro:
    "First-year CSE student building real-world AI and web applications, focused on clean design, practical solutions, and impactful user experiences.",

  email: 'riyaduggal09@gmail.com',
  resumeUrl: '/resume.pdf',

  summary:
    'I build practical AI and web applications with clean interfaces and reliable functionality. I enjoy turning ideas into working products that are simple, efficient, and ready for real-world use.',

  profileImage: "/profile.jpeg",
}

export const navItems = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Achievements', '#achievements'],
  ['Links', '#links'],
  ['Contact', '#contact'],
]

export const projects = [
  {
    title: "Brand Website Generator",
    description: "Automatically generates modern, responsive brand websites from user inputs.",
    stack: ["React", "Node.js"],
    github: "https://github.com/rd-builds/brand-website-generator.git",
    demo: "https://brand-website-generator.vercel.app/",
    image: "/1.png"
  },
  {
    title: "Repo Explainer",
    description: "Analyzes GitHub repositories and explains code structure using AI.",
    stack: ["AI", "NLP"],
    github: "https://github.com/rd-builds/repo-explainer.git",
    image: "/3.png"
  },
  {
    title: "Portfolio Website",
    description: "Interactive personal portfolio with animations and modern UI design.",
    stack: ["React", "Tailwind"],
    github: "https://github.com/rd-builds/portfolio.git",
    image: "/2.png"
  },
  {
    title: "AI Research Analyzer",
    description: "Extracts key insights and summaries from research papers using AI.",
    stack: ["Python", "AI"],
    github: "https://github.com/rd-builds/AI-Research-Analyzer.git",
    image: "/4.png"
  }
]

export const skills = [
  {
    category: 'Languages',
    items: [
      { label: 'HTML', icon: FaCode },
      { label: 'CSS', icon: FaCode },
      { label: 'JavaScript', icon: SiJavascript },
      { label: 'Python', icon: FaPython },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { label: 'React', icon: FaReact },
      { label: 'Node.js', icon: SiFastapi },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Tools',
    items: [
      { label: 'Git', icon: FaCodeBranch },
      { label: 'GitHub', icon: FaGithub },
      { label: 'VS Code', icon: FaCode },
      { label: 'Vercel', icon: SiVercel },
    ],
  },
  {
    category: 'AI/ML',
    items: [
      { label: 'Azure AI Fundamentals', icon: SiOpenai },
      { label: 'Computer Vision', icon: SiOpenai },
      { label: 'NLP', icon: SiOpenai },
      { label: 'Chatbots', icon: SiOpenai },
    ],
  },
]

export const achievements = [
  'Completed Microsoft Azure AI Fundamentals (AI-900) certification.',
  'Completed Microsoft Azure Fundamentals (AZ-900) certification.',
  'Actively participating in hackathons and tech events.',
  'Exploring startup ecosystems and product development.',
  ' Continuous self-learning in web and AI.',
]

export const profiles = [
  { label: 'GitHub', href: 'https://github.com/rd-builds', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/riyaduggal/', icon: FaLinkedin },
  { label: 'Kaggle', href: 'https://www.kaggle.com/riyaduggal/code', icon: FaKaggle },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/rduggal09', icon: SiCodeforces },
]

export const statHighlights = [
  { label: 'Projects', value: '4+' },
  { label: 'AI + Web', value: 'Core Stack' },
  { label: 'Focus', value: 'Internship Ready' },
]

export const achievementIcons = [FaCertificate, FaAws, FaCodeBranch]