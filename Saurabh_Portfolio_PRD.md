# Product Requirements Document
## Portfolio Website Modernization — Saurabh Sanap
**Version:** 1.0  
**Date:** May 2026  
**Owner:** Saurabh Sanap  
**Stack:** Next.js 14 (App Router) · Tailwind CSS · TypeScript · Framer Motion  
**Domain:** mydigitalgarage.online

---

## 1. Executive Summary

This PRD defines the full redesign of Saurabh Sanap's personal portfolio into a **dual-purpose digital brand hub** — simultaneously attracting senior engineering roles (Infosys/TCS-tier and above) and winning freelance/contract engagements across full-stack, AI integration, and cloud-native projects. The site must stand apart from template-clone portfolios and communicate *seniority*, *craft*, and *commercial value* within the first 5 seconds of a visit.

---

## 2. Goals & Success Metrics

| Goal | Success Metric |
|------|---------------|
| Employer conversions | 3+ recruiter/HM outreach per month via portfolio |
| Freelance inquiries | 2+ qualified project leads per month via contact form |
| Brand impression | Avg. session duration > 2 min; bounce rate < 40% |
| Performance | Lighthouse score ≥ 95 (Performance, Accessibility, SEO) |
| SEO discoverability | Rank on page 1 for "Full Stack AI Engineer Pune" |

---

## 3. Target Audiences

### 3A — Employers / Hiring Managers
- Senior engineering roles at product companies, scale-ups, and MNCs
- Tech leads evaluating AI/LLM integration expertise
- Recruiting teams at FAANG-adjacent Indian tech hubs
- **Key concern:** Can this person ship production-grade systems at scale?

### 3B — Freelance Clients
- Startups needing a full MVP (frontend + backend + infra)
- Businesses seeking AI/automation integrations
- E-commerce brands needing custom Shopify/Next.js builds
- **Key concern:** Is this person reliable, communicative, and worth the budget?

---

## 4. Information Architecture

```
mydigitalgarage.online
│
├── / (Home — Hero + Value Prop + CTA)
├── /about (Bio + Philosophy + Stack Overview)
├── /work (Project Showcase — filterable)
│   └── /work/[slug] (Individual Case Study)
├── /services (Freelance Services + Packages)
├── /skills (Interactive Tech Stack)
└── /contact (Dual CTA — Hire Me / Work With Me)
```

**Navigation behavior:** Sticky top nav with blur backdrop; collapses to hamburger on mobile; active section highlight via IntersectionObserver for single-page feel.

---

## 5. Page-by-Page Specifications

---

### 5.1 Home — Hero Section

**Goal:** Instant value communication. Visitor understands who Saurabh is, what he does, and what to do next — in under 5 seconds.

**Layout:**
- Full-viewport height hero
- Left: Headline stack + subtitle + dual CTA buttons
- Right: Animated visual (code terminal / 3D tech globe / abstract geometry — NOT a stock photo)
- Below fold: Scrolling ticker of tech logos (trust signal)

**Copy:**
```
[Tag] → Full Stack Developer & AI Engineer
[H1]  → I Build Intelligent,
         Scalable Web Products
[Sub] → 4+ years turning complex requirements into
         clean code — from React frontends to
         LangChain AI pipelines and cloud-native backends.
[CTA1] → View My Work  (primary, filled)
[CTA2] → Let's Work Together  (secondary, outlined)
```

**Design Notes:**
- Subtle animated gradient mesh background (dark navy/charcoal base)
- Typewriter/reveal animation on H1
- Floating badge: "Open to Freelance Projects" (green dot, pulsing)
- Floating badge: "Available for Senior Roles" (blue)

---

### 5.2 Home — Social Proof Strip

Immediately below hero. Horizontal strip with:
- "Currently at Infosys" (with logo)
- "Previously at TCS" (with logo)
- "4+ Years Experience"
- "500+ Enterprise Users Served"
- "99.9% Uptime Achieved"
- GitHub link with star/commit count (live via GitHub API)

---

### 5.3 Home — What I Do (Services Teaser)

3-column card grid, each with an icon, bold headline, and 2-line description. Links to `/services`.

| Card | Headline | Description |
|------|----------|-------------|
| 🧱 | Full-Stack Development | End-to-end web apps — React/Next.js frontends, Node/NestJS backends, PostgreSQL & MongoDB |
| 🤖 | AI & Automation Engineering | LangChain agents, LLM integrations, agentic pipelines, and intelligent workflow automation |
| ☁️ | Cloud & DevOps | AWS serverless architectures, Docker/Kubernetes deployments, CI/CD pipelines |

---

### 5.4 Home — Featured Projects (3 cards)

Pull the top 3 projects. Each card:
- Project name + company logo/tag
- 2-line description
- Tech pill badges (React, NestJS, AWS, etc.)
- "View Case Study" CTA
- Subtle hover: card lifts + border glows

**Featured Projects:**
1. GE Vernova — Pulse (Enterprise PM Platform)
2. Enterprise AI Modernisation (LangChain + Next.js)
3. GE Healthcare CDX CES (Cross-platform notification engine)

---

### 5.5 Home — Skills Snapshot

**NOT a boring list.** Implement as an interactive radial/bubble chart or animated grid where skill categories pulse or grow on hover.

**Categories:**
- Frontend (React, Next.js, Angular, TypeScript, Tailwind)
- Backend (Node.js, NestJS, Express, GraphQL, Microservices)
- AI/ML (LangChain, LangGraph, LLM, Agentic AI, GenAI)
- Cloud/DevOps (AWS, Docker, Kubernetes, Serverless, CI/CD)
- Databases (PostgreSQL, MongoDB, Supabase, Redis)
- Testing (Playwright, Jest)

---

### 5.6 Home — Testimonials / Trust (Placeholder-Ready)

Carousel or 2-col grid of testimonials. If none available yet, include placeholder slots styled to signal "Reviews loading — contact for references." Design as if testimonials exist so it's production-ready from day one.

---

### 5.7 Home — CTA Banner

Full-width section near bottom of home:
```
[H2] Have a project in mind?
[Sub] Whether you need a product built from scratch, an AI integration,
       or a cloud migration — let's talk.
[CTA] → Start a Conversation
```
Background: animated gradient or geometric pattern. High contrast.

---

### 5.8 /about Page

**Sections:**

**A. Personal Intro**
- Professional photo (placeholder frame if not available)
- 3-paragraph narrative bio:
  - Who he is and where he's from (Pune, Maharashtra)
  - Career arc (TCS → Infosys, enterprise + AI)
  - What drives him (love of clean systems, AI exploration, open source)
- Languages: English, Hindi, Marathi
- Interests badge row: 🏏 Cricket · 🎵 Music Production · 🎱 Pool/Billiards · 🔧 Open Source

**B. Career Timeline**
Vertical scrolling timeline component:
```
Feb 2025 – Present  →  Infosys | Software Developer & AI Engineer
Jan 2022 – Feb 2025  →  TCS | Software Developer
2021  →  BCA — Thorat College, Sangamner
```
Each node expands on click/hover to show key bullet points.

**C. Philosophy / Approach**
3 short principles Saurabh works by — to humanize and differentiate:
- "Ship fast, iterate faster"
- "AI should augment, not replace good engineering"
- "Clean code is a form of respect — for your team and your future self"

**D. Certifications**
Badge-style cards for each cert with issuer name and skill area.

---

### 5.9 /work Page — Project Showcase

**Filter Bar:** All · Full-Stack · AI/ML · Cloud · E-commerce · Enterprise

**Project Cards (all 6 from resume + room for more):**

| Project | Tags | Highlight Stat |
|---------|------|----------------|
| GE Vernova Pulse | Enterprise, React, GraphQL, AWS | 500+ users |
| AI Legacy Modernisation | AI, LangChain, NestJS, K8s | Monolith → microservices |
| GE Healthcare CDX CES | Enterprise, AWS Lambda, GraphQL | 99.9% uptime |
| Full-Stack E-commerce | Full-Stack, Next.js, MongoDB, Braintree | End-to-end payments |
| Enterprise API Gateway | Backend, NestJS, Docker, JWT | Secure proxy at scale |
| Text Processing Utility | Frontend, React, Next.js | Open source |

**Card anatomy:**
- Banner color/image relevant to domain
- Company badge (if applicable)
- Title + 1-line summary
- 3 tech pill badges (overflow: "+4 more")
- Key metric callout (e.g., "500+ enterprise users")
- "View Case Study →" hover CTA

---

### 5.10 /work/[slug] — Case Study Page

Each project gets its own deep-dive page:

```
[Hero] Project name + company + role
[Section 1] The Challenge
[Section 2] My Approach / Architecture Decisions
[Section 3] Tech Stack Used (visual pill grid)
[Section 4] Key Outcomes / Metrics
[Section 5] Lessons Learned (optional)
[CTA] → Want something similar? Let's talk
```

Use code snippet blocks, architecture diagrams (Mermaid or SVG), and metric callout boxes for visual richness.

---

### 5.11 /services Page (Freelance-Focused)

**Goal:** Convert freelance visitors into leads. Structured like a service offering page.

**Service Tiers:**

#### Tier 1 — Starter Project
- Small web apps, landing pages, API integrations
- Timeline: 2–4 weeks
- Technologies: React/Next.js, Node.js, REST APIs
- CTA: "Get a Quote"

#### Tier 2 — Full-Stack Product Build
- Complete web applications (frontend + backend + DB + deployment)
- Timeline: 4–10 weeks
- Technologies: Full stack (Next.js, NestJS, PostgreSQL/MongoDB, AWS)
- CTA: "Discuss Your Project"

#### Tier 3 — AI Integration & Automation
- LLM integrations, agentic workflows, intelligent automation
- Timeline: 2–6 weeks depending on scope
- Technologies: LangChain, LangGraph, OpenAI/Anthropic APIs, custom pipelines
- CTA: "Book a Discovery Call"

**Process section:**
Numbered steps: 1. Discovery Call → 2. Proposal & Scope → 3. Design & Build → 4. Review & Iterate → 5. Launch & Handoff

**FAQ Accordion:**
- Do you work with international clients?
- What's your typical availability?
- Do you offer ongoing maintenance?
- Can you work within an existing codebase?

---

### 5.12 /contact Page

**Dual intent design** — clearly split for employers vs. freelance clients.

**Left Panel — Employers:**
```
Looking to hire?
[Form: Name, Company, Role, Message]
[Button: Send Inquiry]
```

**Right Panel — Freelance Clients:**
```
Got a project?
[Form: Name, Email, Project Type (dropdown), Budget Range, Timeline, Description]
[Button: Start the Conversation]
```

**Below form:**
- Email: sssanap218@gmail.com (clickable)
- LinkedIn: linkedin.com/in/saurabh-sanap (icon + link)
- GitHub: github.com/sonooo
- Location: Pune, Maharashtra, India 🇮🇳
- Response time: "Typically responds within 24 hours"

---

## 6. Design System

### 6.1 Visual Identity

**Aesthetic Direction:** Dark-mode premium tech — think Linear.app meets a senior engineer's personal brand. Confident, clean, precise. Not flashy. Not generic. The visual language says *"this person writes production code."*

**Primary Palette:**
```
Background:    #0A0A0F  (near-black with cool undertone)
Surface:       #111118  (card/section backgrounds)
Border:        #1E1E2E  (subtle dividers)
Accent Blue:   #3B82F6  (primary CTAs, highlights)
Accent Cyan:   #06B6D4  (AI/tech accents, hover states)
Accent Green:  #10B981  (success, "available" badge)
Text Primary:  #F1F5F9
Text Muted:    #64748B
```

**Typography:**
```
Display/H1:  "Syne" — Bold, geometric, memorable
H2–H3:       "Syne" — Medium weight
Body:        "DM Sans" — Highly readable, modern, warm
Code:        "JetBrains Mono" — Authentic dev feel
```
Load via Google Fonts in Next.js `_document` or `next/font`.

**Border Radius:** `rounded-xl` (12px) for cards, `rounded-full` for badges/pills

**Shadows:** Custom layered glow shadows for cards on hover:
```css
box-shadow: 0 0 0 1px rgba(59,130,246,0.1),
            0 4px 24px rgba(59,130,246,0.06);
```

---

### 6.2 Component Library

| Component | Description |
|-----------|-------------|
| `<TechPill>` | Rounded badge with icon + label, color-coded by category |
| `<ProjectCard>` | Elevated card with hover lift, glowing border on focus |
| `<TimelineNode>` | Expandable career/education timeline item |
| `<StatBadge>` | Metric callout — number + label, used in hero and cards |
| `<ServiceCard>` | Tier card with pricing context and CTA |
| `<SectionHeader>` | Eyebrow tag + H2 + optional subtitle, consistent layout |
| `<GradientText>` | Utility for blue-to-cyan gradient text on key words |
| `<AnimatedCounter>` | Number counts up on scroll into view |
| `<ContactForm>` | Form with floating labels, validation, success state |

---

### 6.3 Motion & Animation

All animations via **Framer Motion**.

| Animation | Trigger | Implementation |
|-----------|---------|---------------|
| Hero headline reveal | Page load | Staggered word/character reveal |
| Section fade-up | Scroll into view | `useInView` + spring easing |
| Card hover lift | Mouse enter | `whileHover: { y: -4, scale: 1.01 }` |
| Tech pill scatter | Section mount | Staggered `opacity` + `y` |
| Counter increment | Scroll into view | `animate()` from 0 to value |
| Page transitions | Route change | Fade + slight Y offset |
| Cursor glow | Mouse move (desktop) | Custom cursor with lag effect |

**Performance rule:** All animations must be GPU-composited only (`transform`, `opacity`). No layout-triggering properties.

---

## 7. Technical Architecture

### 7.1 Stack Decisions

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14 (App Router) | SSG for speed, RSC for performance, SEO-friendly |
| Styling | Tailwind CSS v3 | Utility-first, consistent, easy maintenance |
| Animations | Framer Motion | Best-in-class React animation library |
| Language | TypeScript | Type safety across all components |
| Icons | Lucide React + custom SVGs | Lightweight, consistent icon set |
| Fonts | next/font (Google Fonts) | Zero layout shift, optimized loading |
| Contact form | React Hook Form + Zod | Validation without heavy dependencies |
| Form backend | Resend API or Formspree | Serverless email delivery |
| Deployment | Vercel | Saurabh already uses Vercel at Infosys; zero-config, edge network |
| Analytics | Vercel Analytics or Plausible | Privacy-friendly, no cookie banners needed |

### 7.2 File Structure

```
/
├── app/
│   ├── layout.tsx          ← Global layout, fonts, metadata
│   ├── page.tsx            ← Home page
│   ├── about/page.tsx
│   ├── work/
│   │   ├── page.tsx        ← Project showcase
│   │   └── [slug]/page.tsx ← Individual case study
│   ├── services/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                 ← Primitives: Button, Badge, Card, Input
│   ├── sections/           ← Page sections: Hero, About, Projects...
│   └── layout/             ← Navbar, Footer, PageWrapper
├── content/
│   └── projects.ts         ← Single source of truth for all project data
├── lib/
│   ├── utils.ts            ← cn() helper + misc utilities
│   └── constants.ts        ← Nav links, social links, personal info
├── public/
│   ├── images/             ← Photos, project screenshots
│   ├── icons/              ← Tech stack SVG icons
│   └── resume.pdf          ← Downloadable resume
└── styles/
    └── globals.css         ← Tailwind base + custom CSS variables
```

### 7.3 Data Model — Projects

```typescript
// content/projects.ts
export interface Project {
  slug: string
  title: string
  company?: string
  companyLogo?: string
  category: ('fullstack' | 'ai' | 'cloud' | 'ecommerce' | 'enterprise')[]
  summary: string
  description: string
  techStack: TechItem[]
  metrics?: { label: string; value: string }[]
  featured: boolean
  challenge?: string
  approach?: string
  outcomes?: string[]
  liveUrl?: string
  githubUrl?: string
  coverImage?: string
}
```

### 7.4 SEO Configuration

Every page gets structured metadata via Next.js `generateMetadata()`:

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Saurabh Sanap — Full Stack & AI Engineer',
    template: '%s | Saurabh Sanap'
  },
  description: 'Full Stack Developer & AI Engineer with 4+ years building scalable web products. Available for senior roles and freelance projects in React, Next.js, Node.js, LangChain, and AWS.',
  keywords: ['Full Stack Developer Pune', 'AI Engineer India', 'React Developer', 'Next.js', 'LangChain developer', 'NestJS', 'freelance developer India'],
  openGraph: { /* OG image, title, description */ },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}
```

**Structured Data (JSON-LD):**
- `Person` schema on `/about`
- `WebSite` schema on home
- `Service` schema on `/services`

---

## 8. Content Requirements

### 8.1 Assets to Reuse from Current Site

- Professional headshot / avatar image
- Company logos: Infosys, TCS, GE Vernova, GE Healthcare
- Tech stack icons (sourced from devicons.dev or simple-icons — all free/open source)
- Any project screenshots or mockups

### 8.2 New Content to Create

| Asset | Notes |
|-------|-------|
| OG image (1200×630) | Dark branded card with name, title, and tagline |
| Favicon | Simple "SS" monogram or stylized icon |
| Resume PDF | Updated version for download — link in nav |
| Project screenshots | At minimum a mock/placeholder per project |
| Case study copy | 200–400 words per featured project |
| Services copy | Tier descriptions, FAQ answers |

### 8.3 Profile Data Constants

```typescript
// lib/constants.ts — Single source of truth
export const PERSONAL = {
  name: 'Saurabh Sanap',
  title: 'Full Stack Developer & AI Engineer',
  location: 'Pune, Maharashtra, India',
  email: 'sssanap218@gmail.com',
  phone: '+91 9579411158',
  linkedin: 'https://linkedin.com/in/saurabh-sanap',
  github: 'https://github.com/sonooo',
  portfolio: 'https://mydigitalgarage.online',
  yearsExperience: 4,
  currentCompany: 'Infosys',
}
```

---

## 9. Performance Requirements

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| Bundle size (JS) | < 200KB initial |
| Image formats | WebP/AVIF via next/image |

**Implementation checklist:**
- [ ] All images via `next/image` with explicit `width`/`height`
- [ ] Fonts loaded via `next/font` (eliminates FOUT)
- [ ] Dynamic imports for heavy components (Framer Motion sections)
- [ ] Static generation (`generateStaticParams`) for all case study pages
- [ ] No unused Tailwind classes (PurgeCSS built-in)
- [ ] Preconnect hints for Google Fonts CDN

---

## 10. Accessibility Requirements

- WCAG 2.1 AA minimum
- All interactive elements keyboard-navigable (Tab/Enter/Escape)
- Focus indicators visible and high-contrast
- All images have descriptive `alt` text
- Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text
- Animated elements respect `prefers-reduced-motion`
- Form inputs have proper `<label>` associations
- ARIA landmarks on all major sections

---

## 11. Mobile Responsiveness

**Breakpoints (Tailwind defaults):**
- `sm`: 640px — Tablet portrait
- `md`: 768px — Tablet landscape
- `lg`: 1024px — Desktop
- `xl`: 1280px — Wide desktop

**Mobile-specific behaviors:**
- Hamburger menu with slide-in drawer
- Hero: stacked layout (visual below text)
- Project grid: 1-column on mobile, 2 on tablet, 3 on desktop
- Timeline: full-width, left-aligned
- Services: stacked cards, no side-by-side comparison
- Contact forms: full-width, stacked panels
- Tech pills: horizontal scroll (no wrap) on mobile

---

## 12. Phased Delivery Plan

### Phase 1 — Foundation (Week 1–2)
- [ ] Next.js 14 project setup with Tailwind + TypeScript + Framer Motion
- [ ] Design system: CSS variables, typography, color tokens
- [ ] Global layout: Navbar + Footer + page wrapper
- [ ] Home page: Hero + social proof strip + What I Do
- [ ] `/contact` page: both form variants + contact info

### Phase 2 — Core Pages (Week 3–4)
- [ ] `/about` page: Bio + timeline + philosophy + certs
- [ ] `/work` page: Project grid + filter bar (all 6 projects)
- [ ] `/work/[slug]` case study template: 3 full case studies written
- [ ] Home: Featured projects section + skills snapshot

### Phase 3 — Freelance Layer (Week 5)
- [ ] `/services` page: 3 tiers + process + FAQ
- [ ] Home: CTA banner + testimonial placeholder section
- [ ] Form backend: Resend/Formspree integration
- [ ] Resume PDF download in nav

### Phase 4 — Polish & Launch (Week 6)
- [ ] SEO metadata + JSON-LD structured data
- [ ] OG images via Next.js `opengraph-image`
- [ ] Performance audit + Lighthouse ≥ 95
- [ ] Accessibility audit
- [ ] Analytics integration
- [ ] Domain verification + Vercel deployment
- [ ] Cross-browser QA (Chrome, Firefox, Safari, Edge)

---

## 13. Future Enhancements (Post-Launch)

| Feature | Value |
|---------|-------|
| Blog / Writing section | SEO long-tail content on AI, Next.js, cloud architecture |
| GitHub contributions live widget | Shows active open-source involvement |
| Dark/Light mode toggle | Wider audience accessibility |
| Project demo embed | Video walkthroughs for key projects |
| Calendly integration | One-click booking for discovery calls |
| Testimonials CMS | Easy addition of client/colleague reviews |
| i18n (English + Hindi) | Reach Indian SMB market for freelance |

---

## 14. Competitive Differentiation

Most developer portfolios fail at one or more of these. This site must excel at all:

| Differentiator | Implementation |
|----------------|---------------|
| **Dual audience** | Clear visual and copy split for employers vs clients |
| **AI positioning** | AI/LLM skills front and center — not buried in a skills list |
| **Proof over claims** | Metrics (500+ users, 99.9% uptime, 30% perf gain) on every project |
| **Commercial framing** | Services page reads like a product page, not a resume |
| **Personality** | About page, interests, philosophy — people hire people |
| **Performance** | The portfolio itself demonstrates engineering quality |
| **SEO** | Rank for "Full Stack AI Engineer Pune" and related long-tail queries |

---

*PRD authored based on resume analysis of Saurabh Sanap (4+ years, Infosys/TCS, Full Stack & AI Engineer). Ready to hand off to a developer or begin implementation directly in Next.js.*
