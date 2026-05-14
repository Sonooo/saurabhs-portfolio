export const PERSONAL = {
  name: 'Saurabh Sanap',
  title: 'Full Stack Developer & AI Engineer',
  location: 'Pune, Maharashtra, India',
  email: 'sssanap218@gmail.com',
  phone: '+91 9579411158',
  linkedin: 'https://linkedin.com/in/saurabh-sanap',
  github: 'https://github.com/Sonooo',
  portfolio: 'https://mydigitalgarage.online',
  whatsapp: 'https://api.whatsapp.com/send/?phone=%2B919579411158&text=Hello+Saurabh',
  telegram: 'https://t.me/mostlyinsaneinsaan',
  instagram: 'https://www.instagram.com/mostlyinsaneinsaan',
  yearsExperience: 4,
  currentCompany: 'a Leading Tech Firm',
  previousCompany: 'a Global Enterprise Firm',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: PERSONAL.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: PERSONAL.github, icon: 'github' },
  { label: 'WhatsApp', href: PERSONAL.whatsapp, icon: 'whatsapp' },
  { label: 'Telegram', href: PERSONAL.telegram, icon: 'telegram' },
  { label: 'Instagram', href: PERSONAL.instagram, icon: 'instagram' },
] as const;

export const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '500+', label: 'Enterprise Users Served' },
  { value: '99.9%', label: 'Uptime Achieved' },
  { value: '6+', label: 'Production Projects' },
] as const;

export const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    color: '#3B82F6',
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    color: '#10B981',
    skills: ['Node.js', 'NestJS', 'Express', 'GraphQL', 'Microservices'],
  },
  {
    name: 'AI / ML',
    color: '#8B5CF6',
    skills: ['LangChain', 'LangGraph', 'LLM', 'Agentic AI', 'GenAI'],
  },
  {
    name: 'Cloud / DevOps',
    color: '#F59E0B',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Serverless', 'CI/CD'],
  },
  {
    name: 'Databases',
    color: '#EF4444',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis'],
  },
  {
    name: 'Testing',
    color: '#06B6D4',
    skills: ['Playwright', 'Jest'],
  },
] as const;

export const SERVICES = [
  {
    tier: 'Starter Project',
    description: 'Small web apps, landing pages, API integrations',
    timeline: '2–4 weeks',
    technologies: ['React/Next.js', 'Node.js', 'REST APIs'],
    cta: 'Get a Quote',
    icon: 'rocket',
  },
  {
    tier: 'Full-Stack Product Build',
    description: 'Complete web applications — frontend + backend + DB + deployment',
    timeline: '4–10 weeks',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL/MongoDB', 'AWS'],
    cta: 'Discuss Your Project',
    icon: 'layers',
    featured: true,
  },
  {
    tier: 'AI Integration & Automation',
    description: 'LLM integrations, agentic workflows, intelligent automation',
    timeline: '2–6 weeks',
    technologies: ['LangChain', 'LangGraph', 'OpenAI/Anthropic APIs', 'Custom Pipelines'],
    cta: 'Book a Discovery Call',
    icon: 'brain',
  },
] as const;

export const PROCESS_STEPS = [
  { number: 1, title: 'Discovery Call', description: 'We discuss your project goals, requirements, and timeline.' },
  { number: 2, title: 'Proposal & Scope', description: 'I deliver a detailed proposal with milestones and pricing.' },
  { number: 3, title: 'Design & Build', description: 'I build your product with regular check-ins and demos.' },
  { number: 4, title: 'Review & Iterate', description: 'We refine together until it meets your vision perfectly.' },
  { number: 5, title: 'Launch & Handoff', description: 'Deployment, documentation, and optional ongoing support.' },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! I work with clients across different time zones. I adapt my schedule for overlap hours and maintain clear async communication.',
  },
  {
    question: "What's your typical availability?",
    answer: "I'm available for both full-time projects and part-time/contract work. Current availability varies — reach out and I'll share my latest schedule.",
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes, I offer maintenance retainers after project completion. This includes bug fixes, feature updates, and performance monitoring.',
  },
  {
    question: 'Can you work within an existing codebase?',
    answer: 'Definitely. I have extensive experience joining existing projects, understanding legacy systems, and modernizing codebases incrementally.',
  },
] as const;

export const TIMELINE = [
  {
    date: 'Feb 2025 – Present',
    title: 'Software Developer & AI Engineer',
    company: 'Leading Tech Firm',
    description: 'Leading AI integration and full-stack development for enterprise clients. Building LangChain-powered agentic pipelines and modernizing legacy systems.',
    bullets: [
      'Led AI modernization of legacy monolith to microservices using LangChain & Next.js',
      'Built enterprise PM platform (Enterprise Pulse) serving 500+ users',
      'Designed cross-platform notification engine with 99.9% uptime',
    ],
  },
  {
    date: 'Jan 2022 – Feb 2025',
    title: 'Software Developer',
    company: 'Global Enterprise Firm',
    description: 'Full-stack development for enterprise healthcare and energy applications. React, GraphQL, AWS Lambda, and microservices architecture.',
    bullets: [
      'Developed and maintained enterprise-grade React applications',
      'Built serverless APIs with AWS Lambda and GraphQL',
      'Implemented CI/CD pipelines and automated testing suites',
    ],
  },
  {
    date: '2021',
    title: 'BCA — Bachelor of Computer Applications',
    company: 'Thorat College, Sangamner',
    description: 'Graduated with a focus on computer science fundamentals, data structures, and web development.',
    bullets: [],
  },
] as const;
