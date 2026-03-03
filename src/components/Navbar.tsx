"use client";

import { useEffect, useState } from "react";

import { Container } from "./Container";

const navItems = [
  { href: "#problem", label: "AI Coding Challenges" },
  { href: "#blockers", label: "Why It's Not Working" },
  { href: "#process", label: "24h Audit" },
  { href: "#investment-options", label: "Get Started" },
  { href: "#about", label: "Who I Am" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/70 backdrop-blur transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between">
          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          {/* Desktop CTA */}
          <a
            href="#investment-options"
            data-ph-cta="primary"
            data-ph-label="Navbar primary CTA"
            className="hidden items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 lg:inline-flex"
          >
            Make Your AI Coding Tools Actually Work
          </a>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="mt-4 flex flex-col gap-3 border-t border-gray-800 pt-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#investment-options"
              onClick={() => setMenuOpen(false)}
              data-ph-cta="primary"
              data-ph-label="Navbar mobile CTA"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Make Your AI Coding Tools Actually Work
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
}
