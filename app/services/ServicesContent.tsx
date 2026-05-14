"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES, PROCESS_STEPS, FAQ_ITEMS } from "@/lib/constants";
import { Rocket, Layers, Brain, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  brain: <Brain className="w-6 h-6" />,
};

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-surface overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-surface-hover transition-colors"
          >
            <span className="font-display font-medium text-sm text-text-primary">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-text-muted transition-transform duration-200 shrink-0",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-text-muted text-sm leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function ServicesContent() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Freelance Services"
          title="Let's Build Something Great"
          subtitle="From quick landing pages to full-stack AI-powered platforms — I offer flexible engagement models to match your needs."
        />

        {/* Service Tiers */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {'featured' in service && service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div
                className={cn(
                  "rounded-xl border p-6 sm:p-8 h-full flex flex-col transition-all duration-300",
                  'featured' in service && service.featured
                    ? "border-accent-blue/30 bg-surface shadow-lg shadow-accent-blue/5"
                    : "border-border bg-surface hover:border-border-hover"
                )}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    color: "var(--color-accent-blue)",
                  }}
                >
                  {iconMap[service.icon]}
                </div>

                <h3 className="font-display font-bold text-lg text-text-primary">
                  {service.tier}
                </h3>
                <p className="text-text-muted text-sm mt-2 flex-1">
                  {service.description}
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-text-subtle mb-3">
                    Timeline: <span className="text-text-muted font-medium">{service.timeline}</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs bg-background border border-border text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className={cn(
                      "w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      'featured' in service && service.featured
                        ? "bg-accent-blue text-white hover:bg-accent-blue/90 shadow-lg shadow-accent-blue/20"
                        : "border border-border text-text-primary hover:border-accent-blue/50 hover:bg-accent-blue/5"
                    )}
                  >
                    {service.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20 sm:mt-28">
          <SectionHeader
            eyebrow="Process"
            title="How We'll Work Together"
            subtitle="A clear, structured process from initial consultation to final delivery."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="rounded-xl border border-border bg-surface p-5 h-full">
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-display font-bold text-sm mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
                {/* Connector */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 sm:mt-28 max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about working together."
          />

          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-xl border border-border bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5 p-8 sm:p-12 text-center"
        >
          <CheckCircle2 className="w-10 h-10 text-accent-green mx-auto mb-4" />
          <h3 className="font-display font-bold text-2xl text-text-primary">
            Ready to get started?
          </h3>
          <p className="text-text-muted text-sm mt-2 max-w-md mx-auto">
            Book a free 30-minute discovery call to discuss your project requirements and timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white font-medium text-sm hover:bg-accent-blue/90 transition-all duration-200 mt-6 shadow-lg shadow-accent-blue/20"
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
