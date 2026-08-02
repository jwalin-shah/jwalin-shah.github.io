(() => {
  // data.jsx
  window.PROFILE = {
    name: "Jwalin Shah",
    handle: "jwalin-shah",
    email: "jwalinshah13@gmail.com",
    linkedin: "linkedin.com/in/jwalin-shah",
    tagline: "AI Systems & Reliability Engineer \u2014 Agent Evaluation \xB7 Grounded Retrieval \xB7 Verification Infrastructure",
    oneliner: "Builds systems that constrain, observe, and verify probabilistic agents under real-world constraints.",
    location: "San Francisco Bay Area",
    status: "open to roles & research collabs",
    background: [
      { org: "OpenHuman (tinyhumansai)", role: "Core Contributor", note: "life_capture / curated_memory \u2014 on-device personal KB for a 35k+ star local-first agent" },
      { org: "Skild AI", role: "Data Operations Lead", note: "Robotics data systems \xB7 5 platforms \xB7 30+ operators \xB7 task success +40%, overhead \u201350%" },
      { org: "Break the Web / LiveLM", role: "AI Systems Engineer", note: "Real-time grounding \xB7 MCP tool-use eval \xB7 hit/partial/stale/miss abstention" }
    ],
    focus: [
      "Agent verification & fail-closed gates",
      "Grounded retrieval",
      "Evaluation harnesses & failure modes",
      "Sandboxing & independent verification",
      "On-device inference (MLX / CoreML)",
      "MCP & tool-augmented agents"
    ]
  };
  window.PROJECTS = [
    {
      slug: "openhuman",
      title: "OpenHuman",
      kicker: "Core contributor \xB7 Personal AI memory",
      blurb: "Own life_capture / curated_memory in the Rust core \u2014 the on-device index that turns messages, mail, calendar, and contacts into agent-reasoned knowledge.",
      longBlurb: "OpenHuman is a local-first personal AI (35k+ stars). I own the memory subsystem: hybrid retrieval (FTS + sqlite-vec), multi-source ingest, contact resolution, and session management \u2014 plus reliability work on chat streams, security-policy routes, and onboarding.",
      metrics: [
        { k: "upstream stars", v: "35k+" },
        { k: "commits", v: "80+" },
        { k: "stack", v: "Rust" },
        { k: "scope", v: "memory core" }
      ],
      findings: [
        "Personal context compounds only if ingest is correct before embed",
        "Hybrid FTS + vectors beats either alone for life-capture retrieval",
        "Contributor work spans memory, chat reliability, and security policy"
      ],
      stack: ["Rust", "SQLite", "sqlite-vec", "EventKit"],
      repo: "tinyhumansai/openhuman",
      color: "violet"
    },
    {
      slug: "bridge",
      title: "Bridge",
      kicker: "Reliable coding-agent execution \xB7 private",
      blurb: "Spawn / verify / deliver with default-deny OS sandboxing. Fresh-checkout verification \u2014 agents cannot certify their own success.",
      longBlurb: "Coding agents run in isolated git worktrees with declared allowed paths. Scope violations fail closed and are re-checked in a fresh checkout. 77 pipeline invariants with property tests plus TLA+ / Z3 / Lean verification layers. Repo is private \u2014 happy to walk through architecture and demos.",
      metrics: [
        { k: "invariants", v: "77" },
        { k: "sandbox", v: "deny-default" },
        { k: "verify", v: "fresh checkout" },
        { k: "proofs", v: "TLA+/Z3/Lean" }
      ],
      findings: [
        "Detecting a scope violation is useless if the gate still passes",
        "Worker self-reports are not verification",
        "Fail-closed beats fail-open \u2014 every time"
      ],
      stack: ["Go", "Seatbelt", "Git worktrees", "TLA+", "Z3", "Lean"],
      repo: null,
      private: true,
      color: "amber"
    },
    {
      slug: "officeqa-arena",
      title: "OfficeQA Arena",
      kicker: "Sentient Cohort 0 \xB7 Grounded QA",
      blurb: "Ranked top tier on a 246-task grounded financial QA benchmark. Retrieval and tool choice \u2014 not \u201Creasoning\u201D \u2014 drove most failures.",
      longBlurb: "Systematic exploration of grounded numerical QA over Treasury docs. Multiple architectural generations and thousands of task evaluations. Simplicity won: shell grep on raw text beat heavyweight multi-component pipelines. Full writeup in research.pdf.",
      metrics: [
        { k: "tasks", v: "246" },
        { k: "rank", v: "top tier" },
        { k: "evals", v: "3,600+" },
        { k: "paper", v: "research.pdf" }
      ],
      findings: [
        "Shell grep beat a heavyweight consensus pipeline",
        "Wrong table/row/column extraction dominated failures",
        "System fixes beat prompt-only ceilings"
      ],
      stack: ["Python", "Retrieval", "Eval harness"],
      repo: "jwalin-shah/officeqa-arena",
      color: "orange"
    },
    {
      slug: "knowledge-engine",
      title: "Knowledge Engine",
      kicker: "Local code & axiom graph \xB7 private",
      blurb: "cocoindex + Neo4j + tldr CALLS \u2014 the retrieval substrate Bridge consumes at spawn. Parity gates fail closed when disk and graph disagree.",
      longBlurb: "Local Neo4j graph indexing axioms, source references, and code structure. Catch-up indexing certified with exact file\u2194Chunk parity. Dumb pipe by design: materialize facts; Bridge owns context assembly at spawn.",
      metrics: [
        { k: "index", v: "cocoindex" },
        { k: "graph", v: "Neo4j" },
        { k: "gate", v: "parity fail-closed" },
        { k: "consumer", v: "Bridge spawn" }
      ],
      findings: [
        "Graph must match disk or the gate fails \u2014 no silent drift",
        "Retrieval substrate is infrastructure, not an agent persona",
        "Bridge consumes; KE does not invent success"
      ],
      stack: ["Python", "cocoindex", "Neo4j", "tldr"],
      repo: null,
      private: true,
      color: "cyan"
    },
    {
      slug: "voice-engine",
      title: "Voice Engine",
      kicker: "Local dictation \xB7 measured selection",
      blurb: "26 ASR models benchmarked. moonshine-tiny wins on device \u2014 same accuracy class, 14\xD7 faster than a 2.5B alternative.",
      longBlurb: "Fully local menubar dictation: CoreML + Moonshine-tiny, no clipboard, no network. Model choice came from WER/RTF on 560 clips across 7 categories.",
      metrics: [
        { k: "WER", v: "0.2177" },
        { k: "RTF", v: "0.05" },
        { k: "models tested", v: "26" },
        { k: "clips", v: "560" }
      ],
      findings: [
        "Near-identical WER can hide a 14\xD7 latency cliff",
        "Minimal repro beats speculative rearchitecture",
        "On-device beats cloud when privacy + p95 matter"
      ],
      stack: ["Swift", "CoreML", "ANE", "Python"],
      repo: "jwalin-shah/voice-engine-swift",
      color: "lime"
    },
    {
      slug: "tensor-logic",
      title: "Tensor Logic",
      kicker: "Empirical evaluation of Domingos (2025)",
      blurb: "Runnable demos from einsum \u2192 continual learning. Limits documented, not hidden.",
      longBlurb: "A learning / falsification project walking Pedro Domingos' tensor logic paper. Limits (parity/XOR class) are part of the result.",
      metrics: [
        { k: "paper", v: "Domingos 2025" },
        { k: "form", v: "demos" },
        { k: "stance", v: "falsify" }
      ],
      findings: [
        "Closed-form operators crush parameter count when they exist",
        "Honest limits are part of the result"
      ],
      stack: ["Go"],
      repo: "jwalin-shah/tensor-logic",
      color: "rose"
    }
  ];
  window.STATS = {
    totalRepos: 40,
    publicRepos: 40,
    topLangs: [
      { lang: "Python", pct: 45 },
      { lang: "Go", pct: 25 },
      { lang: "TypeScript", pct: 12 },
      { lang: "Rust / Swift / Other", pct: 18 }
    ],
    contributions: Array.from(
      { length: 7 },
      (_, r) => Array.from({ length: 26 }, (_2, c) => {
        const recency = c / 26;
        const noise = Math.sin(r * 13 + c * 7) * 0.5 + 0.5;
        return Math.max(0, Math.min(4, Math.round(recency * 3 + noise * 2 - 0.4)));
      })
    ),
    themes: [
      { label: "agent verification", weight: 1 },
      { label: "evaluation", weight: 0.95 },
      { label: "grounded retrieval", weight: 0.9 },
      { label: "sandboxing", weight: 0.88 },
      { label: "fail-closed gates", weight: 0.85 },
      { label: "on-device", weight: 0.75 },
      { label: "MCP / tools", weight: 0.7 },
      { label: "robotics ops", weight: 0.55 }
    ],
    recentActivity: [
      { date: "Mar 2026\u2013", what: "OpenHuman life_capture / curated_memory ownership", repo: "tinyhumansai/openhuman", href: "https://github.com/tinyhumansai/openhuman" },
      { date: "2026", what: "Bridge \u2014 spawn/verify/deliver + invariant catalog", repo: null, href: null },
      { date: "2026", what: "OfficeQA Arena \u2014 Sentient Cohort 0 grounded QA", repo: "jwalin-shah/officeqa-arena", href: "https://github.com/jwalin-shah/officeqa-arena" },
      { date: "2026", what: "Knowledge Engine \u2014 cocoindex/Neo4j parity gates", repo: null, href: null },
      { date: "2025", what: "Skild AI \u2014 robotics data ops through Series C demos", repo: null, href: null }
    ]
  };

  // dir-editorial.jsx
  var EditorialDir2 = () => {
    const { focus, background, email } = window.PROFILE;
    const projects = window.PROJECTS;
    const stats = window.STATS;
    const [openIdx, setOpenIdx] = React.useState(null);
    return /* @__PURE__ */ React.createElement("div", { className: "ed-root" }, /* @__PURE__ */ React.createElement("div", { className: "ed-paper" }, /* @__PURE__ */ React.createElement("header", { className: "ed-masthead" }, /* @__PURE__ */ React.createElement("div", { className: "ed-mast-row" }, /* @__PURE__ */ React.createElement("span", { className: "ed-mast-vol" }, "EST. 2024 \xB7 UPDATED AUG 2026"), /* @__PURE__ */ React.createElement("span", { className: "ed-mast-loc" }, "FILED FROM SF BAY")), /* @__PURE__ */ React.createElement("h1", { className: "ed-mast-title" }, "Jwalin Shah"), /* @__PURE__ */ React.createElement("div", { className: "ed-mast-rule" }), /* @__PURE__ */ React.createElement("div", { className: "ed-mast-sub" }, "Agent evaluation, grounded retrieval, and verification infrastructure \u2014 with the receipts.")), /* @__PURE__ */ React.createElement("section", { className: "ed-lede" }, /* @__PURE__ */ React.createElement("div", { className: "ed-lede-kicker" }, "AI SYSTEMS & RELIABILITY ENGINEER \xB7 OPEN TO ROLES & COLLABS"), /* @__PURE__ */ React.createElement("h2", { className: "ed-lede-h" }, "Systems that ", /* @__PURE__ */ React.createElement("em", null, "constrain, observe,"), " and ", /* @__PURE__ */ React.createElement("em", null, "verify"), " probabilistic agents \u2014 so success is measured, not claimed."), /* @__PURE__ */ React.createElement("p", { className: "ed-lede-p" }, /* @__PURE__ */ React.createElement("span", { className: "ed-dropcap" }, "I"), "own the memory core for OpenHuman, ran robotics data ops at Skild through a $1B Series C, and build verification + evaluation systems (Bridge, LiveLM, OfficeQA) that force agents to abstain or fail closed when evidence is missing. The through-line: isolation, contracts, independent checks, and failure-mode measurement."), /* @__PURE__ */ React.createElement("div", { className: "ed-lede-meta" }, /* @__PURE__ */ React.createElement("a", { href: `mailto:${email}` }, email), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("a", { href: "https://github.com/jwalin-shah", target: "_blank", rel: "noopener" }, "github.com/jwalin-shah"), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("a", { href: "https://linkedin.com/in/jwalin-shah", target: "_blank", rel: "noopener" }, "linkedin/jwalin-shah"))), /* @__PURE__ */ React.createElement("section", { className: "ed-features" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "FEATURED PROJECTS"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 01")), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-grid" }, projects.slice(0, 4).map((p, i) => /* @__PURE__ */ React.createElement("article", { key: p.slug, className: `ed-feat ed-feat-${i}` }, /* @__PURE__ */ React.createElement("div", { className: "ed-feat-no" }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-kicker" }, p.kicker), /* @__PURE__ */ React.createElement("h3", { className: "ed-feat-title" }, p.title), /* @__PURE__ */ React.createElement("p", { className: "ed-feat-blurb" }, p.blurb), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-stats" }, p.metrics.slice(0, 2).map((m, j) => /* @__PURE__ */ React.createElement("div", { key: j, className: "ed-feat-stat" }, /* @__PURE__ */ React.createElement("div", { className: "ed-feat-stat-v" }, m.v), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-stat-k" }, m.k)))), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-actions" }, /* @__PURE__ */ React.createElement("button", { className: "ed-feat-read", onClick: () => setOpenIdx(i) }, "read the report \u27F6"), p.repo ? /* @__PURE__ */ React.createElement("a", { className: "ed-feat-repo", href: `https://github.com/${p.repo}`, target: "_blank", rel: "noopener" }, "github \u2197") : /* @__PURE__ */ React.createElement("span", { className: "ed-feat-repo" }, "private \xB7 ask me")))))), /* @__PURE__ */ React.createElement("section", { className: "ed-findings" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "SELECTED FINDINGS"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 02")), /* @__PURE__ */ React.createElement("table", { className: "ed-table" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { width: "8%" } }, "\u2116"), /* @__PURE__ */ React.createElement("th", { style: { width: "22%" } }, "FROM"), /* @__PURE__ */ React.createElement("th", null, "FINDING"))), /* @__PURE__ */ React.createElement("tbody", null, [
      { from: "openhuman", line: "On-device personal memory only compounds if ingest is correct before embed \u2014 hybrid FTS + vectors beats either alone." },
      { from: "bridge", line: "Detecting a scope violation is useless if the gate still passes. Agents must not certify their own success." },
      { from: "knowledge-engine", line: "Disk \u2194 graph parity is a gate: indexing that drifts silently is not a retrieval substrate." },
      { from: "officeqa-arena", line: "Retrieval and tool selection \u2014 not model arithmetic \u2014 drove most grounded-QA failures." },
      { from: "voice-engine", line: "Near-identical WER can hide a 14\xD7 latency cliff \u2014 measure RTF before shipping the bigger model." },
      { from: "btw / livelm", line: "Explicit hit/partial/stale/miss routing: abstain when evidence is missing instead of inventing a plausible answer." }
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
    ))))), /* @__PURE__ */ React.createElement("div", { className: "ed-ledger-activity" }, /* @__PURE__ */ React.createElement("div", { className: "ed-ledger-h" }, "Recent Pushes"), /* @__PURE__ */ React.createElement("table", { className: "ed-table ed-table-compact" }, /* @__PURE__ */ React.createElement("tbody", null, stats.recentActivity.map((a, i) => /* @__PURE__ */ React.createElement("tr", { key: i }, /* @__PURE__ */ React.createElement("td", { className: "ed-td-date" }, a.date), /* @__PURE__ */ React.createElement("td", { className: "ed-td-from" }, a.href ? /* @__PURE__ */ React.createElement("a", { href: a.href, target: "_blank", rel: "noopener" }, a.repo) : /* @__PURE__ */ React.createElement("span", null, a.repo)), /* @__PURE__ */ React.createElement("td", null, a.what))))))), /* @__PURE__ */ React.createElement("section", { className: "ed-cta" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "COLLABORATE"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 06")), /* @__PURE__ */ React.createElement("div", { className: "ed-cta-grid" }, /* @__PURE__ */ React.createElement("div", { className: "ed-cta-text" }, /* @__PURE__ */ React.createElement("h3", { className: "ed-cta-h" }, "What I\u2019m looking for"), /* @__PURE__ */ React.createElement("ul", { className: "ed-cta-list" }, /* @__PURE__ */ React.createElement("li", null, "Agent infrastructure / sandboxing / verification roles."), /* @__PURE__ */ React.createElement("li", null, "Evaluation & reliability for teams shipping tool-using LLM products."), /* @__PURE__ */ React.createElement("li", null, "Local-first / on-device AI (Apple Silicon, personal memory, privacy)."))), /* @__PURE__ */ React.createElement("div", { className: "ed-cta-actions" }, /* @__PURE__ */ React.createElement("a", { className: "ed-cta-btn ed-cta-btn-primary", href: `mailto:${email}?subject=Hi%20Jwalin` }, "Email me"), /* @__PURE__ */ React.createElement("a", { className: "ed-cta-btn", href: "https://linkedin.com/in/jwalin-shah", target: "_blank", rel: "noopener" }, "LinkedIn"), /* @__PURE__ */ React.createElement("a", { className: "ed-cta-btn", href: "https://github.com/jwalin-shah", target: "_blank", rel: "noopener" }, "GitHub"), /* @__PURE__ */ React.createElement("div", { className: "ed-cta-meta" }, email)))), /* @__PURE__ */ React.createElement("footer", { className: "ed-colophon" }, /* @__PURE__ */ React.createElement("div", { className: "ed-colophon-row" }, /* @__PURE__ */ React.createElement("span", null, "SET IN PLAYFAIR + SOURCE SERIF"), /* @__PURE__ */ React.createElement("span", null, "WRITTEN ON AN 8GB M2 AIR"), /* @__PURE__ */ React.createElement("span", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " JWALIN SHAH")), /* @__PURE__ */ React.createElement("div", { className: "ed-colophon-end" }, "\u2014 \xB7 30 \xB7 \u2014"))), openIdx !== null && /* @__PURE__ */ React.createElement(ProjectModal, { project: projects[openIdx], onClose: () => setOpenIdx(null) }));
  };
  var ProjectModal = ({ project, onClose }) => {
    React.useEffect(() => {
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);
    return /* @__PURE__ */ React.createElement("div", { className: "ed-modal-backdrop", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "ed-modal", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "ed-modal-x", onClick: onClose }, "close \u2715"), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-kicker" }, project.kicker), /* @__PURE__ */ React.createElement("h2", { className: "ed-modal-title" }, project.title), /* @__PURE__ */ React.createElement("p", { className: "ed-modal-blurb" }, project.longBlurb || project.blurb), /* @__PURE__ */ React.createElement("div", { className: "ed-modal-metrics" }, project.metrics.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "ed-modal-metric" }, /* @__PURE__ */ React.createElement("div", { className: "ed-modal-metric-v" }, m.v), /* @__PURE__ */ React.createElement("div", { className: "ed-modal-metric-k" }, m.k, m.unit ? /* @__PURE__ */ React.createElement("em", null, " \xB7 ", m.unit) : null)))), project.findings && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "FINDINGS")), /* @__PURE__ */ React.createElement("ul", { className: "ed-modal-findings" }, project.findings.map((f, i) => /* @__PURE__ */ React.createElement("li", { key: i }, f)))), /* @__PURE__ */ React.createElement("div", { className: "ed-modal-foot" }, project.repo ? /* @__PURE__ */ React.createElement("a", { href: `https://github.com/${project.repo}`, target: "_blank", rel: "noopener" }, "github.com/", project.repo, " \u2197") : /* @__PURE__ */ React.createElement("span", null, "private \xB7 walkthrough on request"), /* @__PURE__ */ React.createElement("span", null, project.stack.join(" \xB7 ")))));
  };
  window.EditorialDir = EditorialDir2;

  // app-entry.jsx
  var App = () => /* @__PURE__ */ React.createElement(EditorialDir, null);
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
