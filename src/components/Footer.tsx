import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900/70">
      <Container className="py-8">
        <div className="flex flex-col gap-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </span>
          <Link
            href="/imprint"
            className="text-gray-400 transition hover:text-white"
          >
            Imprint
          </Link>
        </div>
      </Container>
    </footer>
  );
}
