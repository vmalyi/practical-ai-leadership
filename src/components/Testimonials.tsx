"use client";

import Image from "next/image";
import { useRef } from "react";

import { useContent } from "@/hooks/useContent";

import { Container } from "./Container";

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className ?? "h-5 w-5"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className ?? "h-5 w-5"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

const btnClass =
  "rounded-full border border-gray-700 bg-gray-900/90 p-2 text-white backdrop-blur transition hover:bg-gray-800";

export function Testimonials() {
  const { testimonials } = useContent();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth =
      container.querySelector<HTMLElement>("div")?.offsetWidth ?? 0;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="scroll-mt-16">
      <Container className="py-8 lg:py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          {testimonials.sectionTitle}
        </h2>
        <div className="relative">
          {/* Desktop side buttons */}
          <button
            onClick={() => scroll("left")}
            className={`${btnClass} absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 sm:block`}
            aria-label="Previous testimonial"
          >
            <ArrowLeft />
          </button>

          {/* Carousel track */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-[85%] flex-shrink-0 snap-start rounded-xl border border-gray-800 bg-gray-800/50 p-6 sm:w-[75%] sm:p-8 lg:w-[70%]"
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
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-indigo-400">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop right button */}
          <button
            onClick={() => scroll("right")}
            className={`${btnClass} absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 sm:block`}
            aria-label="Next testimonial"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Mobile bottom buttons */}
        <div className="mt-4 flex justify-center gap-4 sm:hidden">
          <button
            onClick={() => scroll("left")}
            className={btnClass}
            aria-label="Previous testimonial"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className={btnClass}
            aria-label="Next testimonial"
          >
            <ArrowRight />
          </button>
        </div>
      </Container>
    </section>
  );
}
