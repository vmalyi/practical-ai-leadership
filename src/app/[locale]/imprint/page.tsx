import type { Metadata } from "next";

import { Container } from "@/components/Container";

const imprint = {
  en: {
    title: "Imprint",
    tmgHeading: "Information according to § 5 TMG",
    contactHeading: "Contact",
    emailLabel: "Email:",
    idHeading: "Business identification number",
    responsibilityHeading: "Content Responsibility",
    responsibilityText: "Responsible for content according to § 55 (2) RStV:",
    disputeHeading: "EU Dispute Resolution",
    disputeText1:
      "The European Commission provides a platform for online dispute resolution (OS):",
    disputeText2:
      "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
    copyrightHeading: "Copyright",
    copyrightText:
      "The content and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.",
    country: "Germany",
  },
  de: {
    title: "Impressum",
    tmgHeading: "Angaben gemäß § 5 TMG",
    contactHeading: "Kontakt",
    emailLabel: "E-Mail:",
    idHeading: "Wirtschafts-Identifikationsnummer",
    responsibilityHeading: "Verantwortlich für den Inhalt",
    responsibilityText: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:",
    disputeHeading: "EU-Streitschlichtung",
    disputeText1:
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
    disputeText2:
      "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    copyrightHeading: "Urheberrecht",
    copyrightText:
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    country: "Deutschland",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = imprint[locale === "de" ? "de" : "en"];
  return { title: `${t.title} | Viktor Malyi` };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = imprint[locale === "de" ? "de" : "en"];

  return (
    <main>
      <Container className="py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-white">{t.title}</h1>
          <div className="mt-8 space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white">
                {t.tmgHeading}
              </h2>
              <p className="mt-2">Viktor Malyi</p>
              <p>Mandrystr. 7</p>
              <p>74074 Heilbronn</p>
              <p>{t.country}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {t.contactHeading}
              </h2>
              <p className="mt-2">
                {t.emailLabel}{" "}
                <a
                  href="mailto:viktor@practical-ai-leadership.com"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  viktor@practical-ai-leadership.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {t.idHeading}
              </h2>
              <p className="mt-2">DE457838750</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {t.responsibilityHeading}
              </h2>
              <p className="mt-2">{t.responsibilityText}</p>
              <p className="mt-1">Viktor Malyi</p>
              <p>Mandrystr. 7</p>
              <p>74074 Heilbronn</p>
              <p>{t.country}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {t.disputeHeading}
              </h2>
              <p className="mt-2">
                {t.disputeText1}{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">{t.disputeText2}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {t.copyrightHeading}
              </h2>
              <p className="mt-2">{t.copyrightText}</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
