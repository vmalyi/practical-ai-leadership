import { frameworkContent } from "@/config/content";

import { Container } from "./Container";

export function Framework() {
  return (
    <section id="blockers" className="scroll-mt-16 bg-gray-900">
      <Container className="py-8 lg:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">
            {frameworkContent.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {frameworkContent.subtitle}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {frameworkContent.blockers.map((blocker) => (
            <div
              key={blocker.number}
              className="relative rounded-xl border border-gray-700 bg-gray-800/50 p-8 transition hover:border-indigo-500"
            >
              <div className="pointer-events-none absolute right-6 top-6 text-6xl font-black text-gray-700/40">
                {blocker.number}
              </div>
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {blocker.title}
                </h3>
                <p className="text-gray-300">{blocker.problem}</p>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-yellow-300">
                    Indicators
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-300">
                    {blocker.indicators.map((indicator) => (
                      <li key={indicator}>{indicator}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
