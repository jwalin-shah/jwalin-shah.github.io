// EDITORIAL — research-lab notebook layout.
// Serif headlines, dense data, real links, contact CTA.

const EditorialDir = () => {
  const { focus, background, email } = window.PROFILE;
  const projects = window.PROJECTS;
  const stats = window.STATS;

  const [openIdx, setOpenIdx] = React.useState(null);

  return (
    <div className="ed-root">
      <div className="ed-paper">
        {/* Masthead — research-lab voice, no fake issue numbers */}
        <header className="ed-masthead">
          <div className="ed-mast-row">
            <span className="ed-mast-vol">EST. 2024 · UPDATED APR 2026</span>
            <span className="ed-mast-loc">FILED FROM SF</span>
          </div>
          <h1 className="ed-mast-title">Jwalin Shah</h1>
          <div className="ed-mast-rule" />
          <div className="ed-mast-sub">
            A working notebook of evaluation, reliability, and tool-augmented reasoning.
          </div>
        </header>

        {/* Lede */}
        <section className="ed-lede">
          <div className="ed-lede-kicker">AI SYSTEMS ENGINEER · OPEN TO RESEARCH COLLABS</div>
          <h2 className="ed-lede-h">
            Building systems that <em>measure, diagnose,</em> and <em>improve</em> LLM behavior
            — and learning, in public, from the ones that fail.
          </h2>
          <p className="ed-lede-p">
            <span className="ed-dropcap">M</span>
            ost of the work here is about telemetry that surfaces real failure modes — not
            aggregate scores — across grounded reasoning, deterministic computation, and
            on-device inference. This page collects the projects, the numbers, and the things
            that didn&rsquo;t pan out. Everything is open source.
          </p>
          <div className="ed-lede-meta">
            <a href={`mailto:${email}`}>{email}</a>
            <span>·</span>
            <a href="https://github.com/jwalin-shah" target="_blank" rel="noopener">github.com/jwalin-shah</a>
            <span>·</span>
            <a href="https://linkedin.com/in/jwalin-shah" target="_blank" rel="noopener">linkedin/jwalin-shah</a>
          </div>
        </section>

        {/* Featured grid */}
        <section className="ed-features">
          <div className="ed-section-rule">
            <span>FEATURED PROJECTS</span>
            <span className="ed-section-no">NO. 01</span>
          </div>

          <div className="ed-feat-grid">
            {projects.slice(0, 4).map((p, i) => (
              <article key={p.slug} className={`ed-feat ed-feat-${i}`}>
                <div className="ed-feat-no">{String(i + 1).padStart(2, "0")}</div>
                <div className="ed-feat-kicker">{p.kicker}</div>
                <h3 className="ed-feat-title">{p.title}</h3>
                <p className="ed-feat-blurb">{p.blurb}</p>
                <div className="ed-feat-stats">
                  {p.metrics.slice(0, 2).map((m, j) => (
                    <div key={j} className="ed-feat-stat">
                      <div className="ed-feat-stat-v">{m.v}</div>
                      <div className="ed-feat-stat-k">{m.k}</div>
                    </div>
                  ))}
                </div>
                <div className="ed-feat-actions">
                  <button className="ed-feat-read" onClick={() => setOpenIdx(i)}>read the report ⟶</button>
                  <a className="ed-feat-repo" href={`https://github.com/${p.repo}`} target="_blank" rel="noopener">
                    github ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Findings table */}
        <section className="ed-findings">
          <div className="ed-section-rule">
            <span>SELECTED FINDINGS</span>
            <span className="ed-section-no">NO. 02</span>
          </div>
          <table className="ed-table">
            <thead>
              <tr>
                <th style={{ width: "8%" }}>№</th>
                <th style={{ width: "22%" }}>FROM</th>
                <th>FINDING</th>
              </tr>
            </thead>
            <tbody>
              {[
                { from: "officeqa-arena", line: "Shell `grep` on raw TXT (28KB) outperformed an 11GB SQLite + 10-component pipeline." },
                { from: "officeqa-arena", line: "48% of failures = wrong table/row/column extraction. 0% of correctly-grounded answers had arithmetic errors." },
                { from: "officeqa-arena", line: '"Review your intern\'s work" framing beat "verify your answer" by +13 points.' },
                { from: "tensor-logic", line: "A 3-scalar TL recurrence beats a 71M-param MLP on transitive closure by 4+ orders of magnitude." },
                { from: "tensor-logic", line: "TL is parameter-efficient when a closed-form operator exists; it cannot magic one into existence (XOR, parity, control flow)." },
                { from: "jarvis", line: "Template-first + generation fallback drops cost and hallucination risk vs pure-generation pipelines." },
                { from: "jarvis", line: "Local-first inference gives more predictable p95 latency than cloud-first under realistic load." },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="ed-td-no">{String(i + 1).padStart(2, "0")}</td>
                  <td className="ed-td-from">{row.from}</td>
                  <td>{row.line}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Two-up: focus + background */}
        <section className="ed-twoup">
          <div className="ed-twoup-col">
            <div className="ed-section-rule">
              <span>FOCUS AREAS</span>
              <span className="ed-section-no">NO. 03</span>
            </div>
            <ul className="ed-focus-list">
              {focus.map((f, i) => (
                <li key={i}>
                  <span className="ed-focus-no">{String(i + 1).padStart(2, "0")}</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="ed-twoup-col">
            <div className="ed-section-rule">
              <span>FIELD WORK</span>
              <span className="ed-section-no">NO. 04</span>
            </div>
            {background.map((b, i) => (
              <div key={i} className="ed-bg-row">
                <div className="ed-bg-org">{b.org}</div>
                <div className="ed-bg-role">{b.role}</div>
                <div className="ed-bg-note">{b.note}</div>
              </div>
            ))}
            <div className="ed-bg-row">
              <div className="ed-bg-org">Independent</div>
              <div className="ed-bg-role">{stats.publicRepos} public repos · primarily Python</div>
              <div className="ed-bg-note">
                <a href="https://github.com/jwalin-shah?tab=repositories" target="_blank" rel="noopener">
                  github.com/jwalin-shah →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ledger */}
        <section className="ed-ledger">
          <div className="ed-section-rule">
            <span>LEDGER · LANGUAGES &amp; THEMES</span>
            <span className="ed-section-no">NO. 05</span>
          </div>

          <div className="ed-ledger-grid">
            <div className="ed-ledger-langs">
              <div className="ed-ledger-h">By Primary Language ({stats.publicRepos} public repos)</div>
              {stats.topLangs.map((l, i) => (
                <div key={i} className="ed-lang-row">
                  <div className="ed-lang-name">{l.lang}</div>
                  <div className="ed-lang-bar">
                    <div className="ed-lang-fill" style={{ width: `${l.pct}%` }} />
                  </div>
                  <div className="ed-lang-pct">{l.pct}%</div>
                </div>
              ))}
            </div>

            <div className="ed-ledger-themes">
              <div className="ed-ledger-h">By Theme (weighted)</div>
              <div className="ed-themes">
                {stats.themes.map((t, i) => (
                  <span
                    key={i}
                    className="ed-theme"
                    style={{
                      fontSize: `${10 + t.weight * 16}px`,
                      opacity: 0.5 + t.weight * 0.5,
                    }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="ed-ledger-activity">
            <div className="ed-ledger-h">Recent Pushes</div>
            <table className="ed-table ed-table-compact">
              <tbody>
                {stats.recentActivity.map((a, i) => (
                  <tr key={i}>
                    <td className="ed-td-date">{a.date}</td>
                    <td className="ed-td-from">
                      <a href={`https://github.com/jwalin-shah/${a.repo}`} target="_blank" rel="noopener">
                        {a.repo}
                      </a>
                    </td>
                    <td>{a.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Collaborate / Contact CTA */}
        <section className="ed-cta">
          <div className="ed-section-rule">
            <span>COLLABORATE</span>
            <span className="ed-section-no">NO. 06</span>
          </div>
          <div className="ed-cta-grid">
            <div className="ed-cta-text">
              <h3 className="ed-cta-h">What I&rsquo;m looking for</h3>
              <ul className="ed-cta-list">
                <li>Research collaborations on grounded reasoning, evaluation, and reliability.</li>
                <li>Eval and reliability work for teams shipping LLM-backed products.</li>
                <li>On-device / privacy-first AI projects, especially on Apple Silicon.</li>
              </ul>
            </div>
            <div className="ed-cta-actions">
              <a className="ed-cta-btn ed-cta-btn-primary" href={`mailto:${email}?subject=Hi%20Jwalin`}>
                Email me
              </a>
              <a className="ed-cta-btn" href="https://linkedin.com/in/jwalin-shah" target="_blank" rel="noopener">
                LinkedIn
              </a>
              <a className="ed-cta-btn" href="https://github.com/jwalin-shah" target="_blank" rel="noopener">
                GitHub
              </a>
              <div className="ed-cta-meta">{email}</div>
            </div>
          </div>
        </section>

        {/* Colophon */}
        <footer className="ed-colophon">
          <div className="ed-colophon-row">
            <span>SET IN PLAYFAIR + SOURCE SERIF</span>
            <span>WRITTEN ON AN 8GB M2 AIR</span>
            <span>&copy; {new Date().getFullYear()} JWALIN SHAH</span>
          </div>
          <div className="ed-colophon-end">— · 30 · —</div>
        </footer>
      </div>

      {openIdx !== null && (
        <ProjectModal project={projects[openIdx]} onClose={() => setOpenIdx(null)} />
      )}
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="ed-modal-backdrop" onClick={onClose}>
      <div className="ed-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ed-modal-x" onClick={onClose}>close ✕</button>
        <div className="ed-feat-kicker">{project.kicker}</div>
        <h2 className="ed-modal-title">{project.title}</h2>
        <p className="ed-modal-blurb">{project.longBlurb || project.blurb}</p>

        <div className="ed-modal-metrics">
          {project.metrics.map((m, i) => (
            <div key={i} className="ed-modal-metric">
              <div className="ed-modal-metric-v">{m.v}</div>
              <div className="ed-modal-metric-k">
                {m.k}
                {m.unit ? <em> · {m.unit}</em> : null}
              </div>
            </div>
          ))}
        </div>

        {project.findings && (
          <>
            <div className="ed-section-rule"><span>FINDINGS</span></div>
            <ul className="ed-modal-findings">
              {project.findings.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </>
        )}

        <div className="ed-modal-foot">
          <a href={`https://github.com/${project.repo}`} target="_blank" rel="noopener">
            github.com/{project.repo} ↗
          </a>
          <span>{project.stack.join(" · ")}</span>
        </div>
      </div>
    </div>
  );
};

window.EditorialDir = EditorialDir;
