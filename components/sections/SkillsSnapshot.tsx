"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SKILL_CATEGORIES } from "@/lib/constants";

export function SkillsSnapshot() {
  return (
    <section className="py-20 sm:py-28" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit spanning frontend, backend, AI, and cloud infrastructure."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="rounded-xl border border-border bg-surface p-6 h-full transition-all duration-300 hover:border-border-hover hover:bg-surface-hover card-glow">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3
                    className="font-display font-semibold text-base"
                    style={{ color: category.color }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 + j * 0.05 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        borderColor: `${category.color}25`,
                        color: `${category.color}`,
                        backgroundColor: `${category.color}08`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
