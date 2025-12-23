import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Imprint | Viktor Malyi",
};

export default function ImprintPage() {
  return (
    <main>
      <Container className="py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-white">Imprint</h1>
          <div className="mt-8 space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white">
                Information according to § 5 TMG
              </h2>
              <p className="mt-2">Viktor Malyi</p>
              <p>Mandrystr. 7</p>
              <p>74074 Heilbronn</p>
              <p>Germany</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:viktor@practical-ai-leadership.com"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  viktor@practical-ai-leadership.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">VAT ID</h2>
              <p className="mt-2">
                Wirtschafts-Identifikationsnummer: DE457838750
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Content Responsibility
              </h2>
              <p className="mt-2">
                Responsible for content according to § 55 Abs. 2 RStV:
              </p>
              <p className="mt-1">Viktor Malyi</p>
              <p>Mandrystr. 7</p>
              <p>74074 Heilbronn</p>
              <p>Germany</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                EU Dispute Resolution
              </h2>
              <p className="mt-2">
                The European Commission provides a platform for online dispute
                resolution (OS):{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">
                We are not willing or obliged to participate in dispute
                resolution proceedings before a consumer arbitration board.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Copyright</h2>
              <p className="mt-2">
                The content and works created by the site operators on these
                pages are subject to German copyright law. The reproduction,
                editing, distribution and any kind of exploitation outside the
                limits of copyright require the written consent of the
                respective author or creator.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
