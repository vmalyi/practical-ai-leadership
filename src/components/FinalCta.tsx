import { finalCtaContent } from "@/config/content";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="scroll-mt-16 bg-gradient-to-b from-gray-900 to-indigo-900/20"
    >
      <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-6 lg:py-16">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          {finalCtaContent.title}
        </h2>
        <p className="mt-4 text-lg text-gray-300">{finalCtaContent.subtitle}</p>
        <div className="mt-8 flex justify-center">
          <a
            href="#investment-options"
            data-ph-cta="primary"
            data-ph-label={finalCtaContent.cta}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
          >
            {finalCtaContent.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
