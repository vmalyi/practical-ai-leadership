import type { Locale } from "@/context/LocaleContext";

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  calendarUrl: string;
  images: {
    profile: string;
    ogImage: string;
  };
  guarantee: string;
};

export const siteConfig: SiteConfig = {
  name: "Viktor Malyi",
  title: "Fractional Head of AI for DACH Companies | Viktor Malyi",
  description:
    "Fractional Head of AI: strategy, architecture, team enablement, governance. For companies that invested in AI but need someone to own the outcome.",
  url: "https://practical-ai-leadership.com",
  calendarUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0lqb2kvUx3MPxlvUIOd28Lzflc4LgzwWB9p3PHaPc3F1umAaTKDIkplzlPJcFZ9LoX2XyYjg3a?gv=true",
  images: {
    profile: "/images/viktor-malyi.webp",
    ogImage: "/images/og-image.jpg",
  },
  guarantee: "",
};

export const siteConfigDe: SiteConfig = {
  ...siteConfig,
  title: "Interim Head of AI f\u00fcr DACH-Unternehmen | Viktor Malyi",
  description:
    "Interim Head of AI: Strategie, Architektur, Team-Enablement, Governance. F\u00fcr Unternehmen, die in KI investiert haben, aber niemanden, der es zum Ergebnis f\u00fchrt.",
};

export function getSiteConfig(locale: Locale): SiteConfig {
  return locale === "de" ? siteConfigDe : siteConfig;
}
