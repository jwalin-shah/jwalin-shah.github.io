(() => {
  // data.jsx
  window.PROFILE = {
    name: "Jwalin Shah",
    handle: "jwalin-shah",
    email: "jwalinshah13@gmail.com",
    linkedin: "linkedin.com/in/jwalin-shah",
    tagline: "AI Systems Engineer \u2014 Agent Reliability \xB7 Evaluation \xB7 Local Inference",
    oneliner: "Builds systems that constrain, observe, and verify probabilistic agents under real-world constraints.",
    location: "San Francisco Bay Area",
    status: "open to roles & research collabs",
    background: [
      { org: "OpenHuman (tinyhumansai)", role: "Core Contributor", note: "69 merged upstream PRs \u2014 memory, RPC, privacy/security, reliability, tests" },
      { org: "Break the Web / LiveLM", role: "AI Systems Engineer", note: "~80K facts \xB7 ok/partial/stale/miss \xB7 ~11 ms warm p50 \xB7 71\xD73 + 512 probes" },
      { org: "Skild AI", role: "Data Operations Lead", note: "5 platforms \xB7 30+ operators \xB7 task success +40%, overhead \u201350% \xB7 Series C demos" }
    ],
    focus: [
      "Agent reliability & fail-closed verification",
      "Evaluation harnesses & trace analysis",
      "Grounded / hybrid retrieval",
      "Local inference (MLX / CoreML)",
      "Sandboxing & formal methods",
      "Operational reliability"
    ]
  };
  window.PROJECTS = [
    {
      slug: "openhuman",
      title: "OpenHuman",
      kicker: "Core contributor \xB7 69 merged PRs",
      blurb: "Landed 69 merged upstream PRs across memory, typed RPC/controllers, privacy/security, chat reliability, and tests \u2014 plus SQLite contact resolution and a prototyped on-device personal index.",
      longBlurb: "OpenHuman is a local-first personal AI (35k+ stars). Merged work spans citations/namespaces, CNContactStore identity scoring, a ~1,500-line CLI\u2192domain refactor, and 196 tests. Personal-index (life_capture) work is designed/prototyped \u2014 not claimed as fully merged A1\u2013A7.",
      metrics: [
        { k: "merged PRs", v: "69" },
        { k: "tests added", v: "196" },
        { k: "upstream stars", v: "35k+" },
        { k: "stack", v: "Rust/TS" }
      ],
      findings: [
        "Count merged PRs, not branch commit totals",
        "Contact identity is a product surface, not a glue script",
        "Prototype personal-index branches \u2260 shipped subsystems"
      ],
      stack: ["Rust", "TypeScript", "SQLite", "sqlite-vec"],
      repo: "tinyhumansai/openhuman",
      color: "violet"
    },
    {
      slug: "bridge",
      title: "Bridge",
      kicker: "Reliable coding-agent execution \xB7 private",
      blurb: "Spawn \u2192 verify \u2192 deliver with deny-default sandboxing, leased worktrees, and fresh-checkout verification. 77 invariants; 52 checked/proved.",
      longBlurb: "Isolated agent runtime: allowlisted adapters, macOS Seatbelt, leased worktrees, fresh-checkout verification so workers cannot certify their own outputs. 77 invariants with 28 property checkers, 8 Z3 proofs, 5 TLA+ models (incl. 1.58M-state exploration), and Lean proofs.",
      metrics: [
        { k: "invariants", v: "77" },
        { k: "checked/proved", v: "52" },
        { k: "Z3 proofs", v: "8" },
        { k: "TLA+ models", v: "5" }
      ],
      findings: [
        "Workers must not certify their own outputs",
        "Fail-closed verification beats self-report",
        "Formal methods belong next to the runtime, not in a drawer"
      ],
      stack: ["Go", "Seatbelt", "TLA+", "Z3", "Lean"],
      repo: null,
      private: true,
      color: "amber"
    },
    {
      slug: "officeqa-arena",
      title: "OfficeQA Arena",
      kicker: "Sentient Cohort 0 \xB7 Grounded QA",
      blurb: "184.5/246 (75%) for $1.71 after 12 architecture rounds and ~4,400 evaluations. Evidence selection caused 48% of failures.",
      longBlurb: "Grounded numerical QA over Treasury docs. Trace analysis: evidence selection caused 48% of failures; correctly grounded Python answers had 0% arithmetic errors \u2014 retrieval/tool selection, not model arithmetic, dominated.",
      metrics: [
        { k: "score", v: "184.5", unit: "/246" },
        { k: "pass", v: "75%" },
        { k: "cost", v: "$1.71" },
        { k: "evals", v: "~4,400" }
      ],
      findings: [
        "Evidence selection caused 48% of failures",
        "Correctly grounded Python: 0% arithmetic errors",
        "System architecture beats prompt-only ceilings"
      ],
      stack: ["Python", "Retrieval", "Eval harness"],
      repo: "jwalin-shah/officeqa-arena",
      color: "orange"
    },
    {
      slug: "voice-engine",
      title: "Voice Engine",
      kicker: "On-device speech \xB7 local inference",
      blurb: "Fully local Swift/CoreML dictation: Moonshine ASR, VAD, punctuation, native injection. 348/349 tests pass; one isolated CoreML OS regression.",
      longBlurb: "Zero-network dictation on Apple Silicon with WER/RTF harnesses for model/config tradeoffs. Public WER table omitted until the benchmark report is committed (SoT VO-03).",
      metrics: [
        { k: "tests", v: "348/349" },
        { k: "runtime", v: "local" },
        { k: "stack", v: "Swift/CoreML" },
        { k: "harness", v: "WER/RTF" }
      ],
      findings: [
        "One known CoreML OS-runtime failure \u2014 stated honestly",
        "Measure before shipping the bigger model",
        "Local injection beats clipboard hacks"
      ],
      stack: ["Swift", "CoreML", "MLX"],
      repo: "jwalin-shah/voice-engine-swift",
      color: "cyan"
    },
    {
      slug: "jarvis",
      title: "Jarvis",
      kicker: "Local-first personal agent \xB7 archived",
      blurb: "8 GB M2 Air: 0.42 s mean / 1.15 s p95, Hit@5 0.88, 96.2% hallucination-gate pass across 37 configs \u2014 precursor to OpenHuman memory work.",
      longBlurb: "Privacy-first local assistant with measured latency, retrieval, and hallucination gates. First project to cut when a tailored r\xE9sum\xE9 needs space.",
      metrics: [
        { k: "mean", v: "0.42s" },
        { k: "p95", v: "1.15s" },
        { k: "Hit@5", v: "0.88" },
        { k: "halluc. gate", v: "96.2%" }
      ],
      findings: [
        "Exact gates beat vibes for local agents",
        "Precursor patterns later informed OpenHuman work"
      ],
      stack: ["MLX", "sqlite-vec", "Python"],
      repo: "jwalin-shah/jarvis-ai-assistant",
      color: "lime"
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
      { label: "agent reliability", weight: 1 },
      { label: "evaluation", weight: 0.95 },
      { label: "local inference", weight: 0.9 },
      { label: "sandboxing", weight: 0.88 },
      { label: "grounded retrieval", weight: 0.85 },
      { label: "formal methods", weight: 0.8 },
      { label: "trace analysis", weight: 0.75 },
      { label: "robotics ops", weight: 0.55 }
    ],
    recentActivity: [
      { date: "Mar 2026\u2013", what: "OpenHuman \u2014 69 merged upstream PRs", repo: "tinyhumansai/openhuman", href: "https://github.com/tinyhumansai/openhuman" },
      { date: "May 2026\u2013", what: "LiveLM \u2014 retrieval + abstention eval", repo: null, href: null },
      { date: "2026", what: "Bridge \u2014 spawn/verify/deliver + 77 invariants", repo: null, href: null },
      { date: "2026", what: "OfficeQA Arena \u2014 184.5/246 grounded QA", repo: "jwalin-shah/officeqa-arena", href: "https://github.com/jwalin-shah/officeqa-arena" },
      { date: "2025", what: "Skild AI \u2014 robotics data ops through Series C", repo: null, href: null }
    ]
  };

  // dir-editorial.jsx
  var EditorialDir2 = () => {
    const { focus, background, email } = window.PROFILE;
    const projects = window.PROJECTS;
    const stats = window.STATS;
    const [openIdx, setOpenIdx] = React.useState(null);
    return /* @__PURE__ */ React.createElement("div", { className: "ed-root" }, /* @__PURE__ */ React.createElement("div", { className: "ed-paper" }, /* @__PURE__ */ React.createElement("header", { className: "ed-masthead" }, /* @__PURE__ */ React.createElement("div", { className: "ed-mast-row" }, /* @__PURE__ */ React.createElement("span", { className: "ed-mast-vol" }, "EST. 2024 \xB7 UPDATED AUG 2026"), /* @__PURE__ */ React.createElement("span", { className: "ed-mast-loc" }, "FILED FROM SF BAY")), /* @__PURE__ */ React.createElement("h1", { className: "ed-mast-title" }, "Jwalin Shah"), /* @__PURE__ */ React.createElement("div", { className: "ed-mast-rule" }), /* @__PURE__ */ React.createElement("div", { className: "ed-mast-sub" }, "Agent reliability, evaluation, and local inference \u2014 with the receipts.")), /* @__PURE__ */ React.createElement("section", { className: "ed-lede" }, /* @__PURE__ */ React.createElement("div", { className: "ed-lede-kicker" }, "AI SYSTEMS ENGINEER \xB7 OPEN TO ROLES & COLLABS"), /* @__PURE__ */ React.createElement("h2", { className: "ed-lede-h" }, "Systems that ", /* @__PURE__ */ React.createElement("em", null, "constrain, observe,"), " and ", /* @__PURE__ */ React.createElement("em", null, "verify"), " probabilistic agents \u2014 so success is measured, not claimed."), /* @__PURE__ */ React.createElement("p", { className: "ed-lede-p" }, /* @__PURE__ */ React.createElement("span", { className: "ed-dropcap" }, "I"), "land merged upstream work on OpenHuman, build LiveLM retrieval that abstains on stale evidence, and ship verification runtimes (Bridge) plus measured eval systems (OfficeQA, Voice, Jarvis). The through-line: deterministic systems around nondeterministic models."), /* @__PURE__ */ React.createElement("div", { className: "ed-lede-meta" }, /* @__PURE__ */ React.createElement("a", { href: `mailto:${email}` }, email), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("a", { href: "https://github.com/jwalin-shah", target: "_blank", rel: "noopener" }, "github.com/jwalin-shah"), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("a", { href: "https://linkedin.com/in/jwalin-shah", target: "_blank", rel: "noopener" }, "linkedin/jwalin-shah"))), /* @__PURE__ */ React.createElement("section", { className: "ed-features" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "FEATURED PROJECTS"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 01")), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-grid" }, projects.slice(0, 4).map((p, i) => /* @__PURE__ */ React.createElement("article", { key: p.slug, className: `ed-feat ed-feat-${i}` }, /* @__PURE__ */ React.createElement("div", { className: "ed-feat-no" }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-kicker" }, p.kicker), /* @__PURE__ */ React.createElement("h3", { className: "ed-feat-title" }, p.title), /* @__PURE__ */ React.createElement("p", { className: "ed-feat-blurb" }, p.blurb), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-stats" }, p.metrics.slice(0, 2).map((m, j) => /* @__PURE__ */ React.createElement("div", { key: j, className: "ed-feat-stat" }, /* @__PURE__ */ React.createElement("div", { className: "ed-feat-stat-v" }, m.v), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-stat-k" }, m.k)))), /* @__PURE__ */ React.createElement("div", { className: "ed-feat-actions" }, /* @__PURE__ */ React.createElement("button", { className: "ed-feat-read", onClick: () => setOpenIdx(i) }, "read the report \u27F6"), p.repo ? /* @__PURE__ */ React.createElement("a", { className: "ed-feat-repo", href: `https://github.com/${p.repo}`, target: "_blank", rel: "noopener" }, "github \u2197") : /* @__PURE__ */ React.createElement("span", { className: "ed-feat-repo" }, "private \xB7 ask me")))))), /* @__PURE__ */ React.createElement("section", { className: "ed-findings" }, /* @__PURE__ */ React.createElement("div", { className: "ed-section-rule" }, /* @__PURE__ */ React.createElement("span", null, "SELECTED FINDINGS"), /* @__PURE__ */ React.createElement("span", { className: "ed-section-no" }, "NO. 02")), /* @__PURE__ */ React.createElement("table", { className: "ed-table" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { width: "8%" } }, "\u2116"), /* @__PURE__ */ React.createElement("th", { style: { width: "22%" } }, "FROM"), /* @__PURE__ */ React.createElement("th", null, "FINDING"))), /* @__PURE__ */ React.createElement("tbody", null, [
      { from: "openhuman", line: "Count merged PRs (69), not branch commits \u2014 and never claim unmerged personal-index branches as shipped." },
      { from: "bridge", line: "Workers must not certify their own outputs: fresh-checkout verification + fail-closed gates." },
      { from: "officeqa-arena", line: "Evidence selection caused 48% of failures; correctly grounded Python had 0% arithmetic errors." },
      { from: "voice-engine", line: "348/349 tests pass; one isolated CoreML OS regression is stated, not hidden." },
      { from: "jarvis", line: "0.42s mean / Hit@5 0.88 / 96.2% hallucination-gate \u2014 exact local-agent gates beat vibes." },
      { from: "btw / livelm", line: "ok/partial/stale/miss routing at ~11 ms warm p50: abstain instead of inventing stale answers." }
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
