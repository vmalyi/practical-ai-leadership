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
    headline: "You Invested in AI. But See No Results.",
    description:
      "Leadership made it a priority. Tools were bought, pilots ran. Yet nobody owns the AI strategy, nobody iterates the pilots, and adoption is inconsistent across teams. \n\nI step in as Fractional Head of AI, owning strategy, architecture, team enablement, and governance until your team can be proficient with AI on their own.",
    cta: "Get AI Leadership Now",
  },
  problem: {
    title:
      "Nobody owns AI in your company. No wonder it feels like AI doesn\u2019t deliver.",
    subtitle:
      "Your company invested in AI: tools, licenses, a pilot or two. Yet nobody owns the outcome. Pilots ship and nobody touches them again. AI runs as everyone\u2019s side project. Nobody knows if any of it is actually working. The investment happened. The leadership didn\u2019t.",
    points: [
      {
        title: "No Owner, No Progress",
        description:
          "AI is on every team\u2019s OKRs and nobody\u2019s actual job. Strategy is distributed, pilots ship but nobody iterates. Initiative after initiative starts strong and quietly dies.",
      },
      {
        title: "Pilot-to-Production Gap",
        description:
          'The proof of concept works. The scale-up never happens. "Viele sind in der Lage im Labor ganz tolle Use Cases am Laufen zu kriegen, daran scheitern die meisten." It\u2019s not a technical problem, it\u2019s organizational. Nobody has the authority to push AI from demo to delivery.',
      },
      {
        title: "Leadership Is Asking. You Don\u2019t Have an Answer Yet.",
        description:
          "Investors want AI maturity. The CEO wants a strategy by end of quarter. You\u2019re already stretched across hiring, architecture, and delivery, and now AI is yours too. The pressure is real. The capacity to execute it isn\u2019t.",
      },
      {
        title: "AI Stuck in the IT Corner",
        description:
          "AI gets delegated to IT or engineering. They treat it as a tooling decision: licenses managed, access configured. But the business impact layer, strategy, product integration, cross-functional enablement, never gets designed. The org has AI tools. It doesn\u2019t have AI capability.",
      },
    ],
    sources: [],
  },
  framework: {
    title: "Why this keeps happening",
    subtitle:
      "Four structural gaps that no amount of tooling budget will fix. Each one needs someone who owns the outcome, not another vendor, not another pilot.",
    blockers: [
      {
        number: "01",
        title: "No dedicated AI leadership",
        problem:
          'AI responsibility is distributed across teams that already have full-time jobs. Nobody owns the strategy, nobody prioritizes across initiatives, nobody closes the loop between "shipped" and "delivering value." "Es kein Plus-ein-Thema f\u00fcr irgendjemanden ist," it can\u2019t be an add-on to someone\u2019s existing role.',
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
          'The proof of concept worked. Technically. Then nobody scaled it because nobody had the ownership. "Das eine ist einfach etwas in Pilot zu bringen, das andere ist dann etwas von Pilot in Skalierung zu bringen, ein Jahr sp\u00e4ter wird das Tool \u00fcberhaupt nicht genutzt, obwohl das eine gute Idee war."',
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
          'Leadership said "use AI." Nobody said how. No training program, no shared standards, no proven workflows, just "go figure it out." Engineers who tried six months ago had a bad experience and stopped. Others never started. "The gap between what these tools can do and what most teams are getting from them is huge, and growing."',
        indicators: [
          "No formal AI onboarding or training program",
          "Engineers use AI inconsistently, some all-in, most not at all",
          'No shared standards for what "good AI usage" looks like',
          "Early bad experiences killed motivation and nobody tried again",
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
          '"Felt truth" instead of data, the team believes AI is helping but can\u2019t prove it',
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
          "We talk for 30 minutes. I understand where your org stands with AI: what\u2019s running, what stalled, what\u2019s missing. You\u2019ll know by the end whether this is the right fit.",
      },
      {
        title: "Assessment and strategy",
        description:
          "I assess your AI maturity: team capabilities, data foundation, tooling, knowledge gaps. You get a written strategy brief with prioritized 90-day action plan and AI transformation OKRs. This is where most companies discover the real problem isn\u2019t the tech.",
      },
      {
        title: "Embedded AI leadership",
        description:
          "I join your org as Head of AI, owning the responsibility end-to-end. That means defining the strategy, rolling out tooling standards and enablement per team, building evaluation and monitoring pipelines, and measuring what actually works. I stay until your team can sustain it without me. Typical engagement: 3\u20139 months.",
      },
    ],
  },
  tiers: {
    title: "Choose Your Path Forward",
    subtitle:
      "From a focused assessment to embedded AI leadership, pick the engagement that matches where you are.",
    tiers: [
      {
        name: "Get Clarity",
        description:
          "A focused sprint to understand where you stand and where to focus first.",
        features: [
          "Current-state AI assessment: tooling, pilots, workflows, gaps",
          "Team AI literacy and knowledge gap analysis",
          "Data foundation assessment, readiness, quality, accessibility for AI use cases",
          "Prioritized 90-day action plan with written strategy brief",
        ],
        cta: "Get Clarity",
        bookingUrl: "https://calendar.app.google/PZFG7xyfkemX6zhT7",
      },
      {
        name: "Build Capability",
        description:
          "Everything in Get Clarity, plus: I join your team as Head of AI, owning the full picture for one team.",
        features: [
          "AI strategy and transformation OKR definition for your team",
          "AI-ready infrastructure: documentation standards, context engineering, feedback loops",
          "Structured AI enablement: tooling standards, workflow templates, adoption rollout",
          "AI monitoring and measurement: evaluation pipelines, adoption tracking, ROI reporting",
          "Vendor evaluation and governance framework",
        ],
        cta: "Build Capability",
        bookingUrl: "https://calendar.app.google/CBWXPN9sukcTCBve9",
      },
      {
        name: "Stay Sharp",
        description:
          "Everything in Build Capability, scaled across your entire org. Plus ongoing support after I leave.",
        features: [
          "Org-wide AI enablement rollout across all teams",
          "Cross-functional AI coordination and prioritization",
          "Help defining the full-time AI leadership role and evaluating candidates",
          "Knowledge transfer documentation and team handover",
          "Monthly advisory calls and async support during the transition",
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
        name: "Christian Liu",
        title: "Co-Founder & CEO @ AskPally",
        quote:
          "Viktor is an exceptional advisor who is not only extremely reliable and responsive but also deeply committed to his work. His assessments and strategic advice were incredibly valuable and were instrumental in our planning process. Viktor helped us set the right priorities for our AI-heavy startup by shifting our attention from purely technical questions to critical business factors in our target market. He has a unique combination of deep tech knowledge and real-world startup experience that provides founders with essential strategic clarity.",
        image: "/images/christian-liu.jpg",
      },
      {
        name: "Mateusz Prusaczyk",
        title:
          "Lead Engineer @ simpleclub & author of softwarephilosopher blog",
        // TODO(Viktor): consider replacing with reframed quote — verify with Mateusz before publishing:
        // "Viktor led the AI transformation at our company. He defined the strategy, rolled out tooling standards per engineer, and built the adoption measurement we were missing. The team went from inconsistent AI usage to a structured, measurable approach. He made AI everyone's capability, not just a few enthusiasts' side project."
        quote:
          "Viktor has been helping us to adopt AI in simpleclub. He ran workshops for the team on how to use Claude Code, which turned out to be super useful and helped my team deliver good results faster. He also ran a system-wide initiative to cover code of our services with AGENTS.md files in simpleclub. After the initiative, we experienced a huge improvement in quality of the AI-generated code.",
        image: "/images/mateusz-prusaczyk.jpg",
      },
    ],
  },
  credibility: {
    sectionTitle: "Built on Real AI Leadership",
    name: "Viktor Malyi",
    title:
      "8 years in machine learning. I built the AI platform team at Europe\u2019s biggest EdTech scaleup from scratch.",
    bio: "5 production AI systems, evaluation and monitoring pipelines, autonomous AI agents. That\u2019s the engineering side. AI transformation OKRs, tooling standards rolled out per engineer, adoption measurement and reporting. That\u2019s the leadership side. I owned both for 3 years. I know what breaks when AI is everyone\u2019s side project and what changes when someone owns it. Now I do that for companies that can\u2019t wait 12 months to hire.",
    highlights: [
      "8 Years in Machine Learning",
      "5 Production AI Systems",
      "AI Platform Team Lead \u2014 3 Years",
      "Org-Wide AI Enablement, Built From Scratch",
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        question: "How is this different from hiring a full-time Head of AI?",
        answer:
          "A full-time hire takes 6\u201312 months to find, onboard, and reach effectiveness. I start delivering in the first weeks. And if you want to hire permanently later, I\u2019ll help you define the role so you hire right. Think of it as a bridge: you get AI leadership now, not in a year.",
      },
      {
        question: "How long does a typical engagement last?",
        answer:
          "3\u20139 months. I stay until the org has internal capability that doesn\u2019t depend on me. The goal is to make myself unnecessary, not to create a permanent dependency.",
      },
      {
        question: "What happens when the engagement ends?",
        answer:
          "That\u2019s the whole point of the engagement: building internal capability. Handover is planned from day one. When I leave, your team continues with the strategy, the processes, and the knowledge to sustain it.",
      },
      {
        question: "We think we can figure this out internally.",
        answer:
          "Maybe. Ask yourself: what does your AI iteration loop look like right now? If there isn\u2019t one, that\u2019s the gap. The companies that figure it out internally all have someone who owns AI end-to-end. If you have that person, you don\u2019t need me.",
      },
      {
        question:
          "What if we\u2019re not sure we need AI leadership \u2014 we just need better tooling?",
        answer:
          'Tooling without ownership stalls. That\u2019s why 95% of AI pilots don\u2019t deliver ROI. The tools aren\u2019t the problem, the missing owner is. A 2-week assessment sprint will show you what "owned" looks like vs. what you have now.',
      },
      {
        question: "How do you measure whether this is working?",
        answer:
          "That\u2019s usually the first thing I fix. Most companies run AI on \u201cfelt truth\u201d \u2014 the team believes it\u2019s helping but can\u2019t prove it. I establish concrete metrics from the start: adoption rates, iteration cycles, feature performance, time-to-value. If we can\u2019t measure it, we can\u2019t improve it.",
      },
    ],
  },
  finalCta: {
    title: "AI delivers when someone owns it. Let\u2019s talk.",
    subtitle:
      "30-minute intro call. No commitment. You\u2019ll know by the end whether this is the right fit.",
    cta: "Get AI Leadership Now",
    guarantee: "",
  },
};

const de: SiteContent = {
  hero: {
    headline: "Sie haben in KI investiert. Gebracht hat es wenig.",
    description:
      "Die Gesch\u00e4ftsf\u00fchrung hat es zur Priorit\u00e4t erkl\u00e4rt. Tools wurden gekauft, Piloten liefen. Doch niemand verantwortet die KI-Strategie, niemand iteriert die Piloten, und die Nutzung ist inkonsistent \u00fcber Teams hinweg. \n\nIch \u00fcbernehme die KI-Verantwortung: Strategie, Architektur, Team-Enablement und Governance, bis Ihr Team KI eigenst\u00e4ndig beherrscht.",
    cta: "KI-Leadership jetzt sichern",
  },
  problem: {
    title:
      "Niemand ist f\u00fcr KI verantwortlich in Ihrem Unternehmen. Kein Wunder, dass sich KI nicht auszahlt.",
    subtitle:
      "Ihr Unternehmen hat in KI investiert: Tools, Lizenzen, ein Pilotprojekt oder zwei. Doch niemand verantwortet das Ergebnis. Piloten werden geliefert und nie wieder angefasst. KI l\u00e4uft als Nebenprojekt aller. Niemand wei\u00df, ob irgendetwas davon tats\u00e4chlich funktioniert. Die Investition ist passiert. Die F\u00fchrung nicht.",
    points: [
      {
        title: "Kein Verantwortlicher, kein Fortschritt",
        description:
          "KI steht in den OKRs jedes Teams und ist der eigentliche Job von niemandem. Die Strategie ist verteilt, Piloten werden geliefert, aber niemand iteriert. Initiative nach Initiative startet stark und stirbt leise.",
      },
      {
        title: "Pilot-to-Production-L\u00fccke",
        description:
          "Der Proof of Concept funktioniert. Die Skalierung passiert nie. \u201eViele sind in der Lage im Labor ganz tolle Use Cases am Laufen zu kriegen, daran scheitern die meisten.\u201c Es ist kein technisches Problem, es ist organisatorisch. Niemand hat die Verantwortung, KI vom Demo zum Ergebnis zu bringen.",
      },
      {
        title:
          "Die Gesch\u00e4ftsf\u00fchrung fragt. Sie haben noch keine Antwort.",
        description:
          "Investoren wollen KI-Reife. Der CEO will eine Strategie bis Quartalsende. Sie sind bereits ausgelastet mit Hiring, Architektur und Delivery, und jetzt kommt KI dazu. Der Druck ist real. Die Kapazit\u00e4t, es umzusetzen, nicht.",
      },
      {
        title: "KI bleibt in der IT-Ecke",
        description:
          "KI wird an IT oder Engineering delegiert. Die behandeln es als Tooling-Entscheidung: Lizenzen verwaltet, Zugang konfiguriert. Aber die Business-Impact-Ebene, Strategie, Produktintegration, cross-funktionales Enablement, wird nie gestaltet. \u201eDann wird das ganz schnell als ein weiteres IT-Thema abgehakt und ist im Grunde gestorben.\u201c",
      },
    ],
    sources: [],
  },
  framework: {
    title: "Warum das immer wieder passiert",
    subtitle:
      "Vier strukturelle L\u00fccken, die kein Tooling-Budget der Welt schlie\u00dft. Jede einzelne braucht jemanden, der das Ergebnis verantwortet, keinen weiteren Anbieter, keinen weiteren Piloten.",
    blockers: [
      {
        number: "01",
        title: "Keine dedizierte KI-F\u00fchrung",
        problem:
          "KI-Verantwortung ist auf Teams verteilt, die bereits Vollzeitjobs haben. Niemand verantwortet die Strategie, niemand priorisiert \u00fcber Initiativen hinweg, niemand schlie\u00dft die Schleife zwischen \u201egeliefert\u201c und \u201eliefert Wert.\u201c \u201eEs ist kein Plus-eins-Thema f\u00fcr irgendjemanden\u201c \u2014 es kann kein Zusatzthema f\u00fcr eine bestehende Rolle sein.",
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
          "Der Proof of Concept hat funktioniert. Technisch. Dann hat niemand skaliert, weil niemand die Verantwortung hatte. \u201eDas eine ist einfach etwas in Pilot zu bringen, das andere ist dann etwas von Pilot in Skalierung zu bringen, ein Jahr sp\u00e4ter wird das Tool \u00fcberhaupt nicht genutzt, obwohl das eine gute Idee war.\u201c",
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
          "Die F\u00fchrung sagte \u201eNutzt KI.\u201c Niemand sagte wie. Kein Schulungsprogramm, keine gemeinsamen Standards, keine bew\u00e4hrten Workflows. Leute haben mit \u00fcberh\u00f6hten Erwartungen mal KI-Tools getestet, waren entt\u00e4uscht und sagen jetzt \u201edas kann nichts.\u201c Andere haben nie angefangen.",
        indicators: [
          "Kein formales KI-Onboarding oder Schulungsprogramm",
          "Entwickler nutzen KI inkonsistent, manche voll, die meisten gar nicht",
          "Keine gemeinsamen Standards f\u00fcr \u201egute KI-Nutzung\u201c",
          "Fr\u00fche schlechte Erfahrungen haben die Motivation zerst\u00f6rt, niemand hat es nochmal versucht",
        ],
      },
      {
        number: "04",
        title: "Kein Iterationsloop, keine Messung",
        problem:
          "Features werden geliefert und niemand fragt, ob sie funktioniert haben. Keine Evaluation, kein Monitoring, keine Feedback-Schleife zwischen dem, was geliefert wurde, und dem, was Nutzer tats\u00e4chlich brauchen. \u201eMan fragt nach sechs Monaten: Woher wissen wir jetzt, ob wir wirklich besser geworden sind? Au\u00dfer vielleicht so eine gef\u00fchlte Wahrheit.\u201c",
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
          "Wir sprechen 30 Minuten. Ich verstehe, wo Ihre Organisation mit KI steht: was l\u00e4uft, was stockt, was fehlt. Am Ende wissen Sie, ob es passt.",
      },
      {
        title: "Assessment und Strategie",
        description:
          "Ich bewerte Ihre KI-Reife: Team-F\u00e4higkeiten, Datengrundlage, Tooling, Wissensl\u00fccken. Sie erhalten ein Strategie-Briefing mit priorisiertem 90-Tage-Aktionsplan und KI-Transformations-OKRs. Hier entdecken die meisten Unternehmen, dass das eigentliche Problem nicht die Technik ist.",
      },
      {
        title: "Embedded KI-Leadership",
        description:
          "Ich trete Ihrer Organisation als Interim Head of AI bei, mit voller Verantwortung. Das bedeutet: Strategie definieren, Tooling-Standards und Enablement pro Team ausrollen, Evaluierungs- und Monitoring-Pipelines aufbauen und messen, was tats\u00e4chlich funktioniert. Ich bleibe, bis Ihr Team es ohne mich tr\u00e4gt. Typische Laufzeit: 3\u20139 Monate.",
      },
    ],
  },
  tiers: {
    title: "W\u00e4hlen Sie Ihren Weg",
    subtitle:
      "Vom fokussierten Assessment bis zum eingebetteten KI-Leadership, w\u00e4hlen Sie das Engagement, das zu Ihrer Situation passt.",
    tiers: [
      {
        name: "Klarheit schaffen",
        description:
          "Ein fokussierter Sprint, um zu verstehen, wo Sie stehen und wo Sie anfangen sollten.",
        features: [
          "Ist-Zustand KI-Assessment: Tooling, Piloten, Workflows, L\u00fccken",
          "Team-KI-Kompetenz und Wissensl\u00fccken-Analyse",
          "Datengrundlagen-Assessment: Bereitschaft, Qualit\u00e4t, Zug\u00e4nglichkeit f\u00fcr KI-Use-Cases",
          "Priorisierter 90-Tage-Aktionsplan mit schriftlichem Strategie-Briefing",
        ],
        cta: "Klarheit schaffen",
        bookingUrl: "https://calendar.app.google/PZFG7xyfkemX6zhT7",
      },
      {
        name: "Interim Head of AI",
        description:
          "Alles aus Klarheit schaffen, plus: Ich trete Ihrem Team als Head of AI bei, mit voller Verantwortung f\u00fcr ein Team.",
        features: [
          "KI-Strategie und Transformations-OKR-Definition f\u00fcr Ihr Team",
          "KI-f\u00e4hige Infrastruktur: Dokumentationsstandards, Context Engineering, Feedback-Schleifen",
          "Strukturiertes KI-Enablement: Tooling-Standards, Workflow-Templates, Adoption-Rollout",
          "KI-Monitoring und Messung: Evaluierungs-Pipelines, Adoption-Tracking, ROI-Reporting",
          "Anbieter-Evaluation und Governance-Framework",
        ],
        cta: "Interim Head of AI",
        bookingUrl: "https://calendar.app.google/CBWXPN9sukcTCBve9",
      },
      {
        name: "\u00dcbergangsbegleitung",
        description:
          "Alles aus Interim Head of AI, skaliert auf die gesamte Organisation. Plus laufende Unterst\u00fctzung nach meinem Abgang.",
        features: [
          "Organisationsweiter KI-Enablement-Rollout \u00fcber alle Teams",
          "Cross-funktionale KI-Koordination und Priorisierung",
          "Unterst\u00fctzung bei der Definition der Vollzeit-KI-Rolle und Kandidaten-Evaluation",
          "Wissenstransfer-Dokumentation und Team-\u00dcbergabe",
          "Monatliche Advisory-Calls und asynchroner Support w\u00e4hrend der \u00dcbergangsphase",
        ],
        cta: "\u00dcbergangsbegleitung",
        bookingUrl: "https://calendar.app.google/DjDENLuRcaVN2aJRA",
      },
    ],
  },
  testimonials: {
    sectionTitle: "Was Kunden sagen",
    testimonials: [
      {
        name: "Christian Liu",
        title: "Co-Founder & CEO @ AskPally",
        quote:
          "Viktor is an exceptional advisor who is not only extremely reliable and responsive but also deeply committed to his work. His assessments and strategic advice were incredibly valuable and were instrumental in our planning process. Viktor helped us set the right priorities for our AI-heavy startup by shifting our attention from purely technical questions to critical business factors in our target market. He has a unique combination of deep tech knowledge and real-world startup experience that provides founders with essential strategic clarity.",
        image: "/images/christian-liu.jpg",
      },
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
    sectionTitle: "Fundiert in echter KI-F\u00fchrung",
    name: "Viktor Malyi",
    title:
      "8 Jahre Machine Learning. Ich habe das KI-Platform-Team beim gr\u00f6\u00dften EdTech-Scaleup Europas von Grund auf aufgebaut.",
    bio: "5 Produktions-KI-Systeme, Evaluierungs- und Monitoring-Pipelines, autonome KI-Agenten. Das ist die Engineering-Seite. KI-Transformations-OKRs, Tooling-Standards f\u00fcr alle Entwickler ausgerollt, Adoption-Messung und Reporting. Das ist die F\u00fchrungsseite. Ich habe beides 3 Jahre lang verantwortet. Ich wei\u00df, was passiert, wenn KI das Nebenprojekt aller ist, und was sich \u00e4ndert, wenn jemand es verantwortet. Jetzt mache ich das f\u00fcr Unternehmen, die nicht 12 Monate auf eine Einstellung warten k\u00f6nnen.",
    highlights: [
      "8 Jahre Machine Learning",
      "5 Produktions-KI-Systeme",
      "KI-Platform-Team-Lead \u2014 3 Jahre",
      "Organisationsweites KI-Enablement, von Grund auf aufgebaut",
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        question:
          "Wie unterscheidet sich das von einer Vollzeit-Einstellung als Head of AI?",
        answer:
          "Eine Vollzeit-Einstellung dauert 6\u201312 Monate f\u00fcr Suche, Onboarding und Wirksamkeit. Ich liefere ab den ersten Wochen. Und wenn Sie sp\u00e4ter permanent einstellen wollen, helfe ich Ihnen, die Rolle richtig zu definieren. Sehen Sie es als Br\u00fccke: Sie bekommen KI-F\u00fchrung jetzt, nicht in einem Jahr.",
      },
      {
        question: "Wie lange dauert ein typisches Engagement?",
        answer:
          "3\u20139 Monate. Ich bleibe, bis die Organisation interne F\u00e4higkeiten hat, die nicht von mir abh\u00e4ngen. Das Ziel ist, mich \u00fcberfl\u00fcssig zu machen, nicht eine permanente Abh\u00e4ngigkeit zu schaffen.",
      },
      {
        question: "Was passiert, wenn das Engagement endet?",
        answer:
          "Genau darum geht es beim Engagement: interne F\u00e4higkeiten aufbauen. Die \u00dcbergabe wird ab Tag eins geplant. Wenn ich gehe, macht Ihr Team weiter, mit der Strategie, den Prozessen und dem Wissen, um es eigenst\u00e4ndig zu tragen.",
      },
      {
        question: "Wir glauben, wir k\u00f6nnen das intern l\u00f6sen.",
        answer:
          "Vielleicht. Fragen Sie sich: Wie sieht Ihr KI-Iterationsloop gerade aus? Wenn es keinen gibt, das ist die L\u00fccke. Die Unternehmen, die es intern schaffen, haben alle jemanden, der KI end-to-end verantwortet. Wenn Sie diese Person haben, brauchen Sie mich nicht.",
      },
      {
        question:
          "Was, wenn wir nicht sicher sind, ob wir KI-F\u00fchrung brauchen \u2014 wir brauchen nur besseres Tooling?",
        answer:
          "Tooling ohne Ownership stagniert. Deshalb liefern 95% der KI-Piloten keinen ROI. Die Tools sind nicht das Problem, der fehlende Verantwortliche ist es. Ein 2-w\u00f6chiger Assessment-Sprint zeigt Ihnen, wie \u201everantwortet\u201c im Vergleich zu dem, was Sie jetzt haben, aussieht.",
      },
      {
        question: "Wie messen Sie, ob es funktioniert?",
        answer:
          "Das ist normalerweise das Erste, was ich \u00e4ndere. Die meisten Unternehmen fahren KI auf \u201egef\u00fchlter Wahrheit\u201c \u2014 das Team glaubt, es hilft, kann es aber nicht beweisen. Ich etabliere konkrete Metriken von Anfang an: Adoptionsraten, Iterationszyklen, Feature-Performance, Time-to-Value. Was wir nicht messen k\u00f6nnen, k\u00f6nnen wir nicht verbessern.",
      },
    ],
  },
  finalCta: {
    title: "KI liefert, wenn jemand sie verantwortet. Lassen Sie uns reden.",
    subtitle:
      "30 Minuten Erstgespr\u00e4ch. Keine Verpflichtung. Am Ende wissen Sie, ob es passt.",
    cta: "KI-Leadership jetzt sichern",
    guarantee: "",
  },
};

export const content: Record<Locale, SiteContent> = { en, de };
