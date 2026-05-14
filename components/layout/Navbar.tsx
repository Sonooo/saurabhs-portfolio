"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-lg sm:text-xl tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center text-sm font-bold text-white">
            SS
          </span>
          <span className="hidden sm:inline text-text-primary">
            {PERSONAL.name.split(" ")[0]}
            <span className="text-accent-blue">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-accent-blue bg-accent-blue/10"
                  : "text-text-muted hover:text-text-primary hover:bg-surface"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Saurabh_Resume.pdf"
            download
            className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2 p-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "w-full text-center px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-accent-blue bg-accent-blue/10"
                  : "text-text-muted hover:text-text-primary hover:bg-surface"
              )}
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Saurabh_Resume.pdf"
            download
            className="w-full text-center px-6 py-4 rounded-xl text-lg font-medium bg-accent-blue text-white hover:bg-accent-blue/90 transition-all duration-200 flex items-center justify-center gap-2 mt-4"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
