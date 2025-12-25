import Image from "next/image";

import { credibilityContent } from "@/config/content";
import { siteConfig } from "@/config/site";

import { Container } from "./Container";

export function Credibility() {
  return (
    <section id="about" className="scroll-mt-16 bg-gray-900/50">
      <Container className="py-8 lg:py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          {credibilityContent.sectionTitle}
        </h2>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src={siteConfig.images.profile}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
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
