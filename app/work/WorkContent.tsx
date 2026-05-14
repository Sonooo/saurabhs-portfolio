"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "AI / ML", value: "ai" },
  { label: "Cloud", value: "cloud" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Enterprise", value: "enterprise" },
];

export function WorkContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) =>
          p.category.includes(activeFilter as (typeof p.category)[number])
        );

  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="My Work"
          subtitle="A collection of enterprise platforms, AI integrations, and full-stack products I've built."
        />

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                activeFilter === filter.value
                  ? "bg-accent-blue text-white"
                  : "bg-surface border border-border text-text-muted hover:text-text-primary hover:border-border-hover"
              )}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-16 text-center text-text-muted">
            <p>No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
