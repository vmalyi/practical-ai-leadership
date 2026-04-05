"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

import { LocaleProvider, type Locale } from "@/context/LocaleContext";

import { PostHogTracker } from "./PostHogTracker";

export function Providers({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
    >
      <LocaleProvider locale={locale}>
        <PostHogTracker />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  );
}
