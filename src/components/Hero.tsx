import Image from "next/image";

import { heroContent } from "@/config/content";

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
                href="#investment-options"
                className="rounded-md bg-indigo-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
              >
                {heroContent.cta}
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex w-full items-center justify-center lg:w-1/2 lg:-mr-8">
          <div className="relative h-[400px] w-full max-w-lg lg:h-[500px] lg:max-w-none lg:w-[120%]">
            <Image
              src="/images/Gemini_Generated_Image_xvad13xvad13xvad.png"
              alt="AI coding assistant chat windows showing frustrated developer prompts"
              fill
              className="object-contain"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, transparent 10%, black 35%, black 65%, transparent 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 25%, black 65%, transparent 90%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, transparent 10%, black 35%, black 65%, transparent 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 25%, black 65%, transparent 90%, transparent 100%)",
                WebkitMaskComposite: "source-in",
              }}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
