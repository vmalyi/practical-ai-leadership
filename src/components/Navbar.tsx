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
          <nav className="flex items-center gap-6">
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
          <a
            href="#investment-options"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Make Your AI Coding Tools Actually Work
          </a>
        </div>
      </Container>
    </header>
  );
}
