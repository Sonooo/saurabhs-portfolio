"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-mesh overflow-hidden" id="hero">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                <Briefcase className="w-3 h-3" />
                Full Stack Developer & AI Engineer
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight"
            >
              I Build{" "}
              <span className="gradient-text">Intelligent</span>
              ,<br />
              Scalable Web Products
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-text-muted text-base sm:text-lg max-w-lg leading-relaxed"
            >
              4+ years turning complex requirements into clean code — from React
              frontends to LangChain AI pipelines and cloud-native backends.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/work"
                className="flex sm:inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white font-medium text-sm hover:bg-accent-blue/90 transition-all duration-200 shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/30 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex sm:inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-border text-text-primary font-medium text-sm hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Let&apos;s Work Together
              </Link>
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <span className="flex sm:inline-flex justify-center items-center gap-2 px-3 py-2 sm:py-1.5 rounded-full text-xs font-medium bg-accent-green/10 text-accent-green border border-accent-green/20 w-full sm:w-auto">
                <span className="w-2 h-2 rounded-full bg-accent-green pulse-dot" />
                Open to Freelance Projects
              </span>
              <span className="flex sm:inline-flex justify-center items-center gap-2 px-3 py-2 sm:py-1.5 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20 w-full sm:w-auto">
                <Sparkles className="w-3 h-3" />
                Available for Senior Roles
              </span>
            </motion.div>
          </div>

          {/* Right: Animated Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Code Terminal */}
              <div className="rounded-2xl border border-border bg-surface/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-accent-blue/5">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-accent-red/70" />
                    <div className="w-3 h-3 rounded-full bg-accent-amber/70" />
                    <div className="w-3 h-3 rounded-full bg-accent-green/70" />
                  </div>
                  <span className="text-xs text-text-subtle ml-2 font-mono">
                    ~/saurabh/portfolio
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-3">
                  <div>
                    <span className="text-accent-green">const</span>{" "}
                    <span className="text-accent-blue">developer</span>{" "}
                    <span className="text-text-muted">=</span>{" "}
                    <span className="text-accent-amber">{"{"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-accent-cyan">name</span>
                    <span className="text-text-muted">:</span>{" "}
                    <span className="text-accent-green">&quot;Saurabh Sanap&quot;</span>
                    <span className="text-text-muted">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-accent-cyan">role</span>
                    <span className="text-text-muted">:</span>{" "}
                    <span className="text-accent-green">&quot;Full Stack & AI&quot;</span>
                    <span className="text-text-muted">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-accent-cyan">stack</span>
                    <span className="text-text-muted">:</span> [
                    <span className="text-accent-green">&quot;React&quot;</span>
                    <span className="text-text-muted">,</span>{" "}
                    <span className="text-accent-green">&quot;Next.js&quot;</span>
                    <span className="text-text-muted">,</span>{" "}
                    <span className="text-accent-green">&quot;Node&quot;</span>]
                    <span className="text-text-muted">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-accent-cyan">ai</span>
                    <span className="text-text-muted">:</span> [
                    <span className="text-accent-green">&quot;LangChain&quot;</span>
                    <span className="text-text-muted">,</span>{" "}
                    <span className="text-accent-green">&quot;LLM&quot;</span>
                    <span className="text-text-muted">,</span>{" "}
                    <span className="text-accent-green">&quot;GenAI&quot;</span>]
                    <span className="text-text-muted">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-accent-cyan">cloud</span>
                    <span className="text-text-muted">:</span> [
                    <span className="text-accent-green">&quot;AWS&quot;</span>
                    <span className="text-text-muted">,</span>{" "}
                    <span className="text-accent-green">&quot;Docker&quot;</span>
                    <span className="text-text-muted">,</span>{" "}
                    <span className="text-accent-green">&quot;K8s&quot;</span>]
                    <span className="text-text-muted">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-accent-cyan">passion</span>
                    <span className="text-text-muted">:</span>{" "}
                    <span className="text-accent-green">&quot;Building products&quot;</span>
                  </div>
                  <div>
                    <span className="text-accent-amber">{"}"}</span>
                    <span className="text-text-muted">;</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-accent-green">▶</span>{" "}
                    <span className="text-text-muted ml-1">Ready to ship...</span>
                    <span className="inline-block w-2 h-4 bg-accent-blue ml-1 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-cyan/8 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
