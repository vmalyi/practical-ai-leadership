import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://practical-ai-leadership.com",
      lastModified: new Date("2026-04-04"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
