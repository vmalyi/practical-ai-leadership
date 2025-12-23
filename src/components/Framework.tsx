import { frameworkContent } from "@/config/content";

import { Container } from "./Container";

export function Framework() {
  return (
    <section className="bg-gray-900">
      <Container className="py-16 lg:py-24">
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
              className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 p-8 transition hover:border-indigo-500"
            >
              <div className="pointer-events-none absolute right-6 top-6 text-6xl font-black text-gray-700/40">
                {blocker.number}
              </div>
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {blocker.title}
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="font-semibold text-gray-100">
                      Problem:{" "}
                    </span>
                    {blocker.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-100">
                      Impact:{" "}
                    </span>
                    {blocker.impact}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-yellow-300">
                    Indicators
                  </p>
                  <ul className="mt-3 space-y-3">
                    {blocker.indicators.map((indicator) => (
                      <li
                        key={indicator}
                        className="flex items-start gap-3 text-gray-200"
                      >
                        <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-yellow-500/10 text-yellow-300">
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 9v4M12 17h.01" />
                            <path d="M10.29 3.86 1.82 18a1 1 0 0 0 .86 1.5h18.64a1 1 0 0 0 .86-1.5L12 3.86a1 1 0 0 0-1.71 0z" />
                          </svg>
                        </span>
                        <span className="text-gray-300">{indicator}</span>
                      </li>
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
