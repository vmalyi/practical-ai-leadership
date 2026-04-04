import type { Locale } from "@/context/LocaleContext";

export interface HeroContent {
  headline: string;
  description: string;
  cta: string;
}

export interface ProblemPoint {
  title: string;
  description: string;
}

export interface ProblemSource {
  id: string;
  title: string;
}

export interface ProblemContent {
  title: string;
  subtitle: string;
  points: ProblemPoint[];
  sources?: ProblemSource[];
}

export interface FrameworkBlocker {
  number: string;
  title: string;
  problem: string;
  indicators: string[];
}

export interface FrameworkContent {
  title: string;
  subtitle: string;
  blockers: FrameworkBlocker[];
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface HowItWorksContent {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
}

export interface Tier {
  name: string;
  price?: string;
  description: string;
  features: string[];
  cta: string;
  bookingUrl: string;
}

export interface TiersContent {
  title: string;
  subtitle: string;
  tiers: Tier[];
}

export interface CredibilityContent {
  sectionTitle: string;
  name: string;
  title: string;
  bio: string;
  highlights: string[];
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsContent {
  sectionTitle: string;
  testimonials: Testimonial[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  title: string;
  items: FaqItem[];
}

export interface FinalCtaContent {
  title: string;
  subtitle: string;
  cta: string;
  guarantee: string;
}

export interface SiteContent {
  hero: HeroContent;
  problem: ProblemContent;
  framework: FrameworkContent;
  howItWorks: HowItWorksContent;
  tiers: TiersContent;
  testimonials: TestimonialsContent;
  credibility: CredibilityContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
}

const en: SiteContent = {
  hero: {
    headline: "You Invested in AI. Nothing Stuck.",
    description:
      "Pilots ran, tools were bought, leadership made it a priority. Yet nobody owns the AI strategy, nobody iterates the pilots, and adoption is inconsistent across teams. I step in as Fractional Head of AI \u2014 owning strategy, architecture, team enablement, and governance until your team can sustain it without me.",
    cta: "Get AI Leadership Now",
  },
  problem: {
    title:
      "Nobody owns AI in your company. No wonder it feels like AI doesn\u2019t deliver.",
    subtitle:
      "Your company invested in AI \u2014 tools, licenses, a pilot or two. Yet nobody owns the outcome. Pilots ship and nobody touches them again. AI runs as everyone\u2019s side project. Nobody knows if any of it is actually working. The investment happened. The leadership didn\u2019t.",
    points: [
      {
        title: "No Owner, No Progress",
        description:
          "AI is on every team\u2019s OKRs and nobody\u2019s actual job. Strategy is distributed, pilots ship but nobody iterates. Initiative after initiative starts strong and quietly dies.",
      },
      {
        title: "Pilot-to-Production Gap",
        description:
          'The proof of concept works. The scale-up never happens. "Viele sind in der Lage im Labor ganz tolle Use Cases am Laufen zu kriegen \u2014 daran scheitern die meisten." It\u2019s not a technical problem \u2014 it\u2019s organizational. Nobody has the mandate to push AI from demo to delivery.',
      },
      {
        title: "Leadership Is Asking. You Don\u2019t Have an Answer Yet.",
        description:
          "Investors want AI maturity. The CEO wants a strategy by end of quarter. You\u2019re already stretched across hiring, architecture, and delivery \u2014 and now AI is yours too. The mandate is real. The capacity to execute it isn\u2019t.",
      },
      {
        title: "AI Stuck in the IT Corner",
        description:
          "AI gets delegated to IT or engineering. They treat it as a tooling decision \u2014 licenses managed, access configured. But the business impact layer \u2014 strategy, product integration, cross-functional enablement \u2014 never gets designed. The org has AI tools. It doesn\u2019t have AI capability.",
      },
    ],
    sources: [],
  },
  framework: {
    title: "Why this keeps happening",
    subtitle:
      "Four structural gaps that no amount of tooling budget will fix. Each one needs someone who owns the outcome \u2014 not another vendor, not another pilot.",
    blockers: [
      {
        number: "01",
        title: "No dedicated AI leadership",
        problem:
          'AI responsibility is distributed across teams that already have full-time jobs. Nobody owns the strategy, nobody prioritizes across initiatives, nobody closes the loop between "shipped" and "delivering value." "Es kein Plus-ein-Thema f\u00fcr irgendjemanden ist" \u2014 it can\u2019t be an add-on to someone\u2019s existing role.',
        indicators: [
          "AI is on OKRs but nobody is accountable for outcomes",
          'No single person can answer "what\u2019s our AI strategy?" in one sentence',
          "Initiatives start in different teams with no coordination",
        ],
      },
      {
        number: "02",
        title: "Pilots succeed, then die",
        problem:
          'The proof of concept worked. Technically. Then nobody scaled it because nobody had the mandate. "Das eine ist einfach etwas in Pilot zu bringen, das andere ist dann etwas von Pilot in Skalierung zu bringen \u2014 Jahr sp\u00e4ter wird das Tool \u00fcberhaupt nicht genutzt, obwohl das eine gute Idee war."',
        indicators: [
          "You have a pilot from 6+ months ago that nobody touches",
          "The team that built it moved on to other priorities",
          "Nobody measures whether the pilot delivered value",
        ],
      },
      {
        number: "03",
        title: "No enablement, no adoption",
        problem:
          'Leadership said "use AI." Nobody said how. No training program, no shared standards, no proven workflows \u2014 just "go figure it out." Engineers who tried six months ago had a bad experience and stopped. Others never started. "The gap between what these tools can do and what most teams are getting from them is huge \u2014 and growing."',
        indicators: [
          "No formal AI onboarding or training program",
          "Engineers use AI inconsistently \u2014 some all-in, most not at all",
          'No shared standards for what "good AI usage" looks like',
          'Early bad experiences killed motivation \u2014 "Copilot-Frust"',
        ],
      },
      {
        number: "04",
        title: "No iteration loop, no measurement",
        problem:
          'Features ship and nobody asks whether they worked. No evaluation, no monitoring, no feedback loop between what shipped and what users actually need. "Du fragst nach sechs Monaten, woher wissen wir jetzt, ob wirklich besser geworden sind? Au\u00dfer vielleicht so eine gef\u00fchlte Wahrheit."',
        indicators: [
          "No metrics for AI feature performance",
          "AI features launched reactively for sales, not measured after",
          '"Felt truth" instead of data \u2014 the team believes AI is helping but can\u2019t prove it',
        ],
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    subtitle: "From first call to your org owning AI independently.",
    steps: [
      {
        title: "Intro call",
        description:
          "We talk for 30 minutes. I understand where your org stands with AI \u2014 what\u2019s running, what stalled, what\u2019s missing. You\u2019ll know by the end whether this is the right fit.",
      },
      {
        title: "Assessment and strategy",
        description:
          "I assess your AI maturity \u2014 team capabilities, data foundation, tooling, knowledge gaps. You get a written strategy brief with prioritized 90-day action plan and AI transformation OKRs. This is where most companies discover the real problem isn\u2019t the tech.",
      },
      {
        title: "Embedded AI leadership",
        description:
          "I join your org as Head of AI \u2014 owning the mandate end-to-end. That means defining the strategy, rolling out tooling standards and enablement per team, building evaluation and monitoring pipelines, and measuring what actually works. I stay until your team can sustain it without me. Typical engagement: 3\u20139 months.",
      },
    ],
  },
  tiers: {
    title: "Choose Your Path Forward",
    subtitle:
      "From a focused assessment to embedded AI leadership \u2014 pick the engagement that matches where you are.",
    tiers: [
      {
        name: "Get Clarity",
        description:
          "A focused sprint to understand where you stand and where to focus first.",
        features: [
          "Current-state AI assessment: tooling, pilots, workflows, gaps",
          "Team AI literacy and knowledge gap analysis",
          "Data foundation assessment \u2014 readiness, quality, accessibility for AI use cases",
          "Prioritized 90-day action plan with written strategy brief",
        ],
        cta: "Get Clarity",
        bookingUrl: "https://calendar.app.google/PZFG7xyfkemX6zhT7",
      },
      {
        name: "Build Capability",
        description:
          "I join your org as Head of AI \u2014 owning the mandate end-to-end.",
        features: [
          "AI strategy and transformation OKR definition",
          "AI-ready infrastructure \u2014 documentation standards, context engineering, feedback loops across engineering and business teams",
          "Structured AI enablement \u2014 tooling standards, workflow templates, adoption rollout per team",
          "AI monitoring and measurement \u2014 evaluation pipelines, adoption tracking, ROI reporting",
          "Autonomous AI agent design and deployment",
          "Vendor evaluation and governance framework",
        ],
        cta: "Build Capability",
        bookingUrl: "https://calendar.app.google/CBWXPN9sukcTCBve9",
      },
      {
        name: "Stay Sharp",
        description:
          "Bridging the gap between now and when your org has permanent AI leadership.",
        features: [
          "Monthly advisory calls to keep AI initiatives on track",
          "Help defining the full-time AI leadership role and evaluating candidates",
          "Knowledge transfer documentation and team handover",
          "AI initiative health checks \u2014 ensuring nothing regresses after the mandate ends",
          "Async support during the transition period",
        ],
        cta: "Stay Sharp",
        bookingUrl: "https://calendar.app.google/DjDENLuRcaVN2aJRA",
      },
    ],
  },
  testimonials: {
    sectionTitle: "What Clients Say",
    testimonials: [
      {
        name: "Mateusz Prusaczyk",
        title:
          "Lead Engineer @ simpleclub & author of softwarephilosopher blog",
        quote:
          "Viktor has been helping us to adopt AI in simpleclub. He ran workshops for the team on how to use Claude Code, which turned out to be super useful and helped my team deliver good results faster. He also ran a system-wide initiative to cover code of our services with AGENTS.md files in simpleclub. After the initiative, we experienced a huge improvement in quality of the AI-generated code.",
        image: "/images/mateusz-prusaczyk.jpg",
      },
    ],
  },
  credibility: {
    sectionTitle: "Built on Real Experience",
    name: "Viktor Malyi",
    title:
      "AI Engineering Leader with 16 Years Building Production Systems. Now Helping Teams Adopt AI Coding Tools.",
    bio: "I've been pioneering AI coding tools for 3 years (before wide market adoption), deploying them in real production environments. Vendors claim their tools work autonomously out of the box. I know what it actually takes to enable truly agentic coding capabilities and bridge the gap between marketing promises and production reality.",
    highlights: [
      "5 Production AI Systems Delivered",
      "17 Years Engineering Leadership",
      "Featured at Apple WWDC",
      "15+ Engineers Led & Mentored",
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        question: "What size team or codebase is this suitable for?",
        answer:
          "This approach is independent of team size. The changes live inside your codebase: documentation, context files, and feedback mechanisms that guide AI tools toward correct output regardless of how many developers use them. Large codebases benefit the most. The Full Agentic Coding Transformation provides significant leverage when AI agents need to navigate complex architectures autonomously.",
      },
      {
        question:
          "Does this work if we're using Copilot, Codex, Claude Code, or other vendor tools?",
        answer:
          "Absolutely. The audit is vendor-agnostic and focuses on prompts, context flow, guardrails, feedback loops, and workflows, regardless of which AI coding assistant you are using.",
      },
      {
        question: "What do I get after 24 hours?",
        answer:
          "An Audit Report (DevEx baseline with 10 metrics, top negative coding patterns, deliverables guide) plus ready-to-use files: full AGENTS.md hierarchy, pre-modified READMEs, vendor-specific rules, and fix prompts for all identified patterns. Followed by a walkthrough call.",
      },
      {
        question: "Will you implement the fixes?",
        answer:
          "Yes. Choose Audit + Implementation + ROI Measurement (single repo) or Full Agentic Coding Transformation (all repos) and I'll implement AGENTS.md, README updates, vendor rules, and apply fix prompts.",
      },
      {
        question: "How do you handle our code and data?",
        answer:
          "My analysis tools send code snippets to Anthropic's API for processing. Under their commercial API terms, this data is not used for model training and API logs are deleted after 7 days. Only files I explicitly read during the audit are transmitted. Your original codebase remains untouched on your systems. Data is never sold to third parties.",
      },
      {
        question: "What if there's nothing to improve?",
        answer:
          "If the audit doesn't identify meaningful improvements for your AI coding tools adoption, full refund.",
      },
    ],
  },
  finalCta: {
    title: "Ready to Make Your AI Coding Tools Work?",
    subtitle:
      "In 24 hours, get full AGENTS.md coverage, guidance for anti-patterns, and a DevEx baseline to measure impact. All grounded in your codebase.",
    cta: "Make Your AI Coding Tools Work",
    guarantee: "",
  },
};

const de: SiteContent = {
  hero: {
    headline: "Sie haben in KI investiert. Gebracht hat es nichts.",
    description:
      "Piloten liefen, Tools wurden gekauft, die Gesch\u00e4ftsf\u00fchrung hat es zur Priorit\u00e4t erkl\u00e4rt. Doch niemand verantwortet die KI-Strategie, niemand iteriert die Piloten, und die Nutzung ist inkonsistent \u00fcber Teams hinweg. Ich \u00fcbernehme das KI-Leadership-Mandat \u2014 Strategie, Architektur, Team-Enablement und Governance \u2014 bis Ihr Team es eigenst\u00e4ndig tr\u00e4gt.",
    cta: "KI-Leadership jetzt sichern",
  },
  problem: {
    title:
      "Niemand verantwortet KI in Ihrem Unternehmen. Kein Wunder, dass sich KI nicht auszahlt.",
    subtitle:
      "Ihr Unternehmen hat in KI investiert \u2014 Tools, Lizenzen, ein Pilotprojekt oder zwei. Doch niemand verantwortet das Ergebnis. Piloten werden geliefert und nie wieder angefasst. KI l\u00e4uft als Nebenprojekt aller. Niemand wei\u00df, ob irgendetwas davon tats\u00e4chlich funktioniert. Die Investition ist passiert. Die F\u00fchrung nicht.",
    points: [
      {
        title: "Kein Verantwortlicher, kein Fortschritt",
        description:
          "KI steht in den OKRs jedes Teams und ist der eigentliche Job von niemandem. Die Strategie ist verteilt, Piloten werden geliefert, aber niemand iteriert. Initiative nach Initiative startet stark und stirbt leise.",
      },
      {
        title: "Pilot-to-Production-L\u00fccke",
        description:
          "Der Proof of Concept funktioniert. Die Skalierung passiert nie. \u201eViele sind in der Lage im Labor ganz tolle Use Cases am Laufen zu kriegen \u2014 daran scheitern die meisten.\u201c Es ist kein technisches Problem \u2014 es ist organisatorisch. Niemand hat das Mandat, KI vom Demo zum Ergebnis zu bringen.",
      },
      {
        title:
          "Die Gesch\u00e4ftsf\u00fchrung fragt. Sie haben noch keine Antwort.",
        description:
          "Investoren wollen KI-Reife. Der CEO will eine Strategie bis Quartalsende. Sie sind bereits ausgelastet mit Hiring, Architektur und Delivery \u2014 und jetzt kommt KI dazu. Das Mandat ist real. Die Kapazit\u00e4t, es umzusetzen, nicht.",
      },
      {
        title: "KI bleibt in der IT-Ecke",
        description:
          "KI wird an IT oder Engineering delegiert. Die behandeln es als Tooling-Entscheidung \u2014 Lizenzen verwaltet, Zugang konfiguriert. Aber die Business-Impact-Ebene \u2014 Strategie, Produktintegration, cross-funktionales Enablement \u2014 wird nie designt. Die Organisation hat KI-Tools. Sie hat keine KI-F\u00e4higkeit.",
      },
    ],
    sources: [],
  },
  framework: {
    title: "Warum das immer wieder passiert",
    subtitle:
      "Vier strukturelle L\u00fccken, die kein Tooling-Budget der Welt schlie\u00dft. Jede einzelne braucht jemanden, der das Ergebnis verantwortet \u2014 keinen weiteren Anbieter, keinen weiteren Piloten.",
    blockers: [
      {
        number: "01",
        title: "Keine dedizierte KI-F\u00fchrung",
        problem:
          "KI-Verantwortung ist auf Teams verteilt, die bereits Vollzeitjobs haben. Niemand verantwortet die Strategie, niemand priorisiert \u00fcber Initiativen hinweg, niemand schlie\u00dft die Schleife zwischen \u201egeliefert\u201c und \u201eliefert Wert.\u201c \u201eEs kein Plus-ein-Thema f\u00fcr irgendjemanden ist\u201c \u2014 es kann kein Zusatzthema f\u00fcr eine bestehende Rolle sein.",
        indicators: [
          "KI ist in den OKRs, aber niemand ist f\u00fcr Ergebnisse verantwortlich",
          "Keine einzige Person kann \u201eWas ist unsere KI-Strategie?\u201c in einem Satz beantworten",
          "Initiativen starten in verschiedenen Teams ohne Koordination",
        ],
      },
      {
        number: "02",
        title: "Piloten gelingen, dann sterben sie",
        problem:
          "Der Proof of Concept hat funktioniert. Technisch. Dann hat niemand skaliert, weil niemand das Mandat hatte. \u201eDas eine ist einfach etwas in Pilot zu bringen, das andere ist dann etwas von Pilot in Skalierung zu bringen \u2014 Jahr sp\u00e4ter wird das Tool \u00fcberhaupt nicht genutzt, obwohl das eine gute Idee war.\u201c",
        indicators: [
          "Sie haben einen Piloten von vor 6+ Monaten, den niemand anr\u00fchrt",
          "Das Team, das ihn gebaut hat, arbeitet l\u00e4ngst an anderen Priorit\u00e4ten",
          "Niemand misst, ob der Pilot Wert geliefert hat",
        ],
      },
      {
        number: "03",
        title: "Kein Enablement, keine Adoption",
        problem:
          "Die F\u00fchrung sagte \u201eNutzt KI.\u201c Niemand sagte wie. Kein Schulungsprogramm, keine gemeinsamen Standards, keine bew\u00e4hrten Workflows \u2014 nur \u201eFigured es selber aus.\u201c Entwickler, die es vor sechs Monaten probiert haben, hatten eine schlechte Erfahrung und h\u00f6rten auf. Andere haben nie angefangen.",
        indicators: [
          "Kein formales KI-Onboarding oder Schulungsprogramm",
          "Entwickler nutzen KI inkonsistent \u2014 manche voll, die meisten gar nicht",
          "Keine gemeinsamen Standards f\u00fcr \u201egute KI-Nutzung\u201c",
          "Fr\u00fche schlechte Erfahrungen haben die Motivation zerst\u00f6rt \u2014 \u201eCopilot-Frust\u201c",
        ],
      },
      {
        number: "04",
        title: "Kein Iterationsloop, keine Messung",
        problem:
          "Features werden geliefert und niemand fragt, ob sie funktioniert haben. Keine Evaluation, kein Monitoring, keine Feedback-Schleife zwischen dem, was geliefert wurde, und dem, was Nutzer tats\u00e4chlich brauchen. \u201eDu fragst nach sechs Monaten, woher wissen wir jetzt, ob wirklich besser geworden sind? Au\u00dfer vielleicht so eine gef\u00fchlte Wahrheit.\u201c",
        indicators: [
          "Keine Metriken f\u00fcr KI-Feature-Performance",
          "KI-Features werden reaktiv f\u00fcr Sales gelauncht, danach nicht gemessen",
          "\u201eGef\u00fchlte Wahrheit\u201c statt Daten \u2014 das Team glaubt, KI hilft, kann es aber nicht beweisen",
        ],
      },
    ],
  },
  howItWorks: {
    title: "So funktioniert es",
    subtitle:
      "Vom ersten Gespr\u00e4ch bis Ihre Organisation KI eigenst\u00e4ndig vorantreibt.",
    steps: [
      {
        title: "Erstgespr\u00e4ch",
        description:
          "Wir sprechen 30 Minuten. Ich verstehe, wo Ihre Organisation mit KI steht \u2014 was l\u00e4uft, was stockt, was fehlt. Am Ende wissen Sie, ob es passt.",
      },
      {
        title: "Assessment und Strategie",
        description:
          "Ich bewerte Ihre KI-Reife \u2014 Team-F\u00e4higkeiten, Datengrundlage, Tooling, Wissensl\u00fccken. Sie erhalten ein Strategie-Briefing mit priorisiertem 90-Tage-Aktionsplan und KI-Transformations-OKRs. Hier entdecken die meisten Unternehmen, dass das eigentliche Problem nicht die Technik ist.",
      },
      {
        title: "Embedded KI-Leadership",
        description:
          "Ich trete Ihrer Organisation als Interim Head of AI bei \u2014 mit End-to-End-Verantwortung. Das bedeutet: Strategie definieren, Tooling-Standards und Enablement pro Team ausrollen, Evaluierungs- und Monitoring-Pipelines aufbauen und messen, was tats\u00e4chlich funktioniert. Ich bleibe, bis Ihr Team es ohne mich tr\u00e4gt. Typische Laufzeit: 3\u20139 Monate.",
      },
    ],
  },
  tiers: {
    title: "W\u00e4hlen Sie Ihren Weg",
    subtitle:
      "Vom fokussierten Assessment bis zum eingebetteten KI-Leadership \u2014 w\u00e4hlen Sie das Engagement, das zu Ihrer Situation passt.",
    tiers: [
      {
        name: "Klarheit schaffen",
        description:
          "Ein fokussierter Sprint, um zu verstehen, wo Sie stehen und wo Sie anfangen sollten.",
        features: [
          "Ist-Zustand KI-Assessment: Tooling, Piloten, Workflows, L\u00fccken",
          "Team-KI-Kompetenz und Wissensl\u00fccken-Analyse",
          "Datengrundlagen-Assessment \u2014 Bereitschaft, Qualit\u00e4t, Zug\u00e4nglichkeit f\u00fcr KI-Use-Cases",
          "Priorisierter 90-Tage-Aktionsplan mit schriftlichem Strategie-Briefing",
        ],
        cta: "Klarheit schaffen",
        bookingUrl: "https://calendar.app.google/PZFG7xyfkemX6zhT7",
      },
      {
        name: "Interim Head of AI",
        description:
          "Ich trete Ihrer Organisation als Head of AI bei \u2014 mit End-to-End-Verantwortung.",
        features: [
          "KI-Strategie und Transformations-OKR-Definition",
          "KI-f\u00e4hige Infrastruktur \u2014 Dokumentationsstandards, Context Engineering, Feedback-Loops \u00fcber Engineering- und Business-Teams",
          "Strukturiertes KI-Enablement \u2014 Tooling-Standards, Workflow-Templates, Adoption-Rollout pro Team",
          "KI-Monitoring und Messung \u2014 Evaluierungs-Pipelines, Adoption-Tracking, ROI-Reporting",
          "Design und Deployment autonomer KI-Agenten",
          "Anbieter-Evaluation und Governance-Framework",
        ],
        cta: "Interim Head of AI",
        bookingUrl: "https://calendar.app.google/CBWXPN9sukcTCBve9",
      },
      {
        name: "\u00dcbergangsbegleitung",
        description:
          "Die Br\u00fccke zwischen jetzt und dem Moment, in dem Ihre Organisation permanente KI-F\u00fchrung hat.",
        features: [
          "Monatliche Advisory-Calls, um KI-Initiativen auf Kurs zu halten",
          "Unterst\u00fctzung bei der Definition der Vollzeit-KI-F\u00fchrungsrolle und Kandidaten-Evaluation",
          "Wissenstransfer-Dokumentation und Team-\u00dcbergabe",
          "KI-Initiativen-Health-Checks \u2014 sicherstellen, dass nichts zur\u00fcckf\u00e4llt nach dem Mandat",
          "Asynchroner Support w\u00e4hrend der \u00dcbergangsphase",
        ],
        cta: "\u00dcbergangsbegleitung",
        bookingUrl: "https://calendar.app.google/DjDENLuRcaVN2aJRA",
      },
    ],
  },
  testimonials: en.testimonials,
  credibility: en.credibility,
  faq: en.faq,
  finalCta: en.finalCta,
};

export const content: Record<Locale, SiteContent> = { en, de };
