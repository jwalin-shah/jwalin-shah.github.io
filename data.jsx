// Profile thesis: reliable agent systems, measured end to end
// Featured order (public proof first): OpenHuman → Voice → OfficeQA → Bridge

window.PROFILE = {
  name: "Jwalin Shah",
  handle: "jwalin-shah",
  email: "jwalinshah13@gmail.com",
  linkedin: "linkedin.com/in/jwalin-shah",
  tagline: "Reliable agent systems, measured end to end",
  oneliner: "I build systems that make probabilistic agents inspectable and dependable — isolated execution, verification, grounded retrieval, evaluation, and local inference.",
  location: "San Francisco Bay Area",
  status: "open to roles & research collabs",
  background: [
    { org: "OpenHuman (tinyhumansai)", role: "Core Contributor", note: "Personal memory / ingest · hybrid retrieval · production hardening" },
    { org: "Break the Web / LiveLM", role: "AI Systems Engineer", note: "~80K facts · MCP · ChatGPT path · 71×3 + 512 probes" },
    { org: "Skild AI", role: "Data Operations Lead", note: "5 robotic platforms · eval/ops systems · Series C demos" },
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
    kicker: "Active · upstream · personal memory",
    blurb: "Personal-memory / ingest in the Rust core: hybrid retrieval, staged personal-source ingest, contact identity, and production hardening around citations, RPC, and privacy.",
    longBlurb: "Own the on-device life-capture problem so the agent reasons over real personal sources. Hybrid FTS5 + sqlite-vec, staged iMessage/Gmail/Calendar/Contacts ingest, CNContactStore identity scoring, and hardening of citations, typed RPC, privacy/security, and chat reliability.",
    metrics: [
      { k: "focus", v: "memory" },
      { k: "retrieval", v: "hybrid" },
      { k: "ingest", v: "multi-source" },
      { k: "stack", v: "Rust/TS" },
    ],
    findings: [
      "Ingest correctness before embed",
      "Contact identity is a product surface",
      "Personal context needs privacy gates",
    ],
    stack: ["Rust", "TypeScript", "SQLite", "sqlite-vec"],
    repo: "tinyhumansai/openhuman",
    color: "violet",
  },
  {
    slug: "voice-engine",
    title: "Voice Engine",
    kicker: "Active · local product · measured",
    blurb: "Fully local dictation. 26 ASR configs · 560 clips · moonshine-tiny 0.2177 WER / 0.05 RTF vs canary-qwen-2.5B 0.2162 / 0.73 — 14× lower RTF.",
    longBlurb: "Zero-network menubar dictation on Apple Silicon. Model choice from WER/RTF benches. Acceptance tests 62/62 (v0.1); full suite 348/349 with one CoreML OS regression documented.",
    metrics: [
      { k: "WER", v: "0.2177" },
      { k: "RTF", v: "0.05" },
      { k: "vs baseline RTF", v: "14×" },
      { k: "tests", v: "62/62 · 348/349" },
    ],
    findings: [
      "Near-identical WER can hide a 14× latency cliff",
      "Label acceptance vs full regression suites",
      "On-device beats cloud when privacy + p95 matter",
    ],
    stack: ["Swift", "CoreML", "MLX"],
    repo: "jwalin-shah/voice-engine-swift",
    color: "cyan",
  },
  {
    slug: "officeqa-arena",
    title: "OfficeQA Arena",
    kicker: "Completed case study · Sentient Cohort 0",
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
    kicker: "Private runtime · public architecture case study",
    blurb: "Spawn → verify → deliver with deny-default sandboxing and fresh-checkout verification. 77 invariants. Public write-up without the private runtime.",
    longBlurb: "Isolated agent runtime: allowlisted adapters, macOS Seatbelt, leased worktrees, fresh-checkout verification so workers cannot certify their own outputs. Implementation private; sanitized architecture published for inspection.",
    metrics: [
      { k: "invariants", v: "77" },
      { k: "checked/proved", v: "52" },
      { k: "Z3 proofs", v: "8" },
      { k: "case study", v: "public" },
    ],
    findings: [
      "Workers must not certify their own outputs",
      "Fail-closed verification beats self-report",
      "Publish the thesis even when the runtime stays private",
    ],
    stack: ["Go", "Seatbelt", "TLA+", "Z3", "Lean"],
    repo: "jwalin-shah/bridge-architecture",
    private: true,
    color: "amber",
  },
];

// Stats — language mix, themes, recent activity
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
    { date: "2026", what: "OpenHuman — personal memory / ingest upstream", repo: "tinyhumansai/openhuman", href: "https://github.com/tinyhumansai/openhuman" },
    { date: "2026", what: "Voice Engine — 14× RTF local ASR selection", repo: "jwalin-shah/voice-engine-swift", href: "https://github.com/jwalin-shah/voice-engine-swift" },
    { date: "2026", what: "OfficeQA Arena — 184.5/246 grounded QA", repo: "jwalin-shah/officeqa-arena", href: "https://github.com/jwalin-shah/officeqa-arena" },
    { date: "2026", what: "Bridge architecture case study (public)", repo: "jwalin-shah/bridge-architecture", href: "https://github.com/jwalin-shah/bridge-architecture" },
    { date: "2025", what: "Skild AI — robotics data ops through Series C", repo: null, href: null },
  ],
};
