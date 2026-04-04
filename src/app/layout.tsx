import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import { siteConfig } from "@/config/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    images: [
      {
        url: siteConfig.images.ogImage,
        alt: siteConfig.title,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Viktor Malyi",
      jobTitle: "Fractional Head of AI",
      url: "https://practical-ai-leadership.com",
      image: "https://practical-ai-leadership.com/images/viktor-malyi.jpg",
      sameAs: ["https://www.linkedin.com/in/viktormlyi/"],
      knowsAbout: [
        "AI Strategy",
        "Machine Learning",
        "AI Team Enablement",
        "AI Governance",
        "Context Engineering",
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "Viktor Malyi \u2014 Fractional Head of AI",
      description:
        "Fractional Head of AI for DACH companies: strategy, architecture, team enablement, governance.",
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
          }}
        />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
