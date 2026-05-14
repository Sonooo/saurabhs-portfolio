"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Saurabh delivered an exceptional full-stack solution that exceeded our expectations. His expertise in React and Node.js is top-notch.",
    author: "Project Lead",
    role: "Enterprise Client",
    rating: 5,
  },
  {
    quote: "Outstanding AI integration work. Saurabh's understanding of LangChain and modern AI pipelines brought significant value to our platform.",
    author: "Technical Director",
    role: "AI Integration Project",
    rating: 5,
  },
  {
    quote: "Reliable, communicative, and technically brilliant. Saurabh consistently ships high-quality code on time and on budget.",
    author: "Product Manager",
    role: "SaaS Platform Build",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-surface/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What People Say"
          subtitle="Feedback from clients and colleagues I've worked with."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-surface p-6 sm:p-8 flex flex-col h-full"
            >
              <Quote className="w-8 h-8 text-accent-blue/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-accent-amber fill-accent-amber"
                  />
                ))}
              </div>

              <p className="text-text-muted text-sm leading-relaxed flex-1 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-display font-semibold text-sm text-text-primary">
                  {testimonial.author}
                </p>
                <p className="text-text-subtle text-xs mt-0.5">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
