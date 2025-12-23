import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/70 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-white">
            AI Coding Agents Velocity Audit – By {siteConfig.name}
          </Link>
          <a
            href={siteConfig.calendarUrl}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            target="_blank"
            rel="noreferrer"
          >
            Book Audit
          </a>
        </div>
      </Container>
    </header>
  );
}
