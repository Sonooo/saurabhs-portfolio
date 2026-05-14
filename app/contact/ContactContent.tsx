"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL } from "@/lib/constants";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Briefcase,
  Rocket,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";


interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
}

function EmployerForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [formData, setFormData] = useState({ name: "", company: "", role: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "submitting" });

    try {
      const res = await fetch("https://formspree.io/f/mqkrwvle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `[Portfolio] Hiring Inquiry from ${formData.name}`,
          type: "employer",
        }),
      });

      if (res.ok) {
        setState({ status: "success", message: "Message sent successfully!" });
        setFormData({ name: "", company: "", role: "", message: "" });
      } else {
        setState({ status: "error", message: "Something went wrong. Please try again." });
      }
    } catch {
      setState({ status: "error", message: "Network error. Please try again." });
    }
  };

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="w-12 h-12 text-accent-green mb-4" />
        <h3 className="font-display font-semibold text-lg text-text-primary">Thanks for reaching out!</h3>
        <p className="text-text-muted text-sm mt-2">I&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setState({ status: "idle" })}
          className="mt-4 text-accent-blue text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="emp-name" className="block text-xs font-medium text-text-muted mb-1.5">Name</label>
        <input
          id="emp-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="emp-company" className="block text-xs font-medium text-text-muted mb-1.5">Company</label>
        <input
          id="emp-company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
          placeholder="Company name"
        />
      </div>
      <div>
        <label htmlFor="emp-role" className="block text-xs font-medium text-text-muted mb-1.5">Role</label>
        <input
          id="emp-role"
          type="text"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
          placeholder="Position you're hiring for"
        />
      </div>
      <div>
        <label htmlFor="emp-message" className="block text-xs font-medium text-text-muted mb-1.5">Message</label>
        <textarea
          id="emp-message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none"
          placeholder="Tell me about the opportunity..."
        />
      </div>
      {state.status === "error" && (
        <p className="text-accent-red text-xs">{state.message}</p>
      )}
      <button
        type="submit"
        disabled={state.status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent-blue text-white font-medium text-sm hover:bg-accent-blue/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.status === "submitting" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-3.5 h-3.5" /> Send Inquiry</>
        )}
      </button>
    </form>
  );
}

function FreelanceForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "submitting" });

    try {
      const res = await fetch("https://formspree.io/f/mqkrwvle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `[Portfolio] Freelance Inquiry from ${formData.name}`,
          type: "freelance",
        }),
      });

      if (res.ok) {
        setState({ status: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", projectType: "", budget: "", timeline: "", description: "" });
      } else {
        setState({ status: "error", message: "Something went wrong. Please try again." });
      }
    } catch {
      setState({ status: "error", message: "Network error. Please try again." });
    }
  };

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="w-12 h-12 text-accent-green mb-4" />
        <h3 className="font-display font-semibold text-lg text-text-primary">Request received!</h3>
        <p className="text-text-muted text-sm mt-2">I&apos;ll review your project and respond within 24 hours.</p>
        <button
          onClick={() => setState({ status: "idle" })}
          className="mt-4 text-accent-blue text-sm hover:underline"
        >
          Submit another project
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="free-name" className="block text-xs font-medium text-text-muted mb-1.5">Name</label>
          <input
            id="free-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="free-email" className="block text-xs font-medium text-text-muted mb-1.5">Email</label>
          <input
            id="free-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="free-type" className="block text-xs font-medium text-text-muted mb-1.5">Project Type</label>
        <select
          id="free-type"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
        >
          <option value="">Select project type</option>
          <option value="web-app">Web Application</option>
          <option value="landing-page">Landing Page</option>
          <option value="ai-integration">AI Integration</option>
          <option value="api-backend">API / Backend</option>
          <option value="cloud-migration">Cloud Migration</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="free-budget" className="block text-xs font-medium text-text-muted mb-1.5">Budget Range</label>
          <select
            id="free-budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
          >
            <option value="">Select budget</option>
            <option value="small">$500 – $2,000</option>
            <option value="medium">$2,000 – $5,000</option>
            <option value="large">$5,000 – $15,000</option>
            <option value="enterprise">$15,000+</option>
          </select>
        </div>
        <div>
          <label htmlFor="free-timeline" className="block text-xs font-medium text-text-muted mb-1.5">Timeline</label>
          <select
            id="free-timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
          >
            <option value="">Select timeline</option>
            <option value="urgent">Under 2 weeks</option>
            <option value="standard">2 – 4 weeks</option>
            <option value="extended">1 – 2 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="free-desc" className="block text-xs font-medium text-text-muted mb-1.5">Project Description</label>
        <textarea
          id="free-desc"
          required
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none"
          placeholder="Tell me about your project — goals, features, any technical requirements..."
        />
      </div>
      {state.status === "error" && (
        <p className="text-accent-red text-xs">{state.message}</p>
      )}
      <button
        type="submit"
        disabled={state.status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent-blue text-white font-medium text-sm hover:bg-accent-blue/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.status === "submitting" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Rocket className="w-3.5 h-3.5" /> Start the Conversation</>
        )}
      </button>
    </form>
  );
}

export function ContactContent() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's Connect"
          subtitle="Whether you're hiring for a senior role or need a freelance developer for your next project."
        />

        {/* Dual Form Layout */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Employer Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-text-primary">
                  Looking to hire?
                </h3>
                <p className="text-text-muted text-xs">For full-time or contract roles</p>
              </div>
            </div>
            <EmployerForm />
          </motion.div>

          {/* Freelance Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-accent-cyan" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-text-primary">
                  Got a project?
                </h3>
                <p className="text-text-muted text-xs">For freelance & contract work</p>
              </div>
            </div>
            <FreelanceForm />
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <p className="text-xs text-text-subtle">Email</p>
                <p className="text-sm text-text-muted group-hover:text-accent-blue transition-colors">
                  {PERSONAL.email}
                </p>
              </div>
            </a>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                <LinkedinIcon className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <p className="text-xs text-text-subtle">LinkedIn</p>
                <p className="text-sm text-text-muted group-hover:text-accent-blue transition-colors">
                  in/saurabh-sanap
                </p>
              </div>
            </a>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                <GithubIcon className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <p className="text-xs text-text-subtle">GitHub</p>
                <p className="text-sm text-text-muted group-hover:text-accent-blue transition-colors">
                  github.com/Sonooo
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <p className="text-xs text-text-subtle">Location</p>
                <p className="text-sm text-text-muted">
                  Pune, India 🇮🇳
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-text-subtle text-xs">
            <Clock className="w-3.5 h-3.5" />
            Typically responds within 24 hours
          </div>
        </motion.div>
      </div>
    </div>
  );
}
