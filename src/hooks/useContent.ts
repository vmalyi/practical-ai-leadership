"use client";

import { content, type SiteContent } from "@/config/content";
import { useLocale } from "@/context/LocaleContext";

export function useContent(): SiteContent {
  const locale = useLocale();
  return content[locale];
}
