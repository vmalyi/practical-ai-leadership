"use client";

import { useContent } from "@/hooks/useContent";

import { Container } from "./Container";

export function Hero() {
  const { hero } = useContent();
  const [accent, ...restLines] = hero.headline.split("\n");
  const rest = restLines.join("\n");

  return (
    <section id="hero" className="scroll-mt-16 bg-gray-900">
      <Container className="py-12 text-center lg:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="whitespace-pre-line text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-indigo-400">{accent}</span>
            {rest && `\n${rest}`}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-normal text-gray-300 sm:text-xl">
            {hero.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
