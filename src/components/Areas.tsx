"use client";

import { useContent } from "@/hooks/useContent";

import { Container } from "./Container";

export function Areas() {
  const { areas } = useContent();

  return (
    <section id="areas" className="scroll-mt-16 bg-gray-900">
      <Container className="py-6 lg:py-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">{areas.title}</h2>
          <p className="mt-4 text-lg text-gray-400">{areas.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {areas.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-800 bg-gray-800/50 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
