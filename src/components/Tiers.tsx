import { tiersContent } from "@/config/content";

import { Container } from "./Container";

export function Tiers() {
  return (
    <section id="investment-options" className="scroll-mt-16 bg-gray-900">
      <Container className="py-8 lg:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">
            {tiersContent.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">{tiersContent.subtitle}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiersContent.tiers.map((tier, index) => {
            const isFeatured = index === 1;
            return (
              <div
                key={tier.name}
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  isFeatured
                    ? "border-2 border-indigo-500 bg-indigo-900/30 shadow-lg shadow-indigo-500/20"
                    : "border border-gray-700 bg-gray-800/50"
                }`}
              >
                {isFeatured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                ) : null}
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-semibold text-white">
                    {tier.name}
                  </h3>
                  {tier.price ? (
                    <p className="text-3xl font-bold text-indigo-200">
                      {tier.price}
                    </p>
                  ) : null}
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-gray-200">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green-500/15 text-green-300">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href={tier.bookingUrl}
                    className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                      isFeatured
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-700"
                        : "border border-gray-600 bg-gray-900 text-white hover:border-indigo-500 hover:text-indigo-100"
                    }`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
