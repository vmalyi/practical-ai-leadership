import { credibilityContent } from "@/config/content";
import { siteConfig } from "@/config/site";

import { Container } from "./Container";

export function Credibility() {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="bg-gray-900/50">
      <Container className="py-16 lg:py-24">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gray-700 text-3xl font-bold text-gray-200">
            {initials}
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {credibilityContent.name}
              </h3>
              <p className="text-indigo-400">{credibilityContent.title}</p>
            </div>
            <p className="text-lg text-gray-300">{credibilityContent.bio}</p>
            <div className="flex flex-wrap gap-3">
              {credibilityContent.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-200"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
