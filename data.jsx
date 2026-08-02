// Aligned with RESUME_SOURCE_OF_TRUTH.md (2026-08-02)
// Featured grid = first 4: OpenHuman → Bridge → OfficeQA → Voice; Jarvis listed after

window.PROFILE = {
  name: "Jwalin Shah",
  handle: "jwalin-shah",
  email: "jwalinshah13@gmail.com",
  linkedin: "linkedin.com/in/jwalin-shah",
  tagline: "AI Systems Engineer — Agent Reliability · Evaluation · Local Inference",
  oneliner: "Builds systems that constrain, observe, and verify probabilistic agents under real-world constraints.",
  location: "San Francisco Bay Area",
  status: "open to roles & research collabs",
  background: [
    { org: "OpenHuman (tinyhumansai)", role: "Core Contributor", note: "69 merged upstream PRs — memory, RPC, privacy/security, reliability, tests" },
    { org: "Break the Web / LiveLM", role: "AI Systems Engineer", note: "~80K facts · ok/partial/stale/miss · ~11 ms warm p50 · 71×3 + 512 probes" },
    { org: "Skild AI", role: "Data Operations Lead", note: "5 platforms · 30+ operators · task success +40%, overhead –50% · Series C demos" },
  ],
  focus: [
    "Agent reliability & fail-closed verification",
    "Evaluation harnesses & trace analysis",
    "Grounded / hybrid retrieval",
    "Local inference (MLX / CoreML)",
    "Sandboxing & formal methods",
    "Operational reliability",
  ],
};

window.PROJECTS = [
  {
    slug: "openhuman",
    title: "OpenHuman",
    kicker: "Core contributor · 69 merged PRs",
    blurb: "Landed 69 merged upstream PRs across memory, typed RPC/controllers, privacy/security, chat reliability, and tests — plus SQLite contact resolution and a prototyped on-device personal index.",
    longBlurb: "OpenHuman is a local-first personal AI (35k+ stars). Merged work spans citations/namespaces, CNContactStore identity scoring, a ~1,500-line CLI→domain refactor, and 196 tests. Personal-index (life_capture) work is designed/prototyped — not claimed as fully merged A1–A7.",
    metrics: [
      { k: "merged PRs", v: "69" },
      { k: "tests added", v: "196" },
      { k: "upstream stars", v: "35k+" },
      { k: "stack", v: "Rust/TS" },
    ],
    findings: [
      "Count merged PRs, not branch commit totals",
      "Contact identity is a product surface, not a glue script",
      "Prototype personal-index branches ≠ shipped subsystems",
    ],
    stack: ["Rust", "TypeScript", "SQLite", "sqlite-vec"],
    repo: "tinyhumansai/openhuman",
    color: "violet",
  },
  {
    slug: "voice-engine",
    title: "Voice Engine",
    kicker: "On-device speech · local inference",
    blurb: "Fully local Swift/CoreML dictation: Moonshine ASR, VAD, punctuation, native injection. 348/349 tests pass; one isolated CoreML OS regression.",
    longBlurb: "Zero-network dictation on Apple Silicon with WER/RTF harnesses for model/config tradeoffs. Public WER table omitted until the benchmark report is committed (SoT VO-03).",
    metrics: [
      { k: "tests", v: "348/349" },
      { k: "runtime", v: "local" },
      { k: "stack", v: "Swift/CoreML" },
      { k: "harness", v: "WER/RTF" },
    ],
    findings: [
      "One known CoreML OS-runtime failure — stated honestly",
      "Measure before shipping the bigger model",
      "Local injection beats clipboard hacks",
    ],
    stack: ["Swift", "CoreML", "MLX"],
    repo: "jwalin-shah/voice-engine-swift",
    color: "cyan",
  }
  {
    slug: "officeqa-arena",
    title: "OfficeQA Arena",
    kicker: "Sentient Cohort 0 · Grounded QA",
    blurb: "184.5/246 (75%) for $1.71 after 12 architecture rounds and ~4,400 evaluations. Evidence selection caused 48% of failures.",
    longBlurb: "Grounded numerical QA over Treasury docs. Trace analysis: evidence selection caused 48% of failures; correctly grounded Python answers had 0% arithmetic errors — retrieval/tool selection, not model arithmetic, dominated.",
    metrics: [
      { k: "score", v: "184.5", unit: "/246" },
      { k: "pass", v: "75%" },
      { k: "cost", v: "$1.71" },
      { k: "evals", v: "~4,400" },
    ],
    findings: [
      "Evidence selection caused 48% of failures",
      "Correctly grounded Python: 0% arithmetic errors",
      "System architecture beats prompt-only ceilings",
    ],
    stack: ["Python", "Retrieval", "Eval harness"],
    repo: "jwalin-shah/officeqa-arena",
    color: "orange",
  },
  {
    slug: "bridge",
    title: "Bridge",
    kicker: "Reliable coding-agent execution · private",
    blurb: "Spawn → verify → deliver with deny-default sandboxing, leased worktrees, and fresh-checkout verification. 77 invariants; 52 checked/proved.",
    longBlurb: "Isolated agent runtime: allowlisted adapters, macOS Seatbelt, leased worktrees, fresh-checkout verification so workers cannot certify their own outputs. 77 invariants with 28 property checkers, 8 Z3 proofs, 5 TLA+ models (incl. 1.58M-state exploration), and Lean proofs.",
    metrics: [
      { k: "invariants", v: "77" },
      { k: "checked/proved", v: "52" },
      { k: "Z3 proofs", v: "8" },
      { k: "TLA+ models", v: "5" },
    ],
    findings: [
      "Workers must not certify their own outputs",
      "Fail-closed verification beats self-report",
      "Formal methods belong next to the runtime, not in a drawer",
    ],
    stack: ["Go", "Seatbelt", "TLA+", "Z3", "Lean"],
    repo: null,
    private: true,
    color: "amber",
  },
];

];

window.STATS = {
  totalRepos: 40,
  publicRepos: 40,
  topLangs: [
    { lang: "Python", pct: 45 },
    { lang: "Go", pct: 25 },
    { lang: "TypeScript", pct: 12 },
    { lang: "Rust / Swift / Other", pct: 18 },
  ],
  contributions: Array.from({ length: 7 }, (_, r) =>
    Array.from({ length: 26 }, (_, c) => {
      const recency = c / 26;
      const noise = Math.sin(r * 13 + c * 7) * 0.5 + 0.5;
      return Math.max(0, Math.min(4, Math.round(recency * 3 + noise * 2 - 0.4)));
    })
  ),
  themes: [
    { label: "agent reliability", weight: 1.0 },
    { label: "evaluation", weight: 0.95 },
    { label: "local inference", weight: 0.9 },
    { label: "sandboxing", weight: 0.88 },
    { label: "grounded retrieval", weight: 0.85 },
    { label: "formal methods", weight: 0.8 },
    { label: "trace analysis", weight: 0.75 },
    { label: "robotics ops", weight: 0.55 },
  ],
  recentActivity: [
    { date: "Mar 2026–", what: "OpenHuman — 69 merged upstream PRs", repo: "tinyhumansai/openhuman", href: "https://github.com/tinyhumansai/openhuman" },
    { date: "May 2026–", what: "LiveLM — retrieval + abstention eval", repo: null, href: null },
    { date: "2026", what: "Bridge — spawn/verify/deliver + 77 invariants", repo: null, href: null },
    { date: "2026", what: "OfficeQA Arena — 184.5/246 grounded QA", repo: "jwalin-shah/officeqa-arena", href: "https://github.com/jwalin-shah/officeqa-arena" },
    { date: "2025", what: "Skild AI — robotics data ops through Series C", repo: null, href: null },
  ],
};
