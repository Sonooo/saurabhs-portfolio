"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export function NeonScrollLine() {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const rafRef = useRef<number | null>(null);
  const latestMouseRef = useRef({ x: -100, y: -100 });

  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle window resize
  useEffect(() => {
    setMounted(true);
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Mouse move and hover target tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    latestMouseRef.current = { x: e.clientX, y: e.clientY };

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        setCursor(latestMouseRef.current);
        rafRef.current = null;
      });
    }

    const target = e.target as HTMLElement | null;
    if (
      target &&
      (target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("clickable"))
    ) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, []);

  // Global click shockwave handler
  const handleClick = useCallback((e: MouseEvent) => {
    const newRipple: ClickRipple = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((prev) => [...prev.slice(-4), newRipple]);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleClick]);

  if (!mounted) return null;

  const leftX = windowSize.width < 640 ? 6 : 28;
  const curX = cursor.x < 0 ? leftX : cursor.x;
  const curY = cursor.y < 0 ? windowSize.height / 2 : cursor.y;

  // Elastic SVG curve parameters pulling toward mouse cursor
  const pullFactor = 0.22;
  const controlX = leftX + (curX - leftX) * pullFactor;

  // Path M(start) C(control1, control2, end)
  const mainPath = `M ${leftX} 0 C ${controlX} ${curY * 0.4}, ${controlX} ${curY + (windowSize.height - curY) * 0.6}, ${leftX} ${windowSize.height}`;

  // Direct magnetic beam from left rail to pointer
  const magneticBeam = `M ${leftX} ${curY} Q ${(leftX + curX) * 0.5} ${curY} ${curX} ${curY}`;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <svg
        className="w-full h-full absolute inset-0"
        viewBox={`0 0 ${windowSize.width} ${windowSize.height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* Neon Glow Filters */}
          <filter id="neon-glow-heavy" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur1" />
            <feGaussianBlur stdDeviation="5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="neon-glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Linear Gradients */}
          <linearGradient id="neon-grad-v" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          <linearGradient id="beam-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Faint static background track */}
        <path
          d={mainPath}
          stroke="currentColor"
          className="text-border/40"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Dynamic scroll progress line bending with cursor */}
        <motion.path
          d={mainPath}
          stroke="url(#neon-grad-v)"
          strokeWidth="2.5"
          filter="url(#neon-glow-heavy)"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />

        {/* Magnetic SVG beam linking scroll rail to pointer */}
        {cursor.x > 0 && (
          <path
            d={magneticBeam}
            stroke="url(#beam-grad)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            className="opacity-60"
            filter="url(#neon-glow-soft)"
          />
        )}

        {/* Click Shockwave SVG Navigation Animations */}
        {ripples.map((ripple) => (
          <g key={ripple.id}>
            {/* Concentric expanding neon shockwave */}
            <motion.circle
              cx={ripple.x}
              cy={ripple.y}
              initial={{ r: 4, opacity: 0.9, strokeWidth: 3 }}
              animate={{ r: 90, opacity: 0, strokeWidth: 0.5 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              stroke="url(#neon-grad-v)"
              fill="none"
              filter="url(#neon-glow-heavy)"
            />
            <motion.circle
              cx={ripple.x}
              cy={ripple.y}
              initial={{ r: 2, opacity: 0.7, strokeWidth: 2 }}
              animate={{ r: 160, opacity: 0, strokeWidth: 0.25 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.08 }}
              stroke="#06B6D4"
              fill="none"
            />
            {/* Laser connector line radiating from click back to left scroll axis */}
            <motion.path
              d={`M ${ripple.x} ${ripple.y} L ${leftX} ${ripple.y}`}
              initial={{ pathLength: 0, opacity: 0.8 }}
              animate={{ pathLength: 1, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              stroke="url(#neon-grad-v)"
              strokeWidth="2"
              filter="url(#neon-glow-heavy)"
            />
          </g>
        ))}

        {/* Interactive Neon SVG Cursor Follower */}
        {cursor.x > 0 && (
          <g transform={`translate(${cursor.x}, ${cursor.y})`}>
            {/* Outer animated neon ring */}
            <motion.circle
              r={isHovered ? 20 : 12}
              stroke="url(#neon-grad-v)"
              strokeWidth={isHovered ? 2 : 1.2}
              fill={isHovered ? "rgba(59, 130, 246, 0.12)" : "none"}
              filter="url(#neon-glow-heavy)"
              animate={{
                scale: isHovered ? [1, 1.15, 1] : [1, 1.06, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Inner neon core dot */}
            <circle
              r={isHovered ? 3.5 : 2}
              fill="#06B6D4"
              filter="url(#neon-glow-heavy)"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

