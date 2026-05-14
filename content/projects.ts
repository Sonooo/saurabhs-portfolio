export interface TechItem {
  name: string;
  icon?: string;
}

export interface Project {
  slug: string;
  title: string;
  company?: string;
  category: ('fullstack' | 'ai' | 'cloud' | 'ecommerce' | 'enterprise')[];
  summary: string;
  description: string;
  techStack: TechItem[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
  challenge?: string;
  approach?: string;
  outcomes?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'enterprise-pulse',
    title: 'Enterprise Pulse',
    company: 'Enterprise Client',
    category: ['enterprise', 'fullstack', 'cloud'],
    summary: 'Enterprise project management platform serving 500+ users across a global energy division.',
    description: 'A comprehensive enterprise PM platform built to streamline project tracking, resource allocation, and reporting for a global energy operations team.',
    techStack: [
      { name: 'React' },
      { name: 'GraphQL' },
      { name: 'AWS Lambda' },
      { name: 'PostgreSQL' },
      { name: 'Node.js' },
      { name: 'TypeScript' },
    ],
    metrics: [
      { label: 'Active Users', value: '500+' },
      { label: 'Data Processing', value: '10K+ records/day' },
      { label: 'Performance Gain', value: '30%' },
    ],
    featured: true,
    challenge: 'The client needed a unified platform to replace fragmented spreadsheet-based project tracking across their energy division. The existing workflow caused data silos, inconsistent reporting, and delayed decision-making across 500+ team members.',
    approach: 'Built a React-based SPA with GraphQL for efficient data fetching, backed by AWS Lambda serverless functions for cost-effective scaling. Implemented real-time data synchronization, role-based access control, and customizable dashboards with drill-down reporting capabilities.',
    outcomes: [
      'Consolidated project tracking for 500+ enterprise users into a single platform',
      'Reduced report generation time by 30% through optimized GraphQL queries',
      'Achieved sub-200ms API response times with AWS Lambda edge functions',
      'Implemented automated data pipelines processing 10K+ records daily',
    ],
  },
  {
    slug: 'ai-legacy-modernisation',
    title: 'Enterprise AI Modernisation',
    company: 'Enterprise Client',
    category: ['ai', 'fullstack', 'enterprise'],
    summary: 'Modernized a legacy monolith into AI-powered microservices using LangChain and Next.js.',
    description: 'Led the technical transformation of a legacy enterprise application into a modern, AI-augmented microservices architecture, enabling intelligent automation and scalable processing.',
    techStack: [
      { name: 'LangChain' },
      { name: 'Next.js' },
      { name: 'NestJS' },
      { name: 'Kubernetes' },
      { name: 'Docker' },
      { name: 'TypeScript' },
    ],
    metrics: [
      { label: 'Architecture', value: 'Monolith → Microservices' },
      { label: 'Processing Speed', value: '5x faster' },
      { label: 'Manual Work Reduced', value: '60%' },
    ],
    featured: true,
    challenge: 'A critical enterprise application was running on a decade-old monolithic architecture, making it impossible to scale, difficult to maintain, and unable to leverage modern AI capabilities for automated processing.',
    approach: 'Designed a phased migration strategy, decomposing the monolith into domain-driven microservices. Integrated LangChain for intelligent document processing and automated decision-making. Built a modern Next.js frontend with NestJS backend services orchestrated via Kubernetes.',
    outcomes: [
      'Successfully migrated monolith to 8+ independent microservices',
      'Achieved 5x improvement in data processing speed',
      'Reduced manual processing workload by 60% through AI automation',
      'Established CI/CD pipelines for zero-downtime deployments on Kubernetes',
    ],
  },
  {
    slug: 'healthcare-cdx-ces',
    title: 'Healthcare CDX CES',
    company: 'Healthcare Enterprise',
    category: ['enterprise', 'cloud', 'fullstack'],
    summary: 'Cross-platform notification engine achieving 99.9% uptime for healthcare enterprise communications.',
    description: 'Built a cross-platform communication and notification engine for a leading clinical data exchange platform, ensuring reliable message delivery across multiple channels.',
    techStack: [
      { name: 'AWS Lambda' },
      { name: 'GraphQL' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'DynamoDB' },
      { name: 'SNS/SQS' },
    ],
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Messages/Day', value: '50K+' },
      { label: 'Delivery Rate', value: '99.7%' },
    ],
    featured: true,
    challenge: 'The clinical data exchange platform lacked a reliable, unified notification system. Healthcare professionals missed critical updates, and the existing email-only approach had low engagement rates and no delivery guarantees.',
    approach: 'Architected a multi-channel notification engine using AWS SNS/SQS for reliable message queuing, Lambda functions for processing, and a React-based preference center. Implemented exponential retry logic, dead letter queues, and comprehensive delivery tracking.',
    outcomes: [
      'Achieved 99.9% system uptime with zero unplanned outages',
      'Processing 50K+ notifications daily across email, SMS, and push channels',
      'Improved notification delivery rate to 99.7% with retry mechanisms',
      'Reduced notification latency from minutes to under 3 seconds',
    ],
  },
  {
    slug: 'fullstack-ecommerce',
    title: 'Full-Stack E-commerce Platform',
    company: 'Personal Project',
    category: ['fullstack', 'ecommerce'],
    summary: 'End-to-end e-commerce platform with payment processing, inventory management, and admin dashboard.',
    description: 'A complete e-commerce solution featuring product catalog, cart management, secure payment processing via Braintree, and a comprehensive admin dashboard for inventory and order management.',
    techStack: [
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'Braintree' },
      { name: 'Express' },
      { name: 'React' },
    ],
    metrics: [
      { label: 'Features', value: 'Full CRUD' },
      { label: 'Payments', value: 'Braintree Integration' },
      { label: 'Auth', value: 'JWT + Refresh Tokens' },
    ],
    featured: false,
    challenge: 'Building a production-grade e-commerce platform from scratch that handles the full purchase lifecycle — from product browsing through secure payment to order fulfillment — with a focus on performance and security.',
    approach: 'Designed a REST API with Express/Node.js and MongoDB for the backend, implementing JWT authentication with refresh tokens. Built the frontend with React and integrated Braintree for PCI-compliant payment processing. Added admin dashboard with role-based access.',
    outcomes: [
      'Implemented end-to-end payment flow with Braintree gateway',
      'Built comprehensive admin panel for product, order, and user management',
      'Achieved secure authentication with JWT + refresh token rotation',
      'Optimized product listing with pagination, filtering, and search',
    ],
    githubUrl: 'https://github.com/Sonooo/Ecommerce-App-API',
    liveUrl: 'https://ecommerce.mydigitalgarage.online/',
  },
  {
    slug: 'enterprise-api-gateway',
    title: 'Enterprise API Gateway',
    company: 'Internal Tool',
    category: ['fullstack', 'cloud', 'enterprise'],
    summary: 'Secure API proxy layer handling authentication, rate limiting, and request routing at scale.',
    description: 'A NestJS-based API gateway providing centralized authentication, rate limiting, request transformation, and intelligent routing for a microservices ecosystem.',
    techStack: [
      { name: 'NestJS' },
      { name: 'Docker' },
      { name: 'JWT' },
      { name: 'Redis' },
      { name: 'TypeScript' },
      { name: 'Nginx' },
    ],
    metrics: [
      { label: 'Throughput', value: '10K req/sec' },
      { label: 'Auth', value: 'JWT + RBAC' },
      { label: 'Caching', value: 'Redis Layer' },
    ],
    featured: false,
    challenge: 'As the microservices ecosystem grew, each service independently handled authentication, rate limiting, and CORS — creating security inconsistencies and duplicated logic across services.',
    approach: 'Built a centralized API gateway with NestJS that acts as a single entry point. Implemented JWT validation, role-based access control, Redis-backed rate limiting, and request/response transformation. Dockerized for easy deployment.',
    outcomes: [
      'Centralized authentication and authorization for all microservices',
      'Handling 10K+ requests per second with Redis-backed rate limiting',
      'Reduced duplicate auth code across 8+ services',
      'Implemented comprehensive request logging and monitoring',
    ],
  },

];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category.includes(category as Project['category'][number]));
}
