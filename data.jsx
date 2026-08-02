// Canonical profile data — aligned with resume-general.typ master spine (2026-08-02)
// AI Systems & Reliability Engineer · Bridge flagship · no Inbox on homepage

window.PROFILE = {
  name: "Jwalin Shah",
  handle: "jwalin-shah",
  email: "jwalinshah13@gmail.com",
  linkedin: "linkedin.com/in/jwalin-shah",
  tagline: "AI Systems & Reliability Engineer — Agent Evaluation · Grounded Retrieval · Verification Infrastructure",
  oneliner: "Builds systems that constrain, observe, and verify probabilistic agents under real-world constraints.",
  location: "San Francisco Bay Area",
  status: "open to roles & research collabs",
  background: [
    { org: "OpenHuman (tinyhumansai)", role: "Core Contributor", note: "life_capture / curated_memory — on-device personal KB for a 35k+ star local-first agent" },
    { org: "Skild AI", role: "Data Operations Lead", note: "Robotics data systems · 5 platforms · 30+ operators · task success +40%, overhead –50%" },
    { org: "Break the Web / LiveLM", role: "AI Systems Engineer", note: "Real-time grounding · MCP tool-use eval · hit/partial/stale/miss abstention" },
  ],
  focus: [
    "Agent verification & fail-closed gates",
    "Grounded retrieval",
    "Evaluation harnesses & failure modes",
    "Sandboxing & independent verification",
    "On-device inference (MLX / CoreML)",
    "MCP & tool-augmented agents",
  ],
};

// Featured first four drive the homepage grid (dir-editorial slice(0,4)).
// Order = master thesis. Inbox / Jarvis are NOT on this page.
window.PROJECTS = [
  {
    slug: "openhuman",
    title: "OpenHuman",
    kicker: "Core contributor · Personal AI memory",
    blurb: "Own life_capture / curated_memory in the Rust core — the on-device index that turns messages, mail, calendar, and contacts into agent-reasoned knowledge.",
    longBlurb: "OpenHuman is a local-first personal AI (35k+ stars). I own the memory subsystem: hybrid retrieval (FTS + sqlite-vec), multi-source ingest, contact resolution, and session management — plus reliability work on chat streams, security-policy routes, and onboarding.",
    metrics: [
      { k: "upstream stars", v: "35k+" },
      { k: "commits", v: "80+" },
      { k: "stack", v: "Rust" },
      { k: "scope", v: "memory core" },
    ],
    findings: [
      "Personal context compounds only if ingest is correct before embed",
      "Hybrid FTS + vectors beats either alone for life-capture retrieval",
      "Contributor work spans memory, chat reliability, and security policy",
    ],
    stack: ["Rust", "SQLite", "sqlite-vec", "EventKit"],
    repo: "tinyhumansai/openhuman",
    color: "violet",
  },
  {
    slug: "bridge",
    title: "Bridge",
    kicker: "Reliable coding-agent execution · private",
    blurb: "Spawn / verify / deliver with default-deny OS sandboxing. Fresh-checkout verification — agents cannot certify their own success.",
    longBlurb: "Coding agents run in isolated git worktrees with declared allowed paths. Scope violations fail closed and are re-checked in a fresh checkout. 77 pipeline invariants with property tests plus TLA+ / Z3 / Lean verification layers. Repo is private — happy to walk through architecture and demos.",
    metrics: [
      { k: "invariants", v: "77" },
      { k: "sandbox", v: "deny-default" },
      { k: "verify", v: "fresh checkout" },
      { k: "proofs", v: "TLA+/Z3/Lean" },
    ],
    findings: [
      "Detecting a scope violation is useless if the gate still passes",
      "Worker self-reports are not verification",
      "Fail-closed beats fail-open — every time",
    ],
    stack: ["Go", "Seatbelt", "Git worktrees", "TLA+", "Z3", "Lean"],
    repo: null,
    private: true,
    color: "amber",
  },
  {
    slug: "officeqa-arena",
    title: "OfficeQA Arena",
    kicker: "Sentient Cohort 0 · Grounded QA",
    blurb: "Ranked top tier on a 246-task grounded financial QA benchmark. Retrieval and tool choice — not “reasoning” — drove most failures.",
    longBlurb: "Systematic exploration of grounded numerical QA over Treasury docs. Multiple architectural generations and thousands of task evaluations. Simplicity won: shell grep on raw text beat heavyweight multi-component pipelines. Full writeup in research.pdf.",
    metrics: [
      { k: "tasks", v: "246" },
      { k: "rank", v: "top tier" },
      { k: "evals", v: "3,600+" },
      { k: "paper", v: "research.pdf" },
    ],
    findings: [
      "Shell grep beat a heavyweight consensus pipeline",
      "Wrong table/row/column extraction dominated failures",
      "System fixes beat prompt-only ceilings",
    ],
    stack: ["Python", "Retrieval", "Eval harness"],
    repo: "jwalin-shah/officeqa-arena",
    color: "orange",
  },
  {
    slug: "knowledge-engine",
    title: "Knowledge Engine",
    kicker: "Local code & axiom graph · private",
    blurb: "cocoindex + Neo4j + tldr CALLS — the retrieval substrate Bridge consumes at spawn. Parity gates fail closed when disk and graph disagree.",
    longBlurb: "Local Neo4j graph indexing axioms, source references, and code structure. Catch-up indexing certified with exact file↔Chunk parity. Dumb pipe by design: materialize facts; Bridge owns context assembly at spawn.",
    metrics: [
      { k: "index", v: "cocoindex" },
      { k: "graph", v: "Neo4j" },
      { k: "gate", v: "parity fail-closed" },
      { k: "consumer", v: "Bridge spawn" },
    ],
    findings: [
      "Graph must match disk or the gate fails — no silent drift",
      "Retrieval substrate is infrastructure, not an agent persona",
      "Bridge consumes; KE does not invent success",
    ],
    stack: ["Python", "cocoindex", "Neo4j", "tldr"],
    repo: null,
    private: true,
    color: "cyan",
  },
  {
    slug: "voice-engine",
    title: "Voice Engine",
    kicker: "Local dictation · measured selection",
    blurb: "26 ASR models benchmarked. moonshine-tiny wins on device — same accuracy class, 14× faster than a 2.5B alternative.",
    longBlurb: "Fully local menubar dictation: CoreML + Moonshine-tiny, no clipboard, no network. Model choice came from WER/RTF on 560 clips across 7 categories.",
    metrics: [
      { k: "WER", v: "0.2177" },
      { k: "RTF", v: "0.05" },
      { k: "models tested", v: "26" },
      { k: "clips", v: "560" },
    ],
    findings: [
      "Near-identical WER can hide a 14× latency cliff",
      "Minimal repro beats speculative rearchitecture",
      "On-device beats cloud when privacy + p95 matter",
    ],
    stack: ["Swift", "CoreML", "ANE", "Python"],
    repo: "jwalin-shah/voice-engine-swift",
    color: "lime",
  },
  {
    slug: "tensor-logic",
    title: "Tensor Logic",
    kicker: "Empirical evaluation of Domingos (2025)",
    blurb: "Runnable demos from einsum → continual learning. Limits documented, not hidden.",
    longBlurb: "A learning / falsification project walking Pedro Domingos' tensor logic paper. Limits (parity/XOR class) are part of the result.",
    metrics: [
      { k: "paper", v: "Domingos 2025" },
      { k: "form", v: "demos" },
      { k: "stance", v: "falsify" },
    ],
    findings: [
      "Closed-form operators crush parameter count when they exist",
      "Honest limits are part of the result",
    ],
    stack: ["Go"],
    repo: "jwalin-shah/tensor-logic",
    color: "rose",
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
    { label: "agent verification", weight: 1.0 },
    { label: "evaluation", weight: 0.95 },
    { label: "grounded retrieval", weight: 0.9 },
    { label: "sandboxing", weight: 0.88 },
    { label: "fail-closed gates", weight: 0.85 },
    { label: "on-device", weight: 0.75 },
    { label: "MCP / tools", weight: 0.7 },
    { label: "robotics ops", weight: 0.55 },
  ],
  recentActivity: [
    { date: "Mar 2026–", what: "OpenHuman life_capture / curated_memory ownership", repo: "tinyhumansai/openhuman", href: "https://github.com/tinyhumansai/openhuman" },
    { date: "2026", what: "Bridge — spawn/verify/deliver + invariant catalog", repo: null, href: null },
    { date: "2026", what: "OfficeQA Arena — Sentient Cohort 0 grounded QA", repo: "jwalin-shah/officeqa-arena", href: "https://github.com/jwalin-shah/officeqa-arena" },
    { date: "2026", what: "Knowledge Engine — cocoindex/Neo4j parity gates", repo: null, href: null },
    { date: "2025", what: "Skild AI — robotics data ops through Series C demos", repo: null, href: null },
  ],
};
