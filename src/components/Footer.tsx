"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { useLocale } from "@/context/LocaleContext";

import { Container } from "./Container";

export function Footer() {
  const locale = useLocale();
  const year = new Date().getFullYear();
  const rights =
    locale === "de" ? "Alle Rechte vorbehalten." : "All rights reserved.";
  const imprint = locale === "de" ? "Impressum" : "Imprint";

  return (
    <footer className="border-t border-gray-800 bg-gray-900/70">
      <Container className="py-8">
        <div className="flex flex-col gap-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {year} {siteConfig.name}. {rights}
          </span>
          <Link
            href="/imprint"
            className="text-gray-400 transition hover:text-white"
          >
            {imprint}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
