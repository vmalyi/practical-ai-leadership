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
  sources: ProblemSource[];
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
  headline: "Your Team Is Fighting AI Coding Tools, Not Leveraging Them",
  description:
    "In 24 hours, get full AGENTS.md coverage, guidance for anti-patterns eventually present in your codebase that AI could multiply, and a DevEx baseline to measure the productivity gains you've been missing. All grounded in your codebase.",
  cta: "Make Your AI Coding Tools Work",
};

export const problemContent: ProblemContent = {
  title:
    "AI coding tools should feel like leverage, not another junior dev to manage.",
  subtitle:
    "Your team adopted Copilot, Cursor, maybe even experimented with AI coding agents. Yet engineers still don't fully trust the output and spend considerable time hand-holding the tools. Adoption happened. ROI-positive adoption didn't.",
  points: [
    {
      title: "Quality Gaps",
      description:
        "67% of developers spend more time debugging AI-generated code because it often requires significant human intervention.¹ 76% say it needs refactoring, contributing to technical debt.¹ AI-assisted PRs are 2.6x larger due to verbose code generation.²",
    },
    {
      title: "Review Bottlenecks",
      description:
        "AI-generated PRs wait 5.3x longer before review because reviewers distrust them and the code volume is larger.² Only 32.7% get merged vs 84.4% for human-written code.² Much of AI output is ultimately rejected or abandoned.",
    },
    {
      title: "Insufficient Context",
      description:
        "AI generates code that's syntactically correct but functionally wrong because it lacks awareness of system architecture or business logic.²˒³ Most tools work best on one repository at a time and struggle with cross-repository context.³",
    },
    {
      title: "The Productivity Illusion",
      description:
        "Studies show developers using AI tools take 19% longer on tasks despite believing they were faster.⁴ Teams see 7.2% lower delivery stability because code volume moves faster than the system's ability to verify quality.⁵",
    },
  ],
  sources: [
    { id: "1", title: "Harness, State of Software Delivery 2025" },
    { id: "2", title: "LinearB, The DevEx Guide to AI-Driven Software Development" },
    { id: "3", title: "Jellyfish, AI Transformation: Real-World Data and Productivity Insights" },
    { id: "4", title: "METR, Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity" },
    { id: "5", title: "DORA, 2024 DORA Report" },
  ],
};

export const frameworkContent: FrameworkContent = {
  title: "Why Your AI Coding Investment Isn't Paying Off",
  subtitle:
    "These four context gaps prevent your AI tools from delivering ROI. My audit surfaces them and delivers ready-to-use fixes for each.",
  blockers: [
    {
      number: "01",
      title: "Poor Context Engineering",
      problem:
        "Documents forming a foundation of context engineering are missing or stale. AI coding tools lack context about module boundaries, dependency graphs, and workflows, producing solutions that work but violate your design principles.",
      indicators: [
        "README doesn't explain repo structure, key abstractions, or module boundaries.",
        "No AGENTS.md hierarchy (root + per-subproject) or tool rules referencing it.",
        "AGENTS.md missing or incomplete: AI lacks commands, boundaries, and patterns to follow.",
      ],
    },
    {
      number: "02",
      title: "Inaccessible Coding Standards",
      problem:
        "Coding standards exist in developers' heads, outdated wikis, or aren't discoverable by AI coding tools during development. AI coding tools generate code that's syntactically correct but stylistically inconsistent, requiring frequent rework during PR reviews.",
      indicators: [
        "Inconsistent error-handling patterns across the codebase.",
        "Approach to null/optional issues is inconsistent.",
        "Security and performance issues exist in code.",
      ],
    },
    {
      number: "03",
      title: "Broken Feedback Mechanisms",
      problem:
        "Quality gates don't exist, aren't integrated into the AI coding tool workflow, or fail without actionable errors. AI coding tools introduce regressions that only surface in CI/CD or human review, creating redundant iteration cycles.",
      indicators: [
        "Lint/test commands exist but aren't documented for AI or runnable in one step.",
        "No pre-commit/CI enforcement for bug-prone or security patterns.",
        "AI can't self-verify because verification steps aren't documented.",
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
        "PRDs or specs not accessible or linked to tasks executed by AI coding assistants.",
      ],
    },
  ],
};

export const howItWorksContent: HowItWorksContent = {
  title: "How the AI Coding Tools Adoption Audit Works",
  subtitle:
    "In the next 24 hours, understand what's blocking your AI tools, get deliverables that fix it, and a DevEx baseline to measure from.",
  steps: [
    {
      title: "Discovery Call and Access Sharing",
      description:
        "We start with a short discovery call so I understand your team's workflow and constraints. You provide read-only repo access so I can begin the audit.",
    },
    {
      title: "24-Hour Deep Dive & Deterministic Scan",
      description:
        "I analyze your codebase deterministically: documentation, architecture signals, and automated pattern detection across your stack.",
    },
    {
      title: "Unlock Full Potential of AI Coding Tools",
      description:
        "You receive an audit report plus ready-to-use deliverables instantly boosting AI coding tools efficiency and accuracy – followed by a walkthrough call.",
    },
  ],
};

export const tiersContent: TiersContent = {
  title: "Choose Your Path Forward",
  subtitle:
    "Get the repo-specific files that make AI tools follow your conventions. I can implement the changes for you. Or scale it across all your repos to unlock autonomous AI coding.",
  tiers: [
    {
      name: "AI Coding Tools Adoption Audit",
      description:
        "Establish a minimal context so AI tools generate convention-matching code in a single repository.",
      features: [
        "24-hour audit of a single repository",
        "Audit Report: DevEx baseline with 10 metrics, top negative coding patterns, deliverables guide",
        "Full AGENTS.md hierarchy: root + per-subproject files",
        "Pre-modified READMEs + vendor-specific rules referencing AGENTS.md fitted to your codebase",
        "Ready-to-use fix prompts for all negative coding patterns identified in your codebase",
        "Post-audit walkthrough call",
      ],
      cta: "Make AI Coding Tools Deliver",
      bookingUrl: "https://calendar.app.google/PZFG7xyfkemX6zhT7",
    },
    {
      name: "Audit + Implementation + ROI Measurement",
      description:
        "Hands-on implementation, re-measurement to prove impact, strategy adjustment, and deliverables update in a single repository",
      features: [
        "Everything in Adoption Audit",
        "I implement AGENTS.md, README updates, and vendor-specific rules",
        "I apply fix prompts for negative coding patterns across your codebase",
        "One DevEx re-measurement after rollout and strategy call to adjust your AI coding tools adoption approach",
        "One update for your entire hierarchy of AGENTS.md after rollout to keep them current",
      ],
      cta: "Implement & Re-measure",
      bookingUrl: "https://calendar.app.google/CBWXPN9sukcTCBve9",
    },
    {
      name: "Full Agentic Coding Transformation",
      description:
        "Transition from manual AI coding assistance to autonomous AI agentic coding for getting the biggest gains plus one-year support",
      features: [
        "Everything in Audit + Implementation + ROI Measurement, across all your repositories",
        "Custom context management system for your team's workflow enabling AI to work with minimal oversight for hours",
        "Live training session for the development team",
        "Quarterly DevEx re-measurements and strategy calls",
        "Quarterly updates for your entire hierarchy of AGENTS.md",
      ],
      cta: "Unlock Autonomous AI Coding",
      bookingUrl: "https://calendar.app.google/DjDENLuRcaVN2aJRA",
    },
  ],
};

export const credibilityContent: CredibilityContent = {
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
};

export const faqContent: FaqContent = {
  title: "FAQ",
  items: [
    {
      question: "What size team or codebase is this suitable for?",
      answer:
        "This approach is independent of team size. The changes live inside your codebase: documentation, context files, and feedback mechanisms that guide AI tools toward correct output regardless of how many developers use them. Large codebases benefit the most. The Full Agentic Coding Transformation provides significant leverage when AI agents need to navigate complex architectures autonomously.",
    },
    {
      question: "Does this work if we're using Copilot, Codex, Claude Code, or other vendor tools?",
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
};

export const finalCtaContent: FinalCtaContent = {
  title: "Ready to Make Your AI Coding Tools Work?",
  subtitle:
    "In 24 hours, get full AGENTS.md coverage, guidance for anti-patterns, and a DevEx baseline to measure impact. All grounded in your codebase.",
  cta: "Make Your AI Coding Tools Work",
  guarantee: "",
};
