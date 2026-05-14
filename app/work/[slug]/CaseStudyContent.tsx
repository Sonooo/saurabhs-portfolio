"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Target, Lightbulb, CheckCircle2, Wrench } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { TechPill } from "@/components/ui/TechPill";
import type { Project } from "@/content/projects";

interface CaseStudyContentProps {
  project: Project;
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.company && (
            <span className="text-xs font-medium text-accent-cyan tracking-wide uppercase">
              {project.company}
            </span>
          )}
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mt-2 leading-tight">
            {project.title}
          </h1>
          <p className="text-text-muted text-base sm:text-lg mt-4 leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent-blue text-white hover:bg-accent-blue/90 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border text-text-primary hover:border-border-hover transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Source Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-surface p-5 text-center"
              >
                <div className="font-display font-bold text-2xl gradient-text">
                  {metric.value}
                </div>
                <div className="text-text-muted text-xs mt-1">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        )}

        {/* The Challenge */}
        {project.challenge && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-red/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-accent-red" />
              </div>
              <h2 className="font-display font-semibold text-xl text-text-primary">
                The Challenge
              </h2>
            </div>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed pl-13">
              {project.challenge}
            </p>
          </motion.section>
        )}

        {/* My Approach */}
        {project.approach && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-accent-blue" />
              </div>
              <h2 className="font-display font-semibold text-xl text-text-primary">
                My Approach
              </h2>
            </div>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed pl-13">
              {project.approach}
            </p>
          </motion.section>
        )}

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-accent-cyan" />
            </div>
            <h2 className="font-display font-semibold text-xl text-text-primary">
              Tech Stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 pl-13">
            {project.techStack.map((tech) => (
              <TechPill key={tech.name} name={tech.name} size="md" />
            ))}
          </div>
        </motion.section>

        {/* Key Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-accent-green" />
              </div>
              <h2 className="font-display font-semibold text-xl text-text-primary">
                Key Outcomes
              </h2>
            </div>
            <ul className="space-y-3 pl-13">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-xl border border-border bg-surface p-8 text-center"
        >
          <h3 className="font-display font-semibold text-xl text-text-primary">
            Want something similar?
          </h3>
          <p className="text-text-muted text-sm mt-2">
            I&apos;d love to help bring your project to life. Let&apos;s discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white font-medium text-sm hover:bg-accent-blue/90 transition-all duration-200 mt-6 shadow-lg shadow-accent-blue/20"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
