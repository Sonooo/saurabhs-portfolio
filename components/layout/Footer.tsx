import Link from "next/link";
import { MessageCircle, Send, Heart } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/ui/Icons";
import { PERSONAL, NAV_LINKS } from "@/lib/constants";

const socialIcons = [
  { href: PERSONAL.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: PERSONAL.github, icon: GithubIcon, label: "GitHub" },
  { href: PERSONAL.whatsapp, icon: MessageCircle, label: "WhatsApp" },
  { href: PERSONAL.telegram, icon: Send, label: "Telegram" },
  { href: PERSONAL.instagram, icon: InstagramIcon, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display font-bold text-xl tracking-tight flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center text-sm font-bold text-white">
                SS
              </span>
              {PERSONAL.name}
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Full Stack Developer & AI Engineer building intelligent, scalable
              web products. Open to senior roles and freelance projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-text-muted mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-text-muted mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-4">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-background border border-border hover:border-accent-blue/50 hover:bg-accent-blue/10 flex items-center justify-center transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-text-muted" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-sm text-text-muted hover:text-accent-blue transition-colors"
            >
              {PERSONAL.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-subtle">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-subtle flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-accent-red" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
