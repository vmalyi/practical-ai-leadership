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
  title: "Built-In AI for SMEs | Viktor Malyi",
  description:
    "Built-In AI for SMEs. We build AI into the work your team already does, so the same team does more without new hires. Audit, build, hand over.",
  url: "https://practical-ai-leadership.com",
  calendarUrl: "https://calendar.app.google/pzzuz58Djem76rM26",
  images: {
    profile: "/images/viktor-malyi.webp",
    ogImage: "/images/og-image.jpg",
  },
  guarantee: "",
};

export const siteConfigDe: SiteConfig = {
  ...siteConfig,
  title: "Built-In KI für Mittelstand | Viktor Malyi",
  description:
    "Built-In KI für den Mittelstand. Wir bauen KI in die Abläufe ein, mit denen euer Team schon arbeitet, so schafft dasselbe Team mehr, ohne neu einzustellen.",
};

export function getSiteConfig(locale: Locale): SiteConfig {
  return locale === "de" ? siteConfigDe : siteConfig;
}
