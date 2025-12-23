import { heroContent } from "@/config/content";
import { siteConfig } from "@/config/site";

import { Container } from "./Container";

export function Hero() {
  return (
    <section className="bg-gray-900">
      <Container className="flex flex-wrap py-10 lg:py-16">
        {/* Left side - Text content */}
        <div className="flex w-full items-center lg:w-1/2">
          <div className="mb-8 max-w-2xl">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {heroContent.headline}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-300 lg:text-xl xl:text-2xl">
              {heroContent.description}
            </p>
            <div className="mt-8 flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <a
                href={siteConfig.calendarUrl}
                className="rounded-md bg-indigo-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
                target="_blank"
                rel="noreferrer"
              >
                {heroContent.cta}
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="relative h-[400px] w-full max-w-lg lg:h-[500px]">
            {/* Placeholder for hero image */}
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-800/50 border-2 border-dashed border-gray-700">
              <div className="text-center text-gray-500">
                <svg
                  className="mx-auto h-16 w-16 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm">Hero Image</p>
                <p className="text-xs mt-1">616 × 617px recommended</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
