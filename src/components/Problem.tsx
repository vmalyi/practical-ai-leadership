import { problemContent } from "@/config/content";

import { Container } from "./Container";

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-16 bg-gray-900/50">
      <Container className="py-8 lg:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">
            {problemContent.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {problemContent.subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problemContent.points.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 rounded-xl border border-gray-800 bg-gray-800/50 p-6"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-red-500/10 text-red-400">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 7l10 10M17 7l-10 10" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-gray-300">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
