import { heroContent } from "@/config/content";
import { siteConfig } from "@/config/site";

import { Container } from "./Container";

export function Hero() {
  return (
    <section className="bg-gray-900">
      <Container className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl text-gray-400 md:text-2xl">
            {heroContent.hook}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {heroContent.subHook}
          </h1>
          <p className="mt-6 text-lg text-gray-300">{heroContent.offer}</p>
          <p className="mt-4 text-lg font-semibold text-indigo-400">
            {heroContent.outcome}
          </p>
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
            <span>{heroContent.guarantee}</span>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href={siteConfig.calendarUrl}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
              target="_blank"
              rel="noreferrer"
            >
              {heroContent.cta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
