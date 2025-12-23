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
  conclusion: string;
}

export interface FrameworkBlocker {
  number: string;
  title: string;
  problem: string;
  impact: string;
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
  price: string;
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
  headline: "Fix What's Slowing Your AI Coding Agents",
  description:
    "In 24 hours, I audit your AI coding agent stack to surface exactly what's slowing it down. You get a prioritized roadmap with the fixes that unlock predictable shipping speed, quality, and safety. If my audit doesn't identify real blockers, full refund.",
  cta: "Book the Velocity Audit",
};

export const problemContent: ProblemContent = {
  title:
    "AI coding agents should feel like leverage, not another junior dev to manage.",
  subtitle:
    "When adoption outpaces operational rigor, you end up with more overhead than output.",
  points: [
    {
      title: "Inconsistent Outputs",
      description:
        "Agents drift from architecture decisions with each run, forcing manual cleanup and repeated context handoffs.",
    },
    {
      title: "Context Gaps",
      description:
        "Specs, domain rules, and edge cases fall outside the prompt window, so agents guess and miss requirements.",
    },
    {
      title: "No Guardrails",
      description:
        "Linting, tests, and dependency policies aren't embedded in the workflow, so brittle changes slip through and fail CI.",
    },
    {
      title: "Unclear ROI",
      description:
        "There's no telemetry or adoption playbook, so you can't tell where agents help versus slow engineers down.",
    },
  ],
  conclusion:
    "Result: engineers keep hand-holding the AI, rework piles up, and velocity stalls.",
};

export const frameworkContent: FrameworkContent = {
  title: "The 4 Velocity Blockers I Look For",
  subtitle:
    "A focused audit that isolates friction before we scale adoption further.",
  blockers: [
    {
      number: "01",
      title: "Context & Knowledge Flow",
      problem:
        "Agents operate on shallow prompts without the architecture, domain constraints, or recent decisions they need.",
      impact:
        "Outputs miss acceptance criteria and require rework, eroding trust in AI assistance.",
      indicators: [
        "Engineers keep pasting the same docs or ADRs into prompts.",
        "Agents ask clarifying questions mid-run or hallucinate missing pieces.",
        "Pull requests repeatedly miss edge cases spelled out elsewhere.",
      ],
    },
    {
      number: "02",
      title: "Workflow & Handoffs",
      problem:
        "Agent handoffs between tools, repos, and humans are unclear, creating dropped context and duplicated effort.",
      impact:
        "Tasks bounce around and cycle times stay flat despite automation.",
      indicators: [
        "Engineers rewrite agent-generated code before merge.",
        "PRs need multiple human passes to stabilize after AI changes.",
        "Agents stall waiting for manual unblocking or missing inputs.",
      ],
    },
    {
      number: "03",
      title: "Quality & Guardrails",
      problem:
        "Quality checks are bolted on instead of built into the agent loop.",
      impact: "Bugs, security gaps, and flaky outputs sneak into branches.",
      indicators: [
        "CI fails because tests or dependency policies were skipped by the agent.",
        "Hallucinated APIs or broken contracts appear in diffs.",
        "Reviewers don't trust agent changes without deep re-verification.",
      ],
    },
    {
      number: "04",
      title: "Adoption & Enablement",
      problem:
        "Engineers lack clear guidance on when and how to rely on agents.",
      impact: "Usage is inconsistent and perceived ROI drops across the team.",
      indicators: [
        "Only a few champions use agents deeply while others avoid them.",
        "No shared prompts, playbooks, or examples for common tasks.",
        "Teams avoid letting agents own complex tasks end-to-end.",
      ],
    },
  ],
};

export const howItWorksContent: HowItWorksContent = {
  title: "How the Velocity Audit Works",
  subtitle: "A tight, 24-hour engagement designed for fast answers.",
  steps: [
    {
      title: "Share Access",
      description:
        "Provide read-only repo access, sample tasks, and a short context call so I can see real workflows and constraints.",
    },
    {
      title: "24-Hour Deep Dive",
      description:
        "I trace critical paths, run live agent tasks, review prompts, orchestration, and telemetry to pinpoint friction.",
    },
    {
      title: "Get Your Roadmap",
      description:
        "Receive a prioritized remediation plan with quick wins, medium-term fixes, and recommended guardrails for sustained velocity.",
    },
  ],
};

export const tiersContent: TiersContent = {
  title: "Pick the Engagement That Fits Your Team",
  subtitle:
    "Each option delivers the audit; choose how much implementation support you want alongside it.",
  tiers: [
    {
      name: "Discovery Audit",
      price: "Starts at €990,00",
      description: "Rapid assessment with fast, actionable fixes.",
      features: [
        "24-hour velocity audit across codebase and agent workflows",
        "Blocker scorecard and prioritized top 5 fixes",
        "Risk and effort estimates for each recommendation",
        "30-minute readout with Q&A",
      ],
      cta: "Book Discovery Audit",
    },
    {
      name: "Discovery + Implementation",
      price: "Custom engagement",
      description:
        "Audit plus hands-on implementation of the highest-impact fixes.",
      features: [
        "Everything in Discovery Audit",
        "Implement top fixes across prompts, retrieval, and guardrails",
        "Telemetry and quality gates embedded in the agent loop",
        "Updated playbooks and examples for recurring tasks",
        "Team enablement working session",
      ],
      cta: "Schedule Audit + Fixes",
    },
    {
      name: "Full Agent Optimization",
      price: "Custom engagement",
      description: "Comprehensive transformation for agent-driven development.",
      features: [
        "Deep-dive architecture review across services and repos",
        "Design and rollout of new agent workflows and orchestration",
        "Policy, compliance, and safety guardrails baked in",
        "Training for leads plus office hours for engineers",
        "Success metrics dashboard and ongoing tuning plan",
      ],
      cta: "Plan Full Optimization",
    },
  ],
};

export const credibilityContent: CredibilityContent = {
  name: "Viktor Malyi",
  title: "AI Engineering Leader Specializing in Agent Velocity",
  bio: "I help dev teams turn AI coding agents into reliable leverage—by fixing the plumbing, guardrails, and playbooks that keep work moving.",
  highlights: [
    "Shipped agentic workflows that cut spec-to-PR time from days to hours.",
    "Built quality gates and prompt systems that reduced review churn by 40%.",
    "Enabled teams from 5 to 50 engineers with repeatable AI adoption playbooks.",
    "Advised founders on shipping reliable AI features without bloating headcount.",
  ],
};

export const faqContent: FaqContent = {
  title: "FAQ",
  items: [
    {
      question: "What access do you need for the audit?",
      answer:
        "Read-only repo access, sample tasks or tickets, and any existing prompts or agent orchestration so I can see real workflows.",
    },
    {
      question: "What do I get after 24 hours?",
      answer:
        "A blocker scorecard, prioritized roadmap, and concrete fixes mapped to impact—plus a live walkthrough so your team knows what to do next.",
    },
    {
      question: "Will you implement the fixes?",
      answer:
        "Yes—choose the Discovery + Implementation or Full Agent Optimization tier and I'll execute the high-impact changes with your team.",
    },
    {
      question: "Does this work if we're using Copilot or other vendor tools?",
      answer:
        "Absolutely. The audit is vendor-agnostic and focuses on prompts, context flow, guardrails, and workflows, whether you use Copilot, custom agents, or both.",
    },
    {
      question: "How much of my team's time will this take?",
      answer:
        "About an hour total for access and a short call. The deep dive is on me; your team only joins the readout unless we're implementing together.",
    },
    {
      question: "What if you don't find meaningful blockers?",
      answer:
        "If the audit doesn't surface real blockers or opportunities, I refund you—no fine print.",
    },
  ],
};

export const finalCtaContent: FinalCtaContent = {
  title: "Ready to Unstick Your AI Coding Agents?",
  subtitle:
    "Book the 24-hour Velocity Audit and get a precise plan to unlock faster, safer shipping with your AI coding agents.",
  cta: "Book the Velocity Audit",
  guarantee: "If my audit doesn't identify real blockers, full refund.",
};
