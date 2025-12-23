import { finalCtaContent } from "@/config/content";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-indigo-900/20">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-32">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          {finalCtaContent.title}
        </h2>
        <p className="mt-4 text-lg text-gray-300">{finalCtaContent.subtitle}</p>
        <div className="mt-8 flex justify-center">
          <a
            href={siteConfig.calendarUrl}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
            target="_blank"
            rel="noreferrer"
          >
            {finalCtaContent.cta}
          </a>
        </div>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">
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
          <span>{finalCtaContent.guarantee}</span>
        </div>
      </div>
    </section>
  );
}
