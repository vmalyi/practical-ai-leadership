"use client";

import { useState } from "react";

import { faqContent } from "@/config/content";

import { Container } from "./Container";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-gray-900">
      <Container className="py-8 lg:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">{faqContent.title}</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqContent.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-gray-800 bg-gray-800/50"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <span
                    className={`text-gray-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`px-6 transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0 pb-0"
                  }`}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
