"use client";

import Image from "next/image";

import { useContent } from "@/hooks/useContent";

import { Container } from "./Container";

export function Hero() {
  const { hero } = useContent();

  return (
    <section id="hero" className="scroll-mt-16 bg-gray-900">
      <Container className="flex flex-wrap py-10 lg:py-16">
        {/* Left side - Text content */}
        <div className="flex w-full items-center lg:w-1/2">
          <div className="mb-8 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {hero.headline}
            </h1>
            <div className="space-y-4 py-5 text-xl leading-normal text-gray-300 lg:text-xl xl:text-2xl">
              {hero.description.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 lg:items-start lg:justify-start">
              <a
                href="#investment-options"
                data-ph-cta="primary"
                data-ph-label={hero.cta}
                className="rounded-md bg-indigo-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
              >
                {hero.cta}
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex w-full items-center justify-center lg:w-1/2 lg:-mr-8">
          <div className="relative h-[400px] w-full max-w-lg lg:h-[500px] lg:max-w-none lg:w-[120%]">
            <Image
              src="/images/hero-org-chart.webp"
              alt="AI leadership and strategy visualization"
              fill
              className="object-contain scale-150"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, transparent 20%, black 45%, black 55%, transparent 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, transparent 25%, black 50%, black 55%, transparent 80%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, transparent 20%, black 45%, black 55%, transparent 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, transparent 25%, black 50%, black 55%, transparent 80%, transparent 100%)",
                WebkitMaskComposite: "source-in",
              }}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
