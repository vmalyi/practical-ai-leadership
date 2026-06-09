import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import type { Locale } from "@/context/LocaleContext";
import { getSiteConfig, siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ locale: string }>;
  children: ReactNode;
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const config = getSiteConfig(locale as Locale);
  const baseUrl = siteConfig.url;

  return {
    metadataBase: new URL(baseUrl),
    title: config.title,
    description: config.description,
    alternates: {
      languages: {
        en: `${baseUrl}/en/`,
        de: `${baseUrl}/de/`,
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${baseUrl}/${locale}/`,
      type: "website",
      images: [
        {
          url: config.images.ogImage,
          alt: config.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

function getJsonLd(locale: string) {
  const isDE = locale === "de";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Viktor Malyi",
        jobTitle: isDE ? "KI-Berater" : "AI Consultant",
        url: "https://practical-ai-leadership.com",
        image: "https://practical-ai-leadership.com/images/viktor-malyi.webp",
        sameAs: ["https://www.linkedin.com/in/viktormlyi/"],
        knowsAbout: [
          "AI Implementation",
          "Machine Learning",
          "AI Agents",
          "Business Process Automation",
          "AI Adoption",
          "Context Engineering",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: isDE
          ? "Built-In KI von Viktor Malyi"
          : "Built-In AI by Viktor Malyi",
        description: isDE
          ? "Built-In KI f\u00fcr den Mittelstand: Wir bauen KI in die Abl\u00e4ufe ein, mit denen euer Team schon arbeitet."
          : "Built-In AI for SMEs: we build AI into the work your team already does, so the same team does more without new hires.",
        url: "https://practical-ai-leadership.com",
        areaServed: [
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Austria" },
          { "@type": "Country", name: "Switzerland" },
        ],
        provider: {
          "@type": "Person",
          name: "Viktor Malyi",
        },
      },
    ],
  };
}

export default async function LocaleLayout({ params, children }: Props) {
  const { locale } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLd(locale)).replace(/</g, "\u003c"),
        }}
      />
      <Providers locale={locale as Locale}>
        <Navbar />
        {children}
        <Footer />
      </Providers>
    </>
  );
}
