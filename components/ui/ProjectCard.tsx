"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechPill } from "./TechPill";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const maxTechDisplay = 3;
  const remainingTech = project.techStack.length - maxTechDisplay;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`} className="block group">
        <div className="relative rounded-xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-border-hover hover:bg-surface-hover card-glow gradient-border h-full flex flex-col">
          {/* Company badge */}
          {project.company && (
            <span className="text-xs font-medium text-accent-cyan tracking-wide uppercase mb-3">
              {project.company}
            </span>
          )}

          {/* Title */}
          <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary group-hover:text-accent-blue transition-colors flex items-center gap-2">
            {project.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
          </h3>

          {/* Summary */}
          <p className="text-text-muted text-sm leading-relaxed mt-2 flex-1">
            {project.summary}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.slice(0, maxTechDisplay).map((tech) => (
              <TechPill key={tech.name} name={tech.name} />
            ))}
            {remainingTech > 0 && (
              <TechPill name={`+${remainingTech} more`} />
            )}
          </div>

          {/* Metric callout */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
              <span className="text-accent-blue font-display font-bold text-sm">
                {project.metrics[0].value}
              </span>
              <span className="text-text-subtle text-xs">
                {project.metrics[0].label}
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
