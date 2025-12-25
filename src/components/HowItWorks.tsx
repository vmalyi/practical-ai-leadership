import { howItWorksContent } from "@/config/content";

import { Container } from "./Container";

export function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-16 bg-gray-900/50">
      <Container className="py-8 lg:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">
            {howItWorksContent.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {howItWorksContent.subtitle}
          </p>
        </div>
        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-14 hidden h-px bg-indigo-500/30 md:block" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorksContent.steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex h-full flex-col gap-4 rounded-xl border border-gray-800 bg-gray-800/50 p-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white shadow-lg shadow-indigo-600/30">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
