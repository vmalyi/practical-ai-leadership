import type { Locale } from "@/context/LocaleContext";

export interface HeroContent {
  eyebrow: string;
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
  contrast: string;
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
  indicatorsLabel: string;
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

export interface AreasItem {
  title: string;
  description: string;
}

export interface AreasContent {
  title: string;
  subtitle: string;
  items: AreasItem[];
}

export interface Tier {
  name: string;
  description: string;
  body: string;
  features: string[];
}

export interface TiersContent {
  title: string;
  subtitle: string;
  badge: string;
  includesLabel: string;
  cta: string;
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
  areas: AreasContent;
  tiers: TiersContent;
  testimonials: TestimonialsContent;
  credibility: CredibilityContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
}

const en: SiteContent = {
  hero: {
    eyebrow: "Built-In AI for SME owners and teams",
    headline: "AI built-in.\nSame team, more output.",
    description:
      "Your team can do more with the people you already have. We build AI into the work you and your team do every day, so output goes up while headcount stays flat.",
    cta: "See where AI makes your team more efficient",
  },
  problem: {
    title: "Recognize any of these?",
    subtitle:
      "Every time you want to grow, the answer comes back the same: hire. But you and your team can do more with the headcount you already have, once AI is built into how the work gets done.",
    points: [
      {
        title: "Growth always means another hire.",
        description:
          "A new initiative, a bigger target, more demand, and the first move is always to hire. The hire is slow, expensive, and a bet, while you and your team could do more.",
      },
      {
        title: "Your best people are the bottleneck.",
        description:
          "The key judgment for running the business lies with a few people on your team. They are spread across various heads and scattered notes. It stays stuck there, and when they are away, it leaves with them.",
      },
      {
        title: "You cannot trust the output for real work.",
        description:
          "Same input, different answer. Someone has to check every result, so the AI never actually saves anyone time.",
      },
      {
        title: "You cannot tell if it is paying off.",
        description:
          "You rolled out AI, but nobody is measuring it. You cannot say who really uses it, or whether it made anything faster, better, or cheaper. So you are guessing.",
      },
    ],
    contrast:
      "Where you want to be: the same team shipping more, your experts' judgment working even when they're out, and data that proves it. That is what we build.",
  },
  framework: {
    title: "Why off-the-shelf AI automations stall",
    subtitle:
      "Most AI automation connects your apps but stops when real human judgment is needed. Here are the four places it stalls.",
    indicatorsLabel: "Indicators",
    blockers: [
      {
        number: "01",
        title: "No process to build on",
        problem:
          "AI bolted onto a process nobody has written down has nothing to stand on. The tool is generic; your work is specific. We map the business workflow first, so the AI builds on how you actually work instead of guessing.",
        indicators: [
          "The real method lives in someone's head, not on paper",
          "Every AI output needs heavy rework to match how you work",
          '"It does not really get our process"',
        ],
      },
      {
        number: "02",
        title: "It gives a different answer every time",
        problem:
          "Ask a model to run a real business task and the result changes from one run to the next. Reliability comes from engineering, not a better prompt. We put real code where the work must be exact, and let the model decide only where judgment belongs.",
        indicators: [
          "Same input, different result, run to run",
          "A person has to check every output before it is used",
          "Hallucinations on anything that touches numbers",
        ],
      },
      {
        number: "03",
        title: "Licenses handed out, no literacy",
        problem:
          "Access is not adoption. If licenses are handed out without teaching literacy, a few skilled users will get ahead. Most others will just go back to their old ways. We build the literacy first, so the whole team adopts it, not just the few.",
        indicators: [
          "High adoption among the power users, near zero for everyone else",
          "No shared standard for what good AI use looks like",
          "Early bad experiences killed the motivation to retry",
        ],
      },
      {
        number: "04",
        title: "Nobody instrumented it",
        problem:
          'The spend happened, the measurement did not. With no adoption baseline and no tie to a business metric, "is this working?" has no answer beyond a feeling. We instrument it from the start, so the answer is a number.',
        indicators: [
          "No data on who uses AI, or for what",
          "No number that ties AI to a business outcome",
          "The board asks for ROI and the room goes quiet",
        ],
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    subtitle:
      "We stop asking which role to hire and start asking which business workflow is the bottleneck. Then we encode the judgment the work needs as Skills, not just wire your apps together. Four stages.",
    steps: [
      {
        title: "Audit",
        description:
          "We outline your business workflows and key decisions. Then, we document the process. You cannot build AI on a process no one has written down.",
      },
      {
        title: "Augment",
        description:
          "We turn your business workflows into Skills, and your team runs them by hand. They use them on real work, refine them, and get a feel for what works and what does not, with us alongside.",
      },
      {
        title: "Hand over",
        description:
          "Once your team has a good feel for running the Skills by hand, it is time to hand them to autonomous AI agents. The agents run the business workflow start to finish, and you win back even more time.",
      },
      {
        title: "Maintain",
        description:
          "Two ways to keep it running. We enable your team to maintain it themselves, with no outside dependency. Or, if you prefer, we maintain it for you.",
      },
    ],
  },
  areas: {
    title: "Built into the work your business already runs on",
    subtitle:
      "Most SMEs run on the same four functions. We have hands-on experience automating business processes across all four. Here is the kind of work AI can take off your team's plate.",
    items: [
      {
        title: "Content production",
        description:
          "Turn one recording into a week of posts: trend research, outline, edit, and captions, ready to publish.",
      },
      {
        title: "Marketing & GTM",
        description:
          "Pull your ideal accounts, research each one, and draft personalized outreach, so a small team reaches like a big one.",
      },
      {
        title: "Engineering",
        description:
          "Train an agent on your codebase and standards. This lets engineers shift from writing boilerplate code to reviewing completed pull requests.",
      },
      {
        title: "Sales",
        description:
          "It listens to the call, updates the CRM, and drafts the follow-up, so reps just review and send.",
      },
    ],
  },
  tiers: {
    title: "Where to start",
    subtitle:
      "Three ways to start, from a focused map to a system your team fully owns.",
    badge: "Most common",
    includesLabel: "Includes",
    cta: "Book a discovery call",
    tiers: [
      {
        name: "Audit",
        description: "Find where AI should be built in.",
        body: "We map your workflows and find key bottlenecks. Then, we give you a clear plan. It shows what to build first, what it needs, and what it will free up. Yours to act on, with us or on your own.",
        features: [
          "A map of your business workflows and bottlenecks",
          "A prioritized plan: first, next, later",
          "The time and effort it would free",
        ],
      },
      {
        name: "Build",
        description: "The full arc, from audit to handover.",
        body: "We create top-priority business workflows as Skills for your team. We set the standards to ensure scalability. Finally, we provide a system that your team can fully own.",
        features: [
          "Everything in Audit",
          "Skills built and validated on your real business workflows",
          "We enable your team to run it",
          "Impact measured against numbers that matter to you",
        ],
      },
      {
        name: "Maintain",
        description: "The build, kept current.",
        body: "The full build, then kept current as your business changes, with new Skills added as your needs grow.",
        features: [
          "Everything in Build",
          "New Skills as needs grow",
          "Ongoing improvement",
          "Maintained by us",
        ],
      },
    ],
  },
  testimonials: {
    sectionTitle: "What Clients Say",
    testimonials: [
      {
        name: "Leah Rott",
        title: "Co-Founder & Managing Director @ saferspaces",
        quote:
          "Viktor conducted an in-depth review of how we use Claude at saferspaces – with a clear outcome: concrete, immediately actionable recommendations on where we can deploy our resources even more efficiently. The context makes this especially valuable: as a small team, we already work intensively with Claude every day – from sales to proposal creation to communications – covering tasks that would otherwise require significantly more staff capacity. The fact that Viktor still identified meaningful optimization potential in this advanced setup speaks to the depth of his expertise. His knowledge of putting AI to productive use is comprehensive and impressive – and above all, practical. No abstract concepts, just recommendations we could integrate directly into our workflows. The collaboration was professional, well-structured, and on equal footing. If you're serious about advancing AI in your company in a way that pays off, Viktor is the right person. Highly recommended.",
        image: "/images/leah-rott.jpg",
      },
      {
        name: "Gerret Halberstadt",
        title: "Co-Founder & Managing Director @ saferspaces",
        quote:
          "Even though we were already using AI extensively, the audit with Viktor made clear where we could apply it even more effectively. He took the time to understand how we actually work first, and from there spotted the areas with the most potential for us. What stood out was how concrete the takeaways were. Not abstract advice, but specific places in our workflows where we could go further. Right after the audit we started implementing the first recommendations, and we're already seeing the actual time savings.",
        image: "/images/gerret-halberstadt.jpg",
      },
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
        // TODO(Viktor): simpleclub disclosure, resolve before publish (keep local-only until then).
        // Deferred to the testimonials/simpleclub revisit. Optional reframed quote (verify with Mateusz):
        // "Viktor led the AI transformation at our company. He defined the strategy, rolled out tooling standards per engineer, and built the adoption measurement we were missing. The team went from inconsistent AI usage to a structured, measurable approach. He made AI everyone's capability, not just a few enthusiasts' side project."
        quote:
          "Viktor has been helping us to adopt AI in simpleclub. He ran workshops for the team on how to use Claude Code, which turned out to be super useful and helped my team deliver good results faster. He also ran a system-wide initiative to cover code of our services with AGENTS.md files in simpleclub. After the initiative, we experienced a huge improvement in quality of the AI-generated code.",
        image: "/images/mateusz-prusaczyk.jpg",
      },
    ],
  },
  credibility: {
    sectionTitle: "Built on real delivery",
    name: "Viktor Malyi",
    title:
      "8 years in machine learning. We build AI into businesses, and run our own on it.",
    bio: "We do not just advise on AI, we build it in. We run our practice with about 80 skills and agents. These help with lead discovery, outreach, research, and client delivery. We built and use them daily. We turn an expert's judgment into a Skill that operates consistently. It runs on its own, needing no one to oversee it. Eight years in machine learning taught us exactly where AI is reliable and where it breaks. That is what it takes to build AI into work a business depends on.",
    highlights: [
      "8 years in machine learning",
      "~80 Skills run our own practice",
      "Expert judgment encoded into Skills",
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        question:
          "Couldn't our own people just build this in-house? Why pay you?",
        answer:
          "Often you can, and where you can, you should. But doing it well is its own discipline. We build Skills a standardized way, the same one we run our own practice on, so they hold up instead of working once then drifting. When we need the highest degree of reproducibility, we enforce Skills using real scripts. This approach is more like software engineering than prompt-writing. We make it reliable, get it adopted, hand it over, and leave. If your team already has that and the time to harden it, you do not need us, and we will say so.",
      },
      {
        question:
          "After the entry Audit, what does the full build cost? We do not want a black box.",
        answer:
          "The Audit is a fixed price, and its job is to remove that guesswork. You finish it with the process written down, a scoped plan, and a price for the build before you commit. You decide what to build and what to leave. No automatic escalation, no surprise total. If the build is not worth it, the Audit showed you that, and you stop there.",
      },
      {
        question:
          "Can we maintain and extend this ourselves later, or are we tied to you for every change?",
        answer:
          "Handover is built in from day one. The Skills are stored in your own repositories as simple Markdown. This way, your team can read, edit, and expand them without our help. If you would rather we keep maintaining it, we can, but that is your choice, not a dependency we design in.",
      },
      {
        question:
          "How do we trust the AI's output for high-stakes work, when the numbers or the verdict have to be right?",
        answer:
          "This is the right thing to worry about, and it is an engineering problem, not a hope. When accuracy matters, like with numbers, rules, and thresholds, we run real code. This way, the same input always produces the same output. The model only handles what needs real judgment, and you set the bar for that. When an expert disagrees with a verdict, we calibrate against your real cases. Nothing here is a black box.",
      },
      {
        question:
          "How is this more than a thin wrapper around a manual process? We do not want to pay for hype.",
        answer:
          "Agreed, and we score it the same way you do. A wrapper that re-labels manual steps is worth nothing. We write down the process. Then we change how the work flows. We identify what runs end to end. We pinpoint where real code replaces manual effort. We also see how the model saves time for human judgment. If we cannot show what works differently on your real data, we have not earned the spend.",
      },
    ],
  },
  finalCta: {
    title: "Do more with the team you already have.",
    subtitle:
      "A 30-minute discovery call to see whether this is a fit for you.",
    cta: "See where AI makes your team more efficient",
    guarantee: "",
  },
};

const de: SiteContent = {
  hero: {
    eyebrow: "Built-In KI für Inhaber und Teams im Mittelstand",
    headline: "KI built-in.\nGleiches Team, mehr Wirkung.",
    description:
      "Euer Team kann mehr leisten, mit den Leuten, die ihr schon habt. Wir bauen KI in die Abläufe ein, mit denen euer Team schon arbeitet. So steigt die Wirkung, ohne dass die Teamgröße wächst.",
    cta: "Seht, wo KI euch voranbringt",
  },
  problem: {
    title: "Kennt ihr das?",
    subtitle:
      "Jedes Mal, wenn ihr wachsen wollt, heißt die Antwort gleich: einstellen. Dabei kann euer Team mehr leisten mit den Leuten, die ihr schon habt, sobald KI in eure Abläufe eingebaut ist.",
    points: [
      {
        title: "Wachstum heißt immer: neue Stelle.",
        description:
          "Ein neues Vorhaben, ein größeres Ziel, mehr Nachfrage, und der erste Schritt ist immer eine Einstellung. Die ist langsam, teuer und ein Risiko, dabei könnte euer Team mehr leisten.",
      },
      {
        title: "Eure besten Leute sind der Engpass.",
        description:
          "Die Erfahrung, die euer Geschäft trägt, liegt bei wenigen Leuten. Es steckt in einzelnen Köpfen und verstreuten Notizen. Dort bleibt es hängen, und wenn diese Leute fehlen, geht es mit ihnen.",
      },
      {
        title: "Den Ergebnissen könnt ihr bei echter Arbeit nicht trauen.",
        description:
          "Gleiche Eingabe, andere Antwort. Jemand muss jedes Ergebnis prüfen, also spart die KI am Ende niemandem Zeit.",
      },
      {
        title: "Ihr könnt nicht sagen, ob es sich rechnet.",
        description:
          "Ihr habt KI eingeführt, aber niemand misst sie. Ihr könnt nicht sagen, wer sie wirklich nutzt oder ob etwas schneller, besser oder günstiger wurde. Also ratet ihr.",
      },
    ],
    contrast:
      "Wo ihr hinwollt: dasselbe Team liefert mehr, die Erfahrung eurer Experten wirkt auch dann, wenn sie nicht da sind, und Zahlen belegen es. Genau das bauen wir.",
  },
  framework: {
    title: "Warum KI von der Stange auf halbem Weg liegen bleibt",
    subtitle:
      "Standard-Tools verdrahten eure Apps und sind raus, sobald echte Erfahrung gefragt ist. Hier sind die vier typischen Stellen.",
    indicatorsLabel: "Anzeichen",
    blockers: [
      {
        number: "01",
        title: "Kein Prozess als Fundament",
        problem:
          "KI, die auf einen Prozess geschraubt wird, den niemand aufgeschrieben hat, steht auf nichts. Das Tool ist generisch, eure Arbeit ist spezifisch. Wir erfassen zuerst den Geschäftsablauf, damit die KI auf eurer echten Arbeitsweise aufbaut, statt zu raten.",
        indicators: [
          "Die eigentliche Methode steckt in einem Kopf, nicht auf Papier",
          "Jedes KI-Ergebnis braucht starke Nacharbeit, damit es zu eurer Arbeit passt",
          "„Es versteht unseren Prozess nicht wirklich.“",
        ],
      },
      {
        number: "02",
        title: "Jedes Mal eine andere Antwort",
        problem:
          "Lasst ein Modell eine echte Geschäftsaufgabe erledigen, und das Ergebnis ändert sich von Lauf zu Lauf. Verlässlichkeit kommt aus dem Engineering, nicht aus einem besseren Prompt. Wir setzen echten Code dort ein, wo die Arbeit exakt sein muss, und lassen das Modell nur dort entscheiden, wo Erfahrung zählt.",
        indicators: [
          "Gleiche Eingabe, anderes Ergebnis, von Lauf zu Lauf",
          "Ein Mensch muss jedes Ergebnis prüfen, bevor es verwendet wird",
          "Halluzinationen bei allem, was mit Zahlen zu tun hat",
        ],
      },
      {
        number: "03",
        title: "Lizenzen verteilt, keine Kompetenz",
        problem:
          "Zugang ist noch keine Nutzung. Werden Lizenzen verteilt, ohne Kompetenz aufzubauen, ziehen ein paar geübte Nutzer davon. Die meisten anderen fallen in alte Muster zurück. Wir bauen zuerst die Kompetenz auf, damit das ganze Team mitzieht, nicht nur die wenigen.",
        indicators: [
          "Hohe Nutzung bei den Power-Usern, fast null bei allen anderen",
          "Kein gemeinsamer Standard dafür, wie guter KI-Einsatz aussieht",
          "Schlechte erste Erfahrungen haben die Lust auf einen zweiten Versuch zerstört",
        ],
      },
      {
        number: "04",
        title: "Niemand hat es messbar gemacht",
        problem:
          "Das Geld floss, die Messung nicht. Ohne Ausgangswert für die Nutzung und ohne Bezug zu einer Geschäftskennzahl hat „Funktioniert das?“ keine Antwort außer einem Bauchgefühl. Wir machen es von Anfang an messbar, damit die Antwort eine Zahl ist.",
        indicators: [
          "Keine Daten dazu, wer KI nutzt, und wofür",
          "Keine Zahl, die KI mit einem Geschäftsergebnis verbindet",
          "Der Beirat fragt nach dem ROI, und es wird still im Raum",
        ],
      },
    ],
  },
  howItWorks: {
    title: "So funktioniert's",
    subtitle:
      "Wir fragen nicht mehr, welche Stelle wir besetzen, sondern welcher Geschäftsablauf der Engpass ist. Dann fassen wir die Erfahrung, die die Arbeit braucht, in Skills, statt nur eure Apps zu verdrahten. Vier Phasen.",
    steps: [
      {
        title: "Audit",
        description:
          "Wir bilden eure Geschäftsabläufe und die wichtigsten Entscheidungen ab. Dann dokumentieren wir den Prozess. Auf einem Prozess, den niemand aufgeschrieben hat, lässt sich keine KI bauen.",
      },
      {
        title: "Augment",
        description:
          "Wir bauen eure Geschäftsabläufe als Skills, und euer Team führt sie von Hand aus. Sie nutzen sie an echter Arbeit, verfeinern sie und bekommen ein Gefühl dafür, was funktioniert und was nicht, mit uns an der Seite.",
      },
      {
        title: "Übergabe",
        description:
          "Sobald euer Team ein gutes Gefühl dafür hat, die Skills von Hand auszuführen, ist es Zeit, sie an autonome KI-Agenten zu übergeben. Die Agenten führen den Geschäftsablauf von Anfang bis Ende aus, und ihr gewinnt noch mehr Zeit zurück.",
      },
      {
        title: "Betrieb",
        description:
          "Zwei Wege, es am Laufen zu halten. Wir befähigen euer Team, es selbst zu pflegen, ohne Abhängigkeit von außen. Oder, wenn ihr wollt, übernehmen wir die Pflege für euch.",
      },
    ],
  },
  areas: {
    title: "Eingebaut in die Arbeit, mit der euer Geschäft schon läuft",
    subtitle:
      "Die meisten Mittelständler laufen auf denselben vier Funktionen. Wir haben praktische Erfahrung darin, Geschäftsprozesse in allen vieren zu automatisieren. Hier ist die Art von Arbeit, die KI eurem Team abnehmen kann.",
    items: [
      {
        title: "Content-Produktion",
        description:
          "Aus einer Aufnahme wird eine Woche voller Posts: Trendrecherche, Gliederung, Schnitt und Untertitel, fertig zum Veröffentlichen.",
      },
      {
        title: "Marketing & GTM",
        description:
          "Eure Wunschkunden herausfiltern, jeden einzelnen recherchieren und personalisierte Ansprache entwerfen, damit ein kleines Team so viel erreicht wie ein großes.",
      },
      {
        title: "Engineering",
        description:
          "Einen Agenten auf eure Codebasis und eure Standards trainieren. So schreiben Entwickler keinen Boilerplate-Code mehr, sondern prüfen fertige Pull Requests.",
      },
      {
        title: "Vertrieb",
        description:
          "Die KI hört im Gespräch mit, pflegt das CRM und entwirft die Nachfass-Mail, sodass eure Leute nur noch prüfen und senden.",
      },
    ],
  },
  tiers: {
    title: "Wo ihr anfangt",
    subtitle:
      "Drei Wege zum Start, von einer gezielten Übersicht bis zu einem System, das eurem Team ganz gehört.",
    badge: "Am häufigsten",
    includesLabel: "Enthält",
    cta: "Erstgespräch vereinbaren",
    tiers: [
      {
        name: "Audit",
        description: "Findet, wo KI eingebaut gehört.",
        body: "Wir erfassen eure Abläufe und finden die zentralen Engpässe. Dann geben wir euch einen klaren Plan. Er zeigt, was zuerst zu bauen ist, was es braucht und was es freisetzt. Ihr entscheidet, was ihr damit macht, mit uns oder allein.",
        features: [
          "Eine Übersicht eurer Geschäftsabläufe und Engpässe",
          "Ein priorisierter Plan: zuerst, danach, später",
          "Die Zeit und der Aufwand, die das freisetzt",
        ],
      },
      {
        name: "Build",
        description: "Der ganze Bogen, vom Audit bis zur Übergabe.",
        body: "Wir bauen eure wichtigsten Geschäftsabläufe als Skills für euer Team. Wir setzen die Standards, damit es skaliert. Am Ende steht ein System, das euer Team ganz übernehmen kann.",
        features: [
          "Alles aus dem Audit",
          "Skills, gebaut und an euren echten Geschäftsabläufen erprobt",
          "Wir befähigen euer Team, es zu betreiben",
          "Wirkung gemessen an Zahlen, die für euch zählen",
        ],
      },
      {
        name: "Maintain",
        description: "Der Build, dauerhaft aktuell gehalten.",
        body: "Der komplette Build, dann aktuell gehalten, während sich euer Geschäft verändert, mit neuen Skills, sobald euer Bedarf wächst.",
        features: [
          "Alles aus dem Build",
          "Neue Skills, wenn der Bedarf wächst",
          "Laufende Verbesserung",
          "Gepflegt von uns",
        ],
      },
    ],
  },
  testimonials: {
    sectionTitle: "Was Kunden sagen",
    testimonials: [
      {
        name: "Leah Rott",
        title: "Co-Founder & Managing Director @ saferspaces",
        quote:
          "Viktor conducted an in-depth review of how we use Claude at saferspaces – with a clear outcome: concrete, immediately actionable recommendations on where we can deploy our resources even more efficiently. The context makes this especially valuable: as a small team, we already work intensively with Claude every day – from sales to proposal creation to communications – covering tasks that would otherwise require significantly more staff capacity. The fact that Viktor still identified meaningful optimization potential in this advanced setup speaks to the depth of his expertise. His knowledge of putting AI to productive use is comprehensive and impressive – and above all, practical. No abstract concepts, just recommendations we could integrate directly into our workflows. The collaboration was professional, well-structured, and on equal footing. If you're serious about advancing AI in your company in a way that pays off, Viktor is the right person. Highly recommended.",
        image: "/images/leah-rott.jpg",
      },
      {
        name: "Gerret Halberstadt",
        title: "Co-Founder & Managing Director @ saferspaces",
        quote:
          "Even though we were already using AI extensively, the audit with Viktor made clear where we could apply it even more effectively. He took the time to understand how we actually work first, and from there spotted the areas with the most potential for us. What stood out was how concrete the takeaways were. Not abstract advice, but specific places in our workflows where we could go further. Right after the audit we started implementing the first recommendations, and we're already seeing the actual time savings.",
        image: "/images/gerret-halberstadt.jpg",
      },
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
        // TODO(Viktor): simpleclub disclosure, resolve before publish (keep local-only until then).
        quote:
          "Viktor has been helping us to adopt AI in simpleclub. He ran workshops for the team on how to use Claude Code, which turned out to be super useful and helped my team deliver good results faster. He also ran a system-wide initiative to cover code of our services with AGENTS.md files in simpleclub. After the initiative, we experienced a huge improvement in quality of the AI-generated code.",
        image: "/images/mateusz-prusaczyk.jpg",
      },
    ],
  },
  credibility: {
    sectionTitle: "Auf echter Umsetzung gebaut",
    name: "Viktor Malyi",
    title:
      "8 Jahre Machine Learning. Wir bauen KI in Unternehmen ein und betreiben unser eigenes damit.",
    bio: "Wir beraten nicht nur zu KI, wir bauen sie ein. Unsere eigene Praxis läuft mit rund 80 Skills und Agenten. Sie helfen bei Lead-Findung, Ansprache, Recherche und Kundenarbeit. Wir haben sie gebaut und nutzen sie täglich. Wir verwandeln die Erfahrung einzelner Experten in einen Skill, der verlässlich arbeitet. Er läuft von allein, niemand muss ihn überwachen. Acht Jahre Machine Learning haben uns gelehrt, wo KI verlässlich ist und wo sie versagt. Genau das braucht es, um KI in Arbeit einzubauen, auf die sich ein Geschäft verlässt.",
    highlights: [
      "8 Jahre Machine Learning",
      "~80 Skills betreiben unsere eigene Praxis",
      "Erfahrung eurer Experten, in Skills gegossen",
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        question:
          "Könnten unsere eigenen Leute das nicht einfach selbst bauen? Warum euch bezahlen?",
        answer:
          "Oft könnt ihr das, und wo ihr es könnt, solltet ihr es auch. Aber es gut zu machen, ist eine eigene Disziplin. Wir bauen Skills auf eine standardisierte Weise, dieselbe, mit der wir unsere eigene Praxis betreiben, damit sie halten, statt einmal zu funktionieren und dann abzudriften. Wenn wir höchste Reproduzierbarkeit brauchen, erzwingen wir Skills mit echten Skripten. Das ist näher an Softwareentwicklung als an Prompt-Schreiberei. Wir machen es verlässlich, sorgen für Akzeptanz, übergeben es und gehen. Wenn euer Team das schon kann und die Zeit hat, es robust zu machen, braucht ihr uns nicht, und das sagen wir euch auch.",
      },
      {
        question:
          "Was kostet nach dem Einstiegs-Audit der ganze Build? Wir wollen keine Blackbox.",
        answer:
          "Das Audit hat einen Festpreis, und seine Aufgabe ist es, genau dieses Rätselraten zu beenden. Am Ende habt ihr den Prozess schriftlich, einen abgesteckten Plan und einen Preis für den Build, bevor ihr euch festlegt. Ihr entscheidet, was gebaut wird und was nicht. Keine automatische Eskalation, keine Überraschungssumme. Wenn sich der Build nicht lohnt, hat das Audit euch das gezeigt, und ihr hört dort auf.",
      },
      {
        question:
          "Können wir das später selbst pflegen und erweitern, oder sind wir für jede Änderung an euch gebunden?",
        answer:
          "Die Übergabe ist von Tag eins an eingebaut. Die Skills liegen in euren eigenen Repositories als einfaches Markdown. So kann euer Team sie lesen, ändern und erweitern, ohne uns. Wenn ihr lieber wollt, dass wir die Pflege übernehmen, können wir das, aber das ist eure Wahl, keine Abhängigkeit, die wir einbauen.",
      },
      {
        question:
          "Wie können wir der KI bei kritischer Arbeit vertrauen, wenn die Zahlen oder das Urteil stimmen müssen?",
        answer:
          "Das ist die richtige Sorge, und es ist ein Engineering-Problem, keine Hoffnung. Wenn Genauigkeit zählt, etwa bei Zahlen, Regeln und Schwellenwerten, lassen wir echten Code laufen. So liefert dieselbe Eingabe immer dieselbe Ausgabe. Das Modell übernimmt nur, was echte Erfahrung braucht, und ihr legt die Messlatte dafür fest. Wenn ein Experte einem Ergebnis widerspricht, kalibrieren wir an euren echten Fällen. Nichts hier ist eine Blackbox.",
      },
      {
        question:
          "Wie ist das mehr als eine dünne Hülle um einen manuellen Prozess? Wir wollen nicht für Hype zahlen.",
        answer:
          "Einverstanden, und wir messen es genauso wie ihr. Eine Hülle, die manuelle Schritte nur neu etikettiert, ist nichts wert. Wir schreiben den Prozess auf und ändern dann, wie die Arbeit fließt: Wir bestimmen, was von Anfang bis Ende durchläuft, wo echter Code manuelle Arbeit ersetzt und wo das Modell Zeit für menschliche Erfahrung freischaufelt. Wenn wir an euren echten Daten nicht zeigen können, was anders läuft, haben wir die Ausgabe nicht verdient.",
      },
    ],
  },
  finalCta: {
    title: "Mehr schaffen mit dem Team, das ihr schon habt.",
    subtitle:
      "Ein 30-minütiges Erstgespräch, um zu sehen, ob das zu euch passt.",
    cta: "Seht, wo KI euch voranbringt",
    guarantee: "",
  },
};

export const content: Record<Locale, SiteContent> = { en, de };
