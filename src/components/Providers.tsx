"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { PostHogTracker } from "./PostHogTracker";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
    >
      <PostHogTracker />
      {children}
    </ThemeProvider>
  );
}
