import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://practical-ai-leadership.com/en/",
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://practical-ai-leadership.com/de/",
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://practical-ai-leadership.com/en/imprint/",
      lastModified: new Date("2026-04-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://practical-ai-leadership.com/de/imprint/",
      lastModified: new Date("2026-04-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
