"use client";

import { cn } from "@/lib/utils";

interface TechPillProps {
  name: string;
  size?: "sm" | "md";
  color?: string;
}

export function TechPill({ name, size = "sm", color }: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 border",
        size === "sm"
          ? "px-2.5 py-0.5 text-xs"
          : "px-3.5 py-1.5 text-sm",
        "bg-surface border-border text-text-muted hover:border-border-hover hover:text-text-primary"
      )}
      style={
        color
          ? { borderColor: `${color}30`, color, backgroundColor: `${color}10` }
          : undefined
      }
    >
      {name}
    </span>
  );
}
