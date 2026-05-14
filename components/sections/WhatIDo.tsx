"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Code2, Bot, Cloud } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Full-Stack Development",
    description:
      "End-to-end web apps — React/Next.js frontends, Node/NestJS backends, PostgreSQL & MongoDB.",
    color: "var(--color-accent-blue)",
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: "AI & Automation Engineering",
    description:
      "LangChain agents, LLM integrations, agentic pipelines, and intelligent workflow automation.",
    color: "var(--color-accent-purple)",
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "Cloud & DevOps",
    description:
      "AWS serverless architectures, Docker/Kubernetes deployments, CI/CD pipelines.",
    color: "var(--color-accent-cyan)",
  },
];

export function WhatIDo() {
  return (
    <section className="py-20 sm:py-28" id="what-i-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="What I Do"
          subtitle="Delivering end-to-end solutions across the full stack, AI, and cloud infrastructure."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href="/services" className="block h-full group">
                <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 h-full transition-all duration-300 hover:border-border-hover hover:bg-surface-hover card-glow">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${service.color} 12%, transparent)`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
