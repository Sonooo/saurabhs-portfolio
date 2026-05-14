"use client";

import { motion } from "framer-motion";
import { PERSONAL, STATS } from "@/lib/constants";
import { Building2 } from "lucide-react";

export function SocialProof() {
  const items = [
    {
      icon: <Building2 className="w-4 h-4 text-accent-blue" />,
      text: `Currently at ${PERSONAL.currentCompany}`,
    },
    {
      icon: <Building2 className="w-4 h-4 text-text-subtle" />,
      text: `Previously at ${PERSONAL.previousCompany}`,
    },
    ...STATS.map((s) => ({
      icon: null,
      text: `${s.value} ${s.label}`,
    })),
  ];

  return (
    <section className="border-y border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-2 text-sm text-text-muted"
            >
              {item.icon}
              <span>{item.text}</span>
              {i < items.length - 1 && (
                <span className="hidden sm:inline text-border ml-6">|</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
