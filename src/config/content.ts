export interface HeroContent {
  headline: string;
  description: string;
  cta: string;
}

export interface ProblemPoint {
  title: string;
  description: string;
}

export interface ProblemContent {
  title: string;
  subtitle: string;
  points: ProblemPoint[];
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

export const heroContent: HeroContent = {
  headline: "Fix What's Breaking Your Team's AI Coding Tool Adoption",
  description:
    "In 24 hours, I audit your codebase and deliver a prioritized roadmap showing exactly what's blocking your AI coding tools. Then I either implement the fixes myself or guide your team toward true agentic coding capabilities.",
  cta: "Understand What Blocks Your Team",
};

export const problemContent: ProblemContent = {
  title:
    "AI coding tools should feel like leverage, not another junior dev to manage.",
  subtitle:
    "Your team adopted Copilot, Cursor, maybe even experimented with AI coding agents. Yet engineers still don't fully trust the output and spend considerable time hand-holding the tools to produce quality results. Adoption happened. ROI-positive adoption didn't. There's still much to learn and implement before these tools deliver their full potential.",
  points: [
    {
      title: "Quality Gaps",
      description:
        "67% of developers spend more time debugging AI-generated code because it often requires significant human intervention. 76% say it needs refactoring, contributing to technical debt. AI-assisted PRs are 2.6x larger due to verbose code generation.",
    },
    {
      title: "Review Bottlenecks",
      description:
        "AI-generated PRs wait 5.3x longer before review because reviewers distrust them and the code volume is larger. Only 32.7% get merged vs 84.4% for human-written code. Much of AI output is ultimately rejected or abandoned.",
    },
    {
      title: "Insufficient Context",
      description:
        "AI generates code that's syntactically correct but functionally wrong because it lacks awareness of system architecture or business logic. Most tools work best on one repository at a time and struggle with cross-repository context.",
    },
    {
      title: "The Productivity Illusion",
      description:
        "Studies show developers using AI tools take 19% longer on tasks despite believing they were faster. Teams see 7.2% lower delivery stability because code volume moves faster than the system's ability to verify quality.",
    },
  ],
};

export const frameworkContent: FrameworkContent = {
  title: "The 4 Blockers I Look For",
  subtitle:
    "My audit focuses on fundamental issues preventing your team from using AI coding tools to their full potential, both at the codebase and SDLC levels.",
  blockers: [
    {
      number: "01",
      title: "Inaccessible Coding Standards",
      problem:
        "Coding standards exist in developers' heads, outdated wikis, or aren't discoverable by AI coding tools during development. AI coding tools generate code that's syntactically correct but stylistically inconsistent, requiring rework during PR reviews.",
      indicators: [
        "No .editorconfig, prettier.config, or equivalent in repo root.",
        "Style guide exists but isn't linked in contributing docs.",
        "ADRs aren't discoverable or accessible.",
      ],
    },
    {
      number: "02",
      title: "Poor Context Engineering",
      problem:
        "Core docs (README, ARCHITECTURE.md, AGENTS.md) are missing, stale, or don't communicate the mental model needed to contribute. AI coding tools lack context about module boundaries, dependency graphs, and workflows, producing solutions that work but violate design principles.",
      indicators: [
        "README doesn't explain repo structure or key abstractions.",
        "No agent instruction files (AGENTS.md, .cursorrules, etc.).",
        "Missing or outdated onboarding process for an AI coding tool at the start of each working session.",
      ],
    },
    {
      number: "03",
      title: "Broken Feedback Mechanisms",
      problem:
        "Quality gates (linters, formatters, test suites) don't exist, aren't integrated into the AI coding tool workflow, or fail without actionable errors. AI coding tools introduce regressions that only surface in CI/CD or human review, creating redundant iteration cycles.",
      indicators: [
        "Test coverage below 60% or missing completely.",
        "No pre-commit hooks enforcement of linting/formatting.",
        "AI coding tools can't execute test commands to validate changes.",
      ],
    },
    {
      number: "04",
      title: "Insufficient Product Context",
      problem:
        "AI coding tools get vague directives without business logic, user needs, or acceptance criteria. They deliver code that passes tests but misses intent, resulting in low-value output which requires significant rework.",
      indicators: [
        "Task descriptions lack acceptance criteria or success metrics.",
        "No project or feature docs explaining the WHY.",
        "PRDs or specs not accessible or linked to tasks executed by AI coding assistants",
      ],
    },
  ],
};

export const howItWorksContent: HowItWorksContent = {
  title: "How the AI Coding Tools Adoption Audit Works",
  subtitle:
    "A rapid, 24-hour engagement to identify what's blocking your team from adopting AI coding tools efficiently.",
  steps: [
    {
      title: "Discovery Call and Access Sharing",
      description:
        "We start with a short discovery call so I understand your team's workflow and constraints. You provide read-only repo access and sample tasks for me to begin the audit.",
    },
    {
      title: "24-Hour Deep Dive & Interviews",
      description:
        "I analyze your codebase for best practices already in place and gaps that remain. If needed, I send engineers a quick survey to understand how they currently use AI coding tools.",
    },
    {
      title: "Get Your Roadmap",
      description:
        "You receive a report with identified gaps and a prioritized roadmap: quick wins, medium-term fixes, and long-term improvements ready for immediate action.",
    },
  ],
};

export const tiersContent: TiersContent = {
  title: "Three Investment Options for Unblocking Your Team",
  subtitle:
    "Understand what's blocking your team. Fix the blockers. Or unlock fully autonomous AI coding with unparalleled productivity gains.",
  tiers: [
    {
      name: "Adoption Audit",
      description:
        "Identify what's blocking efficient AI coding tool adoption in a single repository.",
      features: [
        "24-hour audit of a single repository",
        "Blocker scorecard across all 4 categories",
        "Prioritized roadmap with actionable recommendations",
        "Post-audit walkthrough call",
      ],
      cta: "Get Your Roadmap",
    },
    {
      name: "Audit + Implementation",
      description: "Audit plus hands-on implementation of high-impact fixes.",
      features: [
        "Everything in Adoption Audit",
        "Fix coding standards accessibility",
        "Create or update context documentation",
        "Set up feedback mechanisms",
        "Comprehensive guides for your team",
      ],
      cta: "Fix What's Blocking You",
    },
    {
      name: "Agentic Transformation",
      description:
        "Transition from manual AI assistance to autonomous AI agentic coding.",
      features: [
        "Everything in Audit + Implementation, across all repositories",
        "Custom context management system for your team's workflow",
        "Structured workflows enabling AI to work with minimal oversight",
        "Training session for the development team",
      ],
      cta: "Unlock Autonomous AI Coding",
    },
  ],
};

export const credibilityContent: CredibilityContent = {
  sectionTitle: "Built on Real Experience",
  name: "Viktor Malyi",
  title:
    "AI Engineering Leader with 16 Years Building Production Systems. Now Helping Teams Adopt AI Coding Tools.",
  bio: "I've been pioneering AI coding tools for 2 years (before wide market adoption) deploying them in real production environments. Vendors claim their tools work autonomously out of the box. I know what it actually takes to enable truly agentic coding capabilities and bridge the gap between marketing promises and production reality.",
  highlights: [
    "5 Production AI Systems Delivered",
    "16 Years Engineering Leadership",
    "Featured at Apple WWDC",
    "15+ Engineers Led & Mentored",
  ],
};

export const faqContent: FaqContent = {
  title: "FAQ",
  items: [
    {
      question: "What size team or codebase is this suitable for?",
      answer:
        "This approach is independent of team size. The changes live inside your codebase: documentation, context files, and feedback mechanisms that guide AI tools toward correct output regardless of how many developers use them. Large codebases benefit the most. The Agentic Transformation tier provides significant leverage when AI agents need to navigate complex architectures autonomously.",
    },
    {
      question: "Does this work if we're using Copilot, Codex, Claude Code, or other vendor tools?",
      answer:
        "Absolutely. The audit is vendor-agnostic and focuses on prompts, context flow, guardrails, feedback loops, and workflows, regardless of which AI coding assistant you are using.",
    },
    {
      question: "What do I get after 24 hours?",
      answer:
        "A blocker scorecard, prioritized roadmap, and concrete fixes mapped to impact, plus a live walkthrough (in a follow-up call) so your team knows what to do next.",
    },
    {
      question: "How do I measure if this worked?",
      answer:
        "Track two metrics: PR review cycles and engineer sentiment. After implementing the fixes, PRs containing AI-generated code should require fewer revision comments. Your engineers should also report spending less time hand-holding AI tools and correcting obvious mistakes. Both signals typically appear within the first sprint after implementation.",
    },
    {
      question: "Will you implement the fixes?",
      answer:
        "Yes. Choose the Audit + Implementation or Agentic Transformation tier and I'll execute the high-impact changes with your team.",
    },
    {
      question: "How much of my team's time will this take?",
      answer:
        "For the Adoption Audit: ~1 hour total (discovery call plus ~15-minute interviews with 2-3 engineers). For Audit + Implementation: add a few hours for collaborative implementation sessions. For Agentic Transformation: expect ongoing involvement during the multi-repository rollout and team training. The deep analysis is on me; your team only joins for interviews and readouts.",
    },
    {
      question: "What access do you need for the audit?",
      answer:
        "Read-only repo access in GitHub, GitLab, or any other developer platform, sample tasks or tickets your team recently worked on, and high-level information from your key development team members about how they use AI coding assistants on a day-to-day basis (collected via Slack, MS Teams, or email interviews requiring ~15 minutes each).",
    },
    {
      question: "How do you handle our code and data?",
      answer:
        "My analysis tools send code snippets to Anthropic's API for processing. Under their commercial API terms, this data is not used for model training and API logs are deleted after 7 days. Only files I explicitly read during the audit are transmitted. Your original codebase remains untouched on your systems. Data is never sold to third parties.",
    },
    {
      question: "What if you don't find meaningful blockers?",
      answer:
        "If the audit doesn't surface real blockers or opportunities, I refund the full price to you.",
    },
  ],
};

export const finalCtaContent: FinalCtaContent = {
  title: "Stop Hand-Holding Your AI Coding Tools",
  subtitle:
    "In 24 hours, get a precise roadmap showing exactly what's blocking your team from efficient AI-assisted coding.",
  cta: "Make Your AI Coding Tools Actually Work",
  guarantee: "",
};
