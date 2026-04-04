"use client";

import Image from "next/image";

import { useContent } from "@/hooks/useContent";

import { Container } from "./Container";

export function Testimonials() {
  const { testimonials } = useContent();

  return (
    <section id="testimonials" className="scroll-mt-16">
      <Container className="py-8 lg:py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          {testimonials.sectionTitle}
        </h2>
        <div className="mx-auto max-w-3xl space-y-8">
          {testimonials.testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-gray-800 bg-gray-800/50 p-6 sm:p-8"
            >
              <blockquote className="text-lg leading-relaxed text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-indigo-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
