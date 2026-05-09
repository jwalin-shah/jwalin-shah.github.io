// Real data pulled from Jwalin's GitHub READMEs.
// Shared across all three design directions.

window.PROFILE = {
  name: "Jwalin Shah",
  handle: "jwalin-shah",
  email: "jwalinshah13@gmail.com",
  linkedin: "linkedin.com/in/jwalin-shah",
  tagline: "AI Systems Engineer — Evaluation & Reliability · Tool-Augmented Reasoning · Privacy-First Systems",
  oneliner: "I build systems that measure, diagnose, and improve LLM behavior. Currently obsessed with grounded reasoning, deterministic computation, and on-device inference.",
  location: "San Francisco-ish",
  status: "open to research collabs",
  background: [
    { org: "Sentient Arena", role: "Research Contributor (Cohort 0)", note: "Grounded financial reasoning, eval infra, failure-mode analysis" },
    { org: "Skild AI", role: "Data Operations Lead", note: "Robotics data systems · 5 platforms · 25+ operators · task success +40%, overhead –50%" },
  ],
  focus: [
    "Grounded LLM reasoning",
    "Evaluation harnesses & telemetry",
    "Deterministic computation",
    "Tool-augmented agents",
    "Hallucination measurement",
    "On-device inference (MLX)",
    "Privacy-first architectures",
    "Robotics reliability",
  ],
};

window.FINDINGS = [
  { from: "officeqa-arena", line: "Shell `grep` on raw TXT (28KB) outperformed an 11GB SQLite + 10-component pipeline.", source: "snapshot: officeqa-arena README/results, Apr 2026" },
  { from: "officeqa-arena", line: "48% of failures = wrong table/row/column extraction. 0% of correctly-grounded answers had arithmetic errors.", source: "snapshot: officeqa-arena failure analysis, Apr 2026" },
  { from: "officeqa-arena", line: '"Review your intern\'s work" framing beat "verify your answer" by +13 points.', source: "snapshot: officeqa-arena eval notes, Apr 2026" },
  { from: "tensor-logic", line: "A 3-scalar TL recurrence beats a 71M-param MLP on transitive closure by 4+ orders of magnitude.", source: "snapshot: tensor-logic README/results, Apr 2026" },
  { from: "tensor-logic", line: "TL is parameter-efficient when a closed-form operator exists; it cannot magic one into existence (XOR, parity, control flow).", source: "curated project finding, Apr 2026" },
  { from: "jarvis", line: "Template-first + generation fallback drops cost and hallucination risk vs pure-generation pipelines.", source: "curated project finding, Apr 2026" },
  { from: "jarvis", line: "Local-first inference gives more predictable p95 latency than cloud-first under realistic load.", source: "curated project finding, Apr 2026" },
];

// 4 highlight projects + 2 supporting
window.PROJECTS = [
  {
    slug: "officeqa-arena",
    title: "OfficeQA Arena",
    kicker: "Grounded financial reasoning",
    blurb: "Multi-agent LLM system, top-tier (180+) on a 246-task financial benchmark. Built eval infra across 3,600+ tasks.",
    longBlurb: "Systematic exploration of grounded numerical QA over U.S. Treasury Bulletins. Demonstrated retrieval errors and tool selection — not model reasoning — drive the majority of failures.",
    metrics: [
      { k: "score", v: "184.5", unit: "/246" },
      { k: "pass rate", v: "75.0%" },
      { k: "cost", v: "$1.71", unit: "for 246 tasks" },
      { k: "iterations", v: "9", unit: "architectural generations" },
    ],
    findings: [
      "Simplicity wins — shell `grep` on raw TXT beat an 11GB SQLite + 10-component pipeline",
      "48% of failures = wrong table/row/column extraction",
      "Mentor framing > verifier framing (+13 points)",
      "Prompt ceiling sits around 70%",
    ],
    stack: ["MiniMax M2.5", "Goose", "OpenRouter", "Bash"],
    repo: "jwalin-shah/officeqa-arena",
    evidence: "https://github.com/jwalin-shah/officeqa-arena",
    verified: "Apr 2026 repo snapshot",
    color: "amber",
  },
  {
    slug: "openhuman",
    title: "OpenHuman",
    kicker: "Contributor · Personal AI super intelligence",
    blurb: "Open-source agentic desktop assistant. Local-first knowledge base, deep OS integration, one account for many providers.",
    longBlurb: "A clean desktop experience that goes from install to working agent in a few clicks. Workflow data stays on device, encrypted locally. Contributing to the upstream project at tinyhumansai/openhuman.",
    metrics: [
      { k: "stars", v: "247", unit: "upstream" },
      { k: "forks", v: "36" },
      { k: "license", v: "GNU" },
      { k: "stage", v: "early beta" },
    ],
    findings: [
      "Neocortex — local-first KB that compounds context across tools",
      "Subconscious — background self-learning loops",
      "Screen Intelligence — agent reads what's on your screen",
      "Inline autocomplete + voice (STT/TTS) anywhere on desktop",
    ],
    stack: ["Rust", "Local AI", "MCP", "Skills"],
    repo: "tinyhumansai/openhuman",
    evidence: "https://github.com/tinyhumansai/openhuman",
    verified: "Apr 2026 upstream GitHub snapshot",
    color: "violet",
  },
  {
    slug: "tensor-logic",
    title: "Tensor Logic → Cognition",
    kicker: "Working through Domingos (2025)",
    blurb: "A 3-scalar tensor-logic recurrence beats a 71M-param MLP at transitive closure — by 4+ orders of magnitude.",
    longBlurb: "A learning project, not a product. Each demo makes one idea click viscerally — from einsums to continual learning. Trained once on 16-node random DAGs; generalizes zero-shot to 1,500-node real Python import graphs.",
    metrics: [
      { k: "TL params", v: "3", unit: "scalars" },
      { k: "MLP params", v: "71M", unit: "fails at n=128" },
      { k: "mean F1", v: "0.975", unit: "across 8 OSS pkgs" },
      { k: "biggest graph", v: "1,532", unit: "nodes (sympy)" },
    ],
    findings: [
      "A logical rule and an einsum are the same operation",
      "Activation function picks the semantic (deduce / analogize / retrieve)",
      "TL is enormously parameter-efficient when a closed-form operator exists",
      "It can't magic one into existence — parity remains unlearnable",
    ],
    stack: ["PyTorch", "einsum", "EWC"],
    repo: "jwalin-shah/tensor-logic",
    evidence: "https://github.com/jwalin-shah/tensor-logic",
    verified: "Apr 2026 repo snapshot",
    color: "lime",
  },
  {
    slug: "jarvis",
    title: "Jarvis",
    kicker: "Privacy-first iMessage assistant",
    blurb: "Local-first AI assistant on an 8GB M2 Air. MLX inference. <0.42s mean draft. <5% hallucination.",
    longBlurb: "End-to-end product system testing whether small local models can deliver practical reply drafting under strong latency and privacy constraints. Dual-path architecture: fast-path and background pipeline.",
    metrics: [
      { k: "mean draft", v: "0.42s" },
      { k: "p95 draft", v: "1.15s" },
      { k: "retrieval Hit@5", v: "0.88" },
      { k: "hallucination gate", v: "96.2%", unit: "pass" },
    ],
    findings: [
      "Local-first inference > cloud-first for privacy + predictable latency",
      "Template-first + generation fallback cuts cost and risk",
      "Tried-and-rejected: pure embedding classifier, polling updates, heavy fine-tuning",
      "Evaluated 37 model configs across latency / Hit@5 / hallucination",
    ],
    stack: ["MLX", "sqlite-vec", "BM25", "FastAPI"],
    repo: "jwalin-shah/jarvis-ai-assistant",
    evidence: "https://github.com/jwalin-shah/jarvis-ai-assistant",
    verified: "Apr 2026 repo snapshot",
    color: "cyan",
  },
  {
    slug: "inbox",
    title: "Inbox",
    kicker: "Unified terminal TUI",
    blurb: "iMessage, Gmail, Calendar, Drive, Notes, Reminders, GitHub — one TUI. MLX Whisper for ambient transcription.",
    metrics: [
      { k: "sources", v: "7" },
      { k: "stack", v: "MLX + Textual" },
      { k: "model", v: "Qwen 3.5 0.8B" },
    ],
    stack: ["FastAPI", "Textual", "MLX Whisper", "Qwen"],
    repo: "jwalin-shah/inbox",
    evidence: "https://github.com/jwalin-shah/inbox",
    verified: "curated project snapshot, Apr 2026",
    color: "rose",
  },
  {
    slug: "robo-replan",
    title: "RoboReplan",
    kicker: "Tabletop planning RL env",
    blurb: "Custom RL env with FastAPI state transitions. GRPO training. ~80% success on tabletop robot planning.",
    metrics: [
      { k: "success", v: "~80%" },
      { k: "method", v: "GRPO" },
    ],
    stack: ["FastAPI", "GRPO", "OpenEnv"],
    repo: "jwalin-shah/robo-replan",
    evidence: "https://github.com/jwalin-shah/robo-replan",
    verified: "curated project snapshot, Apr 2026",
    color: "orange",
  },
];

// Stats — the "redesigned" widgets pull from these
window.STATS = {
  totalRepos: 19,
  publicRepos: 19,
  verified: "Apr 2026 GitHub snapshot",
  // Real counts from `gh repo list jwalin-shah` (Apr 2026): 13 Python, 1 TypeScript, 2 unspecified
  // Shown as % share of primary language across public repos
  topLangs: [
    { lang: "Python", pct: 81 },
    { lang: "TypeScript", pct: 6 },
    { lang: "Other", pct: 13 },
  ],
  // Synthetic contribution heatmap, kept as a visual density sketch and labeled in UI.
  contributions: Array.from({ length: 7 }, (_, r) =>
    Array.from({ length: 26 }, (_, c) => {
      const recency = c / 26;
      const noise = Math.sin(r * 13 + c * 7) * 0.5 + 0.5;
      const v = Math.max(0, Math.min(4, Math.round(recency * 3 + noise * 2 - 0.4)));
      return v;
    })
  ),
  // Themes Jwalin cares about, with a "weight"
  themesVerified: "curated labels, Apr 2026",
  themes: [
    { label: "evaluation", weight: 1.0 },
    { label: "grounded reasoning", weight: 0.95 },
    { label: "MLX", weight: 0.9 },
    { label: "privacy", weight: 0.85 },
    { label: "agents", weight: 0.8 },
    { label: "tensor logic", weight: 0.75 },
    { label: "telemetry", weight: 0.7 },
    { label: "RAG", weight: 0.65 },
    { label: "RL", weight: 0.5 },
    { label: "robotics", weight: 0.5 },
  ],
  // Real recent pushes from `gh repo list` (Apr 2026)
  recentActivityVerified: "Apr 2026 gh repo list snapshot",
  recentActivity: [
    { date: "Apr 29", what: "tensor-logic — runnable demos for Domingos paper", repo: "tensor-logic" },
    { date: "Apr 29", what: "fafsa-engine — neurosymbolic FAFSA SAI pipeline", repo: "fafsa-engine" },
    { date: "Apr 27", what: "agihouse — ambient agent for Even Realities G2", repo: "agihouse" },
    { date: "Apr 26", what: "quicksilver-zk — pure-Python ZK proof system", repo: "quicksilver-zk" },
    { date: "Apr 24", what: "proof-of-action — provable privacy boundary (Ship to Prod)", repo: "proof-of-action" },
    { date: "Apr 18", what: "officeqa-arena v5 — 184.5 / 246 best score", repo: "officeqa-arena" },
  ],
};
