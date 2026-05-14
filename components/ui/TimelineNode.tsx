"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineNodeProps {
  date: string;
  title: string;
  company: string;
  description: string;
  bullets: readonly string[];
  isLast?: boolean;
}

export function TimelineNode({
  date,
  title,
  company,
  description,
  bullets,
  isLast = false,
}: TimelineNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 sm:pl-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[19px] top-8 bottom-0 w-px bg-border" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-2 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-accent-blue bg-background flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "pb-10 cursor-pointer group",
          isLast && "pb-0"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-xs font-medium text-accent-blue tracking-wide uppercase">
          {date}
        </span>
        <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mt-1 flex items-center gap-2">
          {title}
          {bullets.length > 0 && (
            <ChevronDown
              className={cn(
                "w-4 h-4 text-text-muted transition-transform duration-200",
                isExpanded && "rotate-180"
              )}
            />
          )}
        </h3>
        <p className="text-text-muted text-sm">{company}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-text-muted text-sm mt-3 leading-relaxed">
                {description}
              </p>
              {bullets.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-muted flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
