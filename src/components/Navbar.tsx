import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/70 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-white">
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={siteConfig.calendarUrl}
              className="hidden items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              Book Audit
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
