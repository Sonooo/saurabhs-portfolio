"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineNode } from "@/components/ui/TimelineNode";
import { PERSONAL, TIMELINE } from "@/lib/constants";
import { MapPin, Mail, Gamepad2, Music, Target, Wrench } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const interests = [
  { icon: <Gamepad2 className="w-4 h-4" />, label: "Cricket & Pool" },
  { icon: <Music className="w-4 h-4" />, label: "Music Production" },
  { icon: <Target className="w-4 h-4" />, label: "Billiards" },
  { icon: <Wrench className="w-4 h-4" />, label: "Open Source" },
];

const principles = [
  {
    emoji: "🚀",
    title: "Ship fast, iterate faster",
    description: "Progress beats perfection. Get it in front of users, learn, and improve.",
  },
  {
    emoji: "🤖",
    title: "AI should augment, not replace good engineering",
    description: "The best AI products are built on solid engineering foundations.",
  },
  {
    emoji: "✨",
    title: "Clean code is a form of respect",
    description: "Respect for your team, your future self, and anyone who reads your code.",
  },
];

export function AboutContent() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <SectionHeader
          eyebrow="About Me"
          title="Building the Future, One Line at a Time"
          align="left"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 grid sm:grid-cols-[1fr_auto] gap-8 items-start"
        >
          <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
            <p>
              <span className="text-text-primary font-semibold">Hello, I&apos;m Saurabh!</span>{" "}
              A Full Stack Developer & AI Engineer based in Pune, Maharashtra. I specialize in building
              intelligent, scalable web products that solve real business problems.
            </p>
            <p>
              My career journey started by building enterprise-grade applications for the healthcare and energy sectors. 
              Today, I lead AI integration initiatives and architect full-stack solutions that serve hundreds of
              enterprise users daily.
            </p>
            <p>
              What drives me is the intersection of clean engineering and emerging AI capabilities.
              I believe the best products come from engineers who understand both the craft of writing
              maintainable code and the potential of modern AI to transform workflows.
            </p>
          </div>

          {/* Quick info card */}
          <div className="rounded-xl border border-border bg-surface p-5 space-y-3 min-w-[200px]">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <MapPin className="w-4 h-4 text-accent-blue" />
              {PERSONAL.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Mail className="w-4 h-4 text-accent-blue" />
              <a href={`mailto:${PERSONAL.email}`} className="hover:text-accent-blue transition-colors">
                {PERSONAL.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <GithubIcon className="w-4 h-4 text-accent-blue" />
              <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="hover:text-accent-blue transition-colors">
                github.com/Sonooo
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <LinkedinIcon className="w-4 h-4 text-accent-blue" />
              <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-blue transition-colors">
                in/saurabh-sanap
              </a>
            </div>
            <div className="mt-2 pt-2 border-t border-border text-xs text-text-subtle">
              🌐 English · Hindi · Marathi
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {interests.map((interest) => (
            <span
              key={interest.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border text-text-muted"
            >
              {interest.icon}
              {interest.label}
            </span>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="section-divider my-16" />

        {/* Career Timeline */}
        <SectionHeader
          eyebrow="Career"
          title="My Journey"
          align="left"
        />

        <div className="mt-10">
          {TIMELINE.map((item, i) => (
            <TimelineNode
              key={i}
              date={item.date}
              title={item.title}
              company={item.company}
              description={item.description}
              bullets={item.bullets}
              isLast={i === TIMELINE.length - 1}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider my-16" />

        {/* Philosophy */}
        <SectionHeader
          eyebrow="Philosophy"
          title="How I Work"
          align="left"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <span className="text-2xl">{principle.emoji}</span>
              <h3 className="font-display font-semibold text-sm text-text-primary mt-3">
                {principle.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed mt-2">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
