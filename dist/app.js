(() => {
  // data.jsx
  window.PROFILE = {
    name: "Jwalin Shah",
    handle: "jwalin-shah",
    email: "jwalinshah13@gmail.com",
    linkedin: "linkedin.com/in/jwalin-shah",
    tagline: "AI Systems Engineer \u2014 Evaluation & Reliability \xB7 Tool-Augmented Reasoning \xB7 Privacy-First Systems",
    oneliner: "I build systems that measure, diagnose, and improve LLM behavior. Currently obsessed with grounded reasoning, deterministic computation, and on-device inference.",
    location: "San Francisco-ish",
    status: "open to research collabs",
    background: [
      { org: "Sentient Arena", role: "Research Contributor (Cohort 0)", note: "Grounded financial reasoning, eval infra, failure-mode analysis" },
      { org: "Skild AI", role: "Data Operations Lead", note: "Robotics data systems \xB7 5 platforms \xB7 25+ operators \xB7 task success +40%, overhead \u201350%" }
    ],
    focus: [
      "Grounded LLM reasoning",
      "Evaluation harnesses & telemetry",
      "Deterministic computation",
      "Tool-augmented agents",
      "Hallucination measurement",
      "On-device inference (MLX)",
      "Privacy-first architectures",
      "Robotics reliability"
    ]
  };
  window.PROJECTS = [
    {
      slug: "officeqa-arena",
      title: "OfficeQA Arena",
      kicker: "Grounded financial reasoning",
      blurb: "Multi-agent LLM system, top-tier (180+) on a 246-task financial benchmark. Built eval infra across 3,600+ tasks.",
      longBlurb: "Systematic exploration of grounded numerical QA over U.S. Treasury Bulletins. Demonstrated retrieval errors and tool selection \u2014 not model reasoning \u2014 drive the majority of failures.",
      metrics: [
        { k: "score", v: "184.5", unit: "/246" },
        { k: "pass rate", v: "75.0%" },
        { k: "cost", v: "$1.71", unit: "for 246 tasks" },
        { k: "iterations", v: "9", unit: "architectural generations" }
      ],
      findings: [
        "Simplicity wins \u2014 shell `grep` on raw TXT beat an 11GB SQLite + 10-component pipeline",
        "48% of failures = wrong table/row/column extraction",
        "Mentor framing > verifier framing (+13 points)",
        "Prompt ceiling sits around 70%"
      ],
      stack: ["MiniMax M2.5", "Goose", "OpenRouter", "Bash"],
      repo: "jwalin-shah/officeqa-arena",
      color: "amber"
    },
    {
      slug: "openhuman",
      title: "OpenHuman",
      kicker: "Contributor \xB7 Personal AI super intelligence",
      blurb: "Open-source agentic desktop assistant. Local-first knowledge base, deep OS integration, one account for many providers.",
      longBlurb: "A clean desktop experience that goes from install to working agent in a few clicks. Workflow data stays on device, encrypted locally. Contributing to the upstream project at tinyhumansai/openhuman.",
      metrics: [
        { k: "stars", v: "247", unit: "upstream" },
        { k: "forks", v: "36" },
        { k: "license", v: "GNU" },
        { k: "stage", v: "early beta" }
      ],
      findings: [
        "Neocortex \u2014 local-first KB that compounds context across tools",
        "Subconscious \u2014 background self-learning loops",
        "Screen Intelligence \u2014 agent reads what's on your screen",
        "Inline autocomplete + voice (STT/TTS) anywhere on desktop"
      ],
      stack: ["Rust", "Local AI", "MCP", "Skills"],
      repo: "tinyhumansai/openhuman",
      color: "violet"
    },
    {
      slug: "tensor-logic",
      title: "Tensor Logic \u2192 Cognition",
      kicker: "Working through Domingos (2025)",
      blurb: "A 3-scalar tensor-logic recurrence beats a 71M-param MLP at transitive closure \u2014 by 4+ orders of magnitude.",
      longBlurb: "A learning project, not a product. Each demo makes one idea click viscerally \u2014 from einsums to continual learning. Trained once on 16-node random DAGs; generalizes zero-shot to 1,500-node real Python import graphs.",
      metrics: [
        { k: "TL params", v: "3", unit: "scalars" },
        { k: "MLP params", v: "71M", unit: "fails at n=128" },
        { k: "mean F1", v: "0.975", unit: "across 8 OSS pkgs" },
        { k: "biggest graph", v: "1,532", unit: "nodes (sympy)" }
      ],
      findings: [
        "A logical rule and an einsum are the same operation",
        "Activation function picks the semantic (deduce / analogize / retrieve)",
        "TL is enormously parameter-efficient when a closed-form operator exists",
        "It can't magic one into existence \u2014 parity remains unlearnable"
      ],
      stack: ["PyTorch", "einsum", "EWC"],
      repo: "jwalin-shah/tensor-logic",
      color: "lime"
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
        { k: "hallucination gate", v: "96.2%", unit: "pass" }
      ],
      findings: [
        "Local-first inference > cloud-first for privacy + predictable latency",
        "Template-first + generation fallback cuts cost and risk",
        "Tried-and-rejected: pure embedding classifier, polling updates, heavy fine-tuning",
        "Evaluated 37 model configs across latency / Hit@5 / hallucination"
      ],
      stack: ["MLX", "sqlite-vec", "BM25", "FastAPI"],
      repo: "jwalin-shah/jarvis-ai-assistant",
      color: "cyan"
    },
    {
      slug: "inbox",
      title: "Inbox",
      kicker: "Unified terminal TUI",
      blurb: "iMessage, Gmail, Calendar, Drive, Notes, Reminders, GitHub \u2014 one TUI. MLX Whisper for ambient transcription.",
      metrics: [
        { k: "sources", v: "7" },
        { k: "stack", v: "MLX + Textual" },
        { k: "model", v: "Qwen 3.5 0.8B" }
      ],
      stack: ["FastAPI", "Textual", "MLX Whisper", "Qwen"],
      repo: "jwalin-shah/inbox",
      color: "rose"
    },
    {
      slug: "robo-replan",
      title: "RoboReplan",
      kicker: "Tabletop planning RL env",
      blurb: "Custom RL env with FastAPI state transitions. GRPO training. ~80% success on tabletop robot planning.",
      metrics: [
        { k: "success", v: "~80%" },
        { k: "method", v: "GRPO" }
      ],
      stack: ["FastAPI", "GRPO", "OpenEnv"],
      repo: "jwalin-shah/robo-replan",
      color: "orange"
    }
  ];
  window.STATS = {
    totalRepos: 19,
    publicRepos: 19,
    // Real counts from `gh repo list jwalin-shah` (Apr 2026): 13 Python, 1 TypeScript, 2 unspecified
    // Shown as % share of primary language across public repos
    topLangs: [
      { lang: "Python", pct: 81 },
      { lang: "TypeScript", pct: 6 },
      { lang: "Other", pct: 13 }
    ],
    // Mock contribution heatmap — 7 rows (days) × 26 cols (weeks of last 6 months)
    // Higher density toward the right (recency)
    contributions: Array.from(
      { length: 7 },
      (_, r) => Array.from({ length: 26 }, (_2, c) => {
        const recency = c / 26;
        const noise = Math.sin(r * 13 + c * 7) * 0.5 + 0.5;
        const v = Math.max(0, Math.min(4, Math.round(recency * 3 + noise * 2 - 0.4)));
        return v;
      })
    ),
    // Themes Jwalin cares about, with a "weight"
    themes: [
      { label: "evaluation", weight: 1 },
      { label: "grounded reasoning", weight: 0.95 },
      { label: "MLX", weight: 0.9 },
      { label: "privacy", weight: 0.85 },
      { label: "agents", weight: 0.8 },
      { label: "tensor logic", weight: 0.75 },
      { label: "telemetry", weight: 0.7 },
      { label: "RAG", weight: 0.65 },
      { label: "RL", weight: 0.5 },
      { label: "robotics", weight: 0.5 }
    ],
    // Real recent pushes from `gh repo list` (Apr 2026)
    recentActivity: [
      { date: "Apr 29", what: "tensor-logic \u2014 runnable demos for Domingos paper", repo: "tensor-logic" },
      { date: "Apr 29", what: "fafsa-engine \u2014 neurosymbolic FAFSA SAI pipeline", repo: "fafsa-engine" },
      { date: "Apr 27", what: "agihouse \u2014 ambient agent for Even Realities G2", repo: "agihouse" },
      { date: "Apr 26", what: "quicksilver-zk \u2014 pure-Python ZK proof system", repo: "quicksilver-zk" },
      { date: "Apr 24", what: "proof-of-action \u2014 provable privacy boundary (Ship to Prod)", repo: "proof-of-action" },
      { date: "Apr 18", what: "officeqa-arena v5 \u2014 184.5 / 246 best score", repo: "officeqa-arena" }
    ]
  };

  // dir-editorial.jsx
  var EditorialDir2 = () => {
    const { focus, background, email } = window.PROFILE;
    const projects = window.PROJECTS;
    const stats = window.STATS;
    const [openIdx, setOpenIdx] = React.useState(null);
    return /* @__PURE__ */ React.createElement("div", { className: "ed-root" }, /* @__PURE__ */ React.createElement("div", { className: "ed-paper" }, /* @__PURE__ */ React.createElement("header", { className: "ed-masthead" }, /* @__PURE__ */ React.createElement("div", { className: "ed-mast-row" }, /* @__PURE__ */ React.createElement("span", { className: "ed-mast-vol" }, "EST. 2024 \xB7 UPDATED MAY 2026"), /* @__PURE__ */ React.createElement("span", { className: "ed-mast-loc" }, "FILED FROM SF")), /* @__PURE__ */ React.createElement("h1", { className: "ed-mast-title" }, "Jwalin Shah"), /* @__PURE__ */ React.createElement("div", { className: "ed-mast-rule" }), /* @__PURE__ */ React.createElement("div", { className: "ed-mast-sub" }, "A working notebook of evaluation, reliability, and tool-augmented reasoning.")), /* @__PURE__ */ React.createElement("section", { className: "ed-lede" }, /* @__PURE__ */ React.createElement("div", { className: "ed-lede-kicker" }, "AI SYSTEMS ENGINEER \xB7 OPEN TO RESEARCH COLLABS"), /* @__PURE__ */ React.createElement("h2", { className: "ed-lede-h" }, "Building systems that ", /* @__PURE__ */ React.createElement("em", null, "measure, diagnose,"), " and ", /* @__PURE__ */ React.createElement("em", null, "improve"), " LLM behavior \u2014 and learning, in public, from the ones that fail."), /* @__PURE__ */ React.createElement("p", { className: "ed-lede-p" }, /* @__PURE__ */ React.createElement("span", { className: "ed-dropcap" }, "M"), "ost of the work here is about telemetry that surfaces real failure modes \u2014 not aggregate scores \u2014 across grounded reasoning, deterministic computation, and on-device inference. This page collects the projects, the numbers, and the things that didn\u2019t pan out. Everything is open source."), /* @__PURE__ */ React.createElement("div", { className: "ed-lede-meta" }, /* @__PURE__ */ React.createElement("a", { href: `mailto:${email}` }, email), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("a", { href: "https://github.com/jwalin-shah", target: "_blank", rel: "noopener" }, "github.com/jwalin-shah"), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("a", { href: "https://linkedin.com/in/jwalin-shah", target: "_blank", rel: "noopener" }, "linkedin/jwalin-shah"))), /* @__PURE__ */ React.createElement("section", { className: "ed-features" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "FEATURED PROJECTS"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 01")), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-grid" }, projects.slice(0, 4).map((p, i) => /* @__PURE__ */ React.createElement("article", { key: p.slug, className: `ed-feat ed-feat-${i}` }, /* @__PURE__ */ React.createElement("div", { className: "ed-feat-no" }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-kicker" }, p.kicker), /* @__PURE__ */ React.createElement("h3", { className: "ed-feat-title" }, p.title), /* @__PURE__ */ React.createElement("p", { className: "ed-feat-blurb" }, p.blurb), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-stats" }, p.metrics.slice(0, 2).map((m, j) => /* @__PURE__ */ React.createElement("div", { key: j, className: "ed-feat-stat" }, /* @__PURE__ */ React.createElement("div", { className: "ed-feat-stat-v" }, m.v), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-stat-k" }, m.k)))), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-actions" }, /* @__PURE__ */ React.createElement("button", { className: "ed-feat-read", onClick: () => setOpenIdx(i) }, "read the report \u27F6"), /* @__PURE__ */ React.createElement("a", { className: "ed-feat-repo", href: `https://github.com/${p.repo}`, target: "_blank", rel: "noopener" }, "github \u2197")))))), /* @__PURE__ */ React.createElement("section", { className: "ed-findings" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "SELECTED FINDINGS"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 02")), /* @__PURE__ */ React.createElement("table", { className: "ed-table" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { width: "8%" } }, "\u2116"), /* @__PURE__ */ React.createElement("th", { style: { width: "22%" } }, "FROM"), /* @__PURE__ */ React.createElement("th", null, "FINDING"))), /* @__PURE__ */ React.createElement("tbody", null, [
      { from: "officeqa-arena", line: "Shell `grep` on raw TXT (28KB) outperformed an 11GB SQLite + 10-component pipeline." },
      { from: "officeqa-arena", line: "48% of failures = wrong table/row/column extraction. 0% of correctly-grounded answers had arithmetic errors." },
      { from: "officeqa-arena", line: `"Review your intern's work" framing beat "verify your answer" by +13 points.` },
      { from: "tensor-logic", line: "A 3-scalar TL recurrence beats a 71M-param MLP on transitive closure by 4+ orders of magnitude." },
      { from: "tensor-logic", line: "TL is parameter-efficient when a closed-form operator exists; it cannot magic one into existence (XOR, parity, control flow)." },
      { from: "jarvis", line: "Template-first + generation fallback drops cost and hallucination risk vs pure-generation pipelines." },
      { from: "jarvis", line: "Local-first inference gives more predictable p95 latency than cloud-first under realistic load." }
    ].map((row, i) => /* @__PURE__ */ React.createElement("tr", { key: i }, /* @__PURE__ */ React.createElement("td", { className: "ed-td-no" }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("td", { className: "ed-td-from" }, row.from), /* @__PURE__ */ React.createElement("td", null, row.line)))))), /* @__PURE__ */ React.createElement("section", { className: "ed-twoup" }, /* @__PURE__ */ React.createElement("div", { className: "ed-twoup-col" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "FOCUS AREAS"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 03")), /* @__PURE__ */ React.createElement("ul", { className: "ed-focus-list" }, focus.map((f, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "ed-focus-no" }, String(i + 1).padStart(2, "0")), f)))), /* @__PURE__ */ React.createElement("div", { className: "ed-twoup-col" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "FIELD WORK"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 04")), background.map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "ed-bg-row" }, /* @__PURE__ */ React.createElement("div", { className: "ed-bg-org" }, b.org), /* @__PURE__ */ React.createElement("div", { className: "ed-bg-role" }, b.role), /* @__PURE__ */ React.createElement("div", { className: "ed-bg-note" }, b.note))), /* @__PURE__ */ React.createElement("div", { className: "ed-bg-row" }, /* @__PURE__ */ React.createElement("div", { className: "ed-bg-org" }, "Independent"), /* @__PURE__ */ React.createElement("div", { className: "ed-bg-role" }, stats.publicRepos, " public repos \xB7 primarily Python"), /* @__PURE__ */ React.createElement("div", { className: "ed-bg-note" }, /* @__PURE__ */ React.createElement("a", { href: "https://github.com/jwalin-shah?tab=repositories", target: "_blank", rel: "noopener" }, "github.com/jwalin-shah \u2192"))))), /* @__PURE__ */ React.createElement("section", { className: "ed-ledger" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "LEDGER \xB7 LANGUAGES & THEMES"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 05")), /* @__PURE__ */ React.createElement("div", { className: "ed-ledger-grid" }, /* @__PURE__ */ React.createElement("div", { className: "ed-ledger-langs" }, /* @__PURE__ */ React.createElement("div", { className: "ed-ledger-h" }, "By Primary Language (", stats.publicRepos, " public repos)"), stats.topLangs.map((l, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "ed-lang-row" }, /* @__PURE__ */ React.createElement("div", { className: "ed-lang-name" }, l.lang), /* @__PURE__ */ React.createElement("div", { className: "ed-lang-bar" }, /* @__PURE__ */ React.createElement("div", { className: "ed-lang-fill", style: { width: `${l.pct}%` } })), /* @__PURE__ */ React.createElement("div", { className: "ed-lang-pct" }, l.pct, "%")))), /* @__PURE__ */ React.createElement("div", { className: "ed-ledger-themes" }, /* @__PURE__ */ React.createElement("div", { className: "ed-ledger-h" }, "By Theme (weighted)"), /* @__PURE__ */ React.createElement("div", { className: "ed-themes" }, stats.themes.map((t, i) => /* @__PURE__ */ React.createElement(
      "span",
      {
        key: i,
        className: "ed-theme",
        style: {
          fontSize: `${10 + t.weight * 16}px`,
          opacity: 0.5 + t.weight * 0.5
        }
      },
      t.label
    ))))), /* @__PURE__ */ React.createElement("div", { className: "ed-ledger-activity" }, /* @__PURE__ */ React.createElement("div", { className: "ed-ledger-h" }, "Recent Pushes"), /* @__PURE__ */ React.createElement("table", { className: "ed-table ed-table-compact" }, /* @__PURE__ */ React.createElement("tbody", null, stats.recentActivity.map((a, i) => /* @__PURE__ */ React.createElement("tr", { key: i }, /* @__PURE__ */ React.createElement("td", { className: "ed-td-date" }, a.date), /* @__PURE__ */ React.createElement("td", { className: "ed-td-from" }, /* @__PURE__ */ React.createElement("a", { href: `https://github.com/jwalin-shah/${a.repo}`, target: "_blank", rel: "noopener" }, a.repo)), /* @__PURE__ */ React.createElement("td", null, a.what))))))), /* @__PURE__ */ React.createElement("section", { className: "ed-cta" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "COLLABORATE"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 06")), /* @__PURE__ */ React.createElement("div", { className: "ed-cta-grid" }, /* @__PURE__ */ React.createElement("div", { className: "ed-cta-text" }, /* @__PURE__ */ React.createElement("h3", { className: "ed-cta-h" }, "What I\u2019m looking for"), /* @__PURE__ */ React.createElement("ul", { className: "ed-cta-list" }, /* @__PURE__ */ React.createElement("li", null, "Research collaborations on grounded reasoning, evaluation, and reliability."), /* @__PURE__ */ React.createElement("li", null, "Eval and reliability work for teams shipping LLM-backed products."), /* @__PURE__ */ React.createElement("li", null, "On-device / privacy-first AI projects, especially on Apple Silicon."))), /* @__PURE__ */ React.createElement("div", { className: "ed-cta-actions" }, /* @__PURE__ */ React.createElement("a", { className: "ed-cta-btn ed-cta-btn-primary", href: `mailto:${email}?subject=Hi%20Jwalin` }, "Email me"), /* @__PURE__ */ React.createElement("a", { className: "ed-cta-btn", href: "https://linkedin.com/in/jwalin-shah", target: "_blank", rel: "noopener" }, "LinkedIn"), /* @__PURE__ */ React.createElement("a", { className: "ed-cta-btn", href: "https://github.com/jwalin-shah", target: "_blank", rel: "noopener" }, "GitHub"), /* @__PURE__ */ React.createElement("div", { className: "ed-cta-meta" }, email)))), /* @__PURE__ */ React.createElement("footer", { className: "ed-colophon" }, /* @__PURE__ */ React.createElement("div", { className: "ed-colophon-row" }, /* @__PURE__ */ React.createElement("span", null, "SET IN PLAYFAIR + SOURCE SERIF"), /* @__PURE__ */ React.createElement("span", null, "WRITTEN ON AN 8GB M2 AIR"), /* @__PURE__ */ React.createElement("span", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " JWALIN SHAH")), /* @__PURE__ */ React.createElement("div", { className: "ed-colophon-end" }, "\u2014 \xB7 30 \xB7 \u2014"))), openIdx !== null && /* @__PURE__ */ React.createElement(ProjectModal, { project: projects[openIdx], onClose: () => setOpenIdx(null) }));
  };
  var ProjectModal = ({ project, onClose }) => {
    React.useEffect(() => {
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);
    return /* @__PURE__ */ React.createElement("div", { className: "ed-modal-backdrop", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "ed-modal", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "ed-modal-x", onClick: onClose }, "close \u2715"), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-kicker" }, project.kicker), /* @__PURE__ */ React.createElement("h2", { className: "ed-modal-title" }, project.title), /* @__PURE__ */ React.createElement("p", { className: "ed-modal-blurb" }, project.longBlurb || project.blurb), /* @__PURE__ */ React.createElement("div", { className: "ed-modal-metrics" }, project.metrics.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "ed-modal-metric" }, /* @__PURE__ */ React.createElement("div", { className: "ed-modal-metric-v" }, m.v), /* @__PURE__ */ React.createElement("div", { className: "ed-modal-metric-k" }, m.k, m.unit ? /* @__PURE__ */ React.createElement("em", null, " \xB7 ", m.unit) : null)))), project.findings && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "FINDINGS")), /* @__PURE__ */ React.createElement("ul", { className: "ed-modal-findings" }, project.findings.map((f, i) => /* @__PURE__ */ React.createElement("li", { key: i }, f)))), /* @__PURE__ */ React.createElement("div", { className: "ed-modal-foot" }, /* @__PURE__ */ React.createElement("a", { href: `https://github.com/${project.repo}`, target: "_blank", rel: "noopener" }, "github.com/", project.repo, " \u2197"), /* @__PURE__ */ React.createElement("span", null, project.stack.join(" \xB7 ")))));
  };
  window.EditorialDir = EditorialDir2;

  // app-entry.jsx
  var App = () => /* @__PURE__ */ React.createElement(EditorialDir, null);
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
