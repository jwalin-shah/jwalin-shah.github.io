// Canonical profile data — aligned with resume-general.typ (2026-08-02)
// Spine: agent infrastructure + verification; experience: OpenHuman · Skild · BTW

window.PROFILE = {
  name: "Jwalin Shah",
  handle: "jwalin-shah",
  email: "jwalinshah13@gmail.com",
  linkedin: "linkedin.com/in/jwalin-shah",
  tagline: "AI Systems Engineer — Agent Infrastructure · Evaluation · Local-First AI",
  oneliner: "I build systems that constrain, observe, and verify probabilistic agents — so success is measured, not claimed.",
  location: "San Francisco Bay Area",
  status: "open to roles & research collabs",
  background: [
    { org: "OpenHuman (tinyhumansai)", role: "Core Contributor", note: "life_capture / curated_memory — on-device personal KB for a 35k+ star local-first agent" },
    { org: "Skild AI", role: "Data Operations Lead", note: "Robotics data systems · 5 platforms · 30+ operators · task success +40%, overhead –50%" },
    { org: "Break the Web / LiveLM", role: "AI Systems Engineer", note: "Real-time grounding · MCP tool-use eval · hit/partial/stale/miss abstention" },
  ],
  focus: [
    "Agent sandboxing & verification",
    "Evaluation harnesses & failure modes",
    "On-device inference (MLX / CoreML)",
    "Hybrid retrieval & personal memory",
    "Grounded / deterministic tool use",
    "MCP & tool-augmented agents",
  ],
};

// Featured first four are public; Bridge is discussable but private (no dead GitHub link).
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
    slug: "voice-engine",
    title: "Voice Engine",
    kicker: "Local dictation · measured selection",
    blurb: "26 ASR models benchmarked. moonshine-tiny wins on device — same accuracy class, 14× faster than a 2.5B alternative.",
    longBlurb: "Fully local menubar dictation: CoreML + Moonshine-tiny, no clipboard, no network. Model choice came from WER/RTF on 560 clips across 7 categories. Root-caused a CoreML production failure to an OS regression with a 4-float minimal repro.",
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
    color: "cyan",
  },
  {
    slug: "tensor-logic",
    title: "Tensor Logic",
    kicker: "Empirical evaluation of Domingos (2025)",
    blurb: "3 scalars beat a 71M MLP at transitive closure — and the limits are documented, not hidden.",
    longBlurb: "A learning / falsification project. TL recurrence trained once on 16-node graphs generalizes zero-shot to large OSS import graphs; parity-class tasks remain unlearnable. Architecture patterns reproduced with provenance from Linux, etcd, ZooKeeper, Kubernetes.",
    metrics: [
      { k: "TL params", v: "3" },
      { k: "MLP", v: "71M", unit: "fails OOD" },
      { k: "zero-shot", v: "n=1024" },
      { k: "biggest graph", v: "1,532" },
    ],
    findings: [
      "Closed-form operators crush parameter count when they exist",
      "Honest limits (parity/XOR) are part of the result",
      "Real OSS graphs > synthetic toys for credibility",
    ],
    stack: ["Go", "Z₂ algebra"],
    repo: "jwalin-shah/tensor-logic",
    color: "lime",
  },
  {
    slug: "officeqa-arena",
    title: "OfficeQA Arena",
    kicker: "Sentient Cohort 0 · Grounded QA",
    blurb: "184.5/246 at $1.71. Retrieval and tool choice — not “reasoning” — drove most failures.",
    longBlurb: "Systematic exploration of grounded numerical QA. Nine architectural generations; 3,600+ task evaluations. Simplicity won: shell grep on raw text beat an 11GB multi-component pipeline.",
    metrics: [
      { k: "score", v: "184.5", unit: "/246" },
      { k: "pass rate", v: "75%" },
      { k: "cost", v: "$1.71" },
      { k: "evals", v: "3,600+" },
    ],
    findings: [
      "Shell grep beat a heavyweight consensus pipeline",
      "48% of failures = wrong table/row/column extraction",
      "System fixes beat prompt-only ceilings",
    ],
    stack: ["Python", "Retrieval", "Eval harness"],
    repo: "jwalin-shah/officeqa-arena",
    color: "orange",
  },
  {
    slug: "bridge",
    title: "Bridge",
    kicker: "Reliable coding-agent execution · private",
    blurb: "Spawn / verify / deliver with default-deny OS sandboxing. Agents cannot certify their own success.",
    longBlurb: "Coding agents run in isolated git worktrees with declared allowed paths. Scope violations fail closed and are re-checked in a fresh checkout. Fixed a fail-open detection gate, hardened six adapter wrappers, and catalogued nine failure modes across multi-repo end-to-end runs. Repo is private — happy to walk through architecture and demos.",
    metrics: [
      { k: "sandbox", v: "deny-default" },
      { k: "adapters", v: "6", unit: "hardened" },
      { k: "failure modes", v: "9", unit: "catalogued" },
      { k: "verify", v: "fresh checkout" },
    ],
    findings: [
      "Detecting a scope violation is useless if the gate still passes",
      "Worker self-reports are not verification",
      "Worktree .git gitdir pointers break naive scaffold fixes",
    ],
    stack: ["Go", "Seatbelt", "Git worktrees"],
    repo: null,
    private: true,
    color: "amber",
  },
  {
    slug: "inbox",
    title: "Inbox",
    kicker: "Unified local TUI",
    blurb: "iMessage, Gmail, Calendar, Drive, Notes, Reminders, GitHub — one terminal surface.",
    metrics: [
      { k: "sources", v: "7" },
      { k: "stack", v: "FastAPI + Textual" },
    ],
    stack: ["Python", "FastAPI", "Textual"],
    repo: "jwalin-shah/inbox",
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
  // Placeholder density — replace with live GitHub contributions when wired
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
    { label: "local-first", weight: 0.9 },
    { label: "sandboxing", weight: 0.88 },
    { label: "retrieval", weight: 0.85 },
    { label: "on-device", weight: 0.8 },
    { label: "MCP / tools", weight: 0.75 },
    { label: "robotics ops", weight: 0.55 },
  ],
  recentActivity: [
    { date: "Jul 2026", what: "Voice Engine — measured ASR selection on device", repo: "voice-engine-swift", href: "https://github.com/jwalin-shah/voice-engine-swift" },
    { date: "Jul 2026", what: "Inbox TUI — seven local sources, one surface", repo: "inbox", href: "https://github.com/jwalin-shah/inbox" },
    { date: "Jul 2026", what: "Tensor Logic — Domingos demos + falsification notes", repo: "tensor-logic", href: "https://github.com/jwalin-shah/tensor-logic" },
    { date: "Mar 2026–", what: "OpenHuman life_capture / curated_memory ownership", repo: "openhuman", href: "https://github.com/tinyhumansai/openhuman" },
    { date: "2025", what: "Skild AI — robotics data ops through Series C demos", repo: "skild", href: null },
  ],
};
