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
  roleWords: ['Web Developer', 'Full-Stack Learner', 'Problem Solver','AI-Explorer'],
  intro:
     "First-year CSE student passionate about building real-world tech products, exploring web development and AI integration with a focus on impactful solutions.",
  email: 'riyaduggal09@gmail.com',
  resumeUrl: '/resume.pdf',
  summary:
    'I am a student and AI/Web developer focused on building useful products with clean interfaces, dependable backends, and intelligent automation. I enjoy turning rough ideas into performant applications that are easy to use, easy to maintain, and ready to show in internship or job interviews.',
  profileImage:
    "/profile.jpeg",
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
    title: 'AI Study Assistant',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    description:
      'Transforms long study material into concise notes, summaries, and quiz prompts so students can revise faster with less context switching.',
    stack: ['React', 'OpenAI API', 'FastAPI', 'MongoDB'],
    github: 'https://github.com/',
    demo: 'https://vercel.com/',
  },
  {
    title: 'Smart Portfolio Builder',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description:
      'A guided portfolio generator that structures projects, skills, achievements, and resume links into a fast responsive web presence.',
    stack: ['Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/',
    demo: 'https://vercel.com/',
  },
  {
    title: 'ML Model Dashboard',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description:
      'A monitoring interface for model metrics, experiment notes, and dataset snapshots that helps teams compare runs clearly.',
    stack: ['Python', 'TensorFlow', 'React', 'Charts'],
    github: 'https://github.com/',
    demo: 'https://vercel.com/',
  },
  {
    title: 'Campus Event Hub',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    description:
      'Centralizes registrations, event updates, and volunteer coordination into a simple mobile-first experience for student communities.',
    stack: ['React', 'Node.js', 'Firebase', 'Tailwind'],
    github: 'https://github.com/',
    demo: 'https://vercel.com/',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: [
      { label: 'Python', icon: FaPython },
      { label: 'JavaScript', icon: SiJavascript },
      { label: 'C/C++', icon: FaCode },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { label: 'React', icon: FaReact },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'FastAPI', icon: SiFastapi },
    ],
  },
  {
    category: 'Tools',
    items: [
      { label: 'GitHub', icon: FaGithub },
      { label: 'Vercel', icon: SiVercel },
      { label: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    category: 'AI/ML',
    items: [
      { label: 'OpenAI', icon: SiOpenai },
      { label: 'TensorFlow', icon: SiTensorflow },
      { label: 'PyTorch', icon: SiPytorch },
    ],
  },
]

export const achievements = [
  'Microsoft Azure AI Fundamentals certification preparation and applied AI projects.',
  'Microsoft Azure Fundamentals AZ-900 certification preparation and cloud fundamentals.',
  'Built and presented AI/Web projects at college events and technical showcases.',
  'Active practice in competitive programming and data science problem solving.',
]

export const profiles = [
  { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedin },
  { label: 'Kaggle', href: 'https://kaggle.com/', icon: FaKaggle },
  { label: 'Codeforces', href: 'https://codeforces.com/', icon: SiCodeforces },
]

export const statHighlights = [
  { label: 'Projects', value: '4+' },
  { label: 'AI + Web', value: 'Core Stack' },
  { label: 'Focus', value: 'Internship Ready' },
]

export const achievementIcons = [FaCertificate, FaAws, FaCodeBranch]
