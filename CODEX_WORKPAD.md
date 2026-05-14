# Portfolio Readiness Reconciliation - 2026-05-12

Scope: presentation-track slice for the workspace-wide portfolio readiness goal.

## Live Status

- Branch: `main`
- Dirty surface before this slice: generated architecture docs and `.gitignore`
- Additional readiness edit in this slice: added
  `scripts/validate_publication.py`

## Validation

```bash
python3 scripts/validate_publication.py
```

Result: passed. The script checks required static assets, SVG parseability,
required public links/contact values, required data globals, required project
slugs, project-card repo owner/name shape, and the visible update marker.

```bash
git diff --check
```

Result: passed.

## Next Handoff

- The larger architecture candidate remains valid: add a publication build
  module so the deployed page does not depend on browser Babel/CDN runtime
  transforms.
- Next issue should preserve current visual output while adding a local static
  build and render smoke test.

## Slice: canonical claims source - 2026-05-12

Added `public_claims.json` and updated `scripts/validate_publication.py` so
required public links, project slugs, and the public update marker are checked
against the repo-local claims file instead of hardcoded validator constants.

Validation:

```bash
python3 scripts/validate_publication.py
```

Result: passed.

## Slice: static publication build - 2026-05-12

Implemented the GitHub Pages static-build slice:

- Added `package.json` and `package-lock.json` with a minimal `esbuild`
  development dependency.
- Added `app-entry.jsx` as the build entrypoint.
- Added checked-in build output at `dist/app.js`.
- Updated `index.html` to load `dist/app.js` directly and removed browser
  Babel plus `type="text/babel"` scripts.
- Added `scripts/smoke_static_build.py`.
- Updated `.gitignore` to ignore `node_modules/`.

Validation:

```bash
npm ci && npm run validate
```

Result: passed. This runs the esbuild bundle, publication validator, and static
build smoke check.

```bash
git diff --check
```

Result: passed.

Static server smoke:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
curl -fsS http://127.0.0.1:8765/
curl -fsS http://127.0.0.1:8765/dist/app.js
'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' \
  --headless=new --disable-gpu --no-first-run --no-default-browser-check \
  --screenshot=/tmp/profile-home.png --window-size=1280,1200 \
  http://127.0.0.1:8765/
```

Result: passed. The DOM contains rendered portfolio content and
`dist/app.js`; no browser Babel marker appears. Chrome wrote
`/tmp/profile-home.png` for visual inspection.

```bash
git diff --check
```

Result: passed.

## Fresh Static Smoke - 2026-05-13

Validation:

```bash
npm ci && npm run validate && git diff --check
```

Result: passed. `node_modules/` was removed after validation.

Static server smoke:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
curl -fsS http://127.0.0.1:8765/
curl -fsS http://127.0.0.1:8765/dist/app.js
'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' \
  --headless=new --disable-gpu --no-first-run --no-default-browser-check \
  --screenshot=/tmp/profile-home-current.png --window-size=1280,1200 \
  http://127.0.0.1:8765/
```

Result: passed. The index references `dist/app.js`, the bundle served at
23830 bytes, and Chrome wrote `/tmp/profile-home-current.png`.

Visual inspection:

- Screenshot renders the first viewport with the name, headline, contact row,
  and featured project grid visible.
- No obvious blank app shell, missing bundle, or first-viewport text overlap was
  visible in the 1280x1200 capture.

## Fresh Branch Handoff Check - 2026-05-13

Polish:

- Added a real package name, `jwalin-shah-github-io`, to `package.json` and
  `package-lock.json`.

Validation:

```bash
npm install --package-lock-only
npm ci && npm run validate && git diff --check
```

Result: passed. `node_modules/` was removed after validation.

Browser smoke:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
curl -fsS http://127.0.0.1:8765/
curl -fsS http://127.0.0.1:8765/dist/app.js
'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' \
  --headless=new --disable-gpu --no-first-run --no-default-browser-check \
  --screenshot=/tmp/profile-home-2026-05-13.png --window-size=1280,1200 \
  http://127.0.0.1:8765/
```

Result: passed. The HTML references `dist/app.js`, the bundle serves at 23830
bytes, and Chrome wrote a 180 KB screenshot to
`/tmp/profile-home-2026-05-13.png`.

Visual inspection:

- First viewport renders the masthead, headline, contact links, and project grid.
- No blank shell, missing bundle, or obvious text overlap was visible.

## Static Bundle Claim Sync Follow-Up - 2026-05-14

Gemini secondary review of merged PR #2 found no blockers, but recommended
refreshing the public update marker from April to May 2026 and checking that
compiled `dist/app.js` includes public claim markers.

Validation:

```bash
npm run validate
git diff --check
curl -fsS http://127.0.0.1:8765/
curl -fsS http://127.0.0.1:8765/dist/app.js
'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' \
  --headless=new --disable-gpu --no-first-run --no-default-browser-check \
  --screenshot=/tmp/profile-home-2026-05-14.png --window-size=1280,1200 \
  http://127.0.0.1:8765/
```

Result: passed. The served bundle contains `UPDATED MAY 2026`, and the Chrome
screenshot renders the first viewport with the updated marker, masthead,
headline, contact links, and project grid visible.

## WP-024 Local Validation Gate - 2026-05-14

Canonical local pre-handoff command:

```bash
npm run smoke
```

`npm run smoke` now rebuilds `dist/app.js`, runs the publication validator, and
then runs the static bundle smoke check. `npm run validate` is retained as an
alias for the same gate so older references do not define a competing command.

Validation:

```bash
npm run smoke
git diff --check
```

Result: passed after `npm ci` installed the lockfile dependencies. A follow-up
`npm run validate` also passed and delegated to `npm run smoke`.

PR: https://github.com/jwalin-shah/jwalin-shah.github.io/pull/4

## WP-080 Shallow Module Deepening - 2026-05-14

Deepened the publication validation surface by adding
`scripts/publication_contract.py` as the single interface for loading public
claims, aggregating public source text, and deriving compiled public markers.
`scripts/validate_publication.py` and `scripts/smoke_static_build.py` now use
that interface instead of duplicating `public_claims.json` shape assumptions.

Added `scripts/test_publication_contract.py` and wired it into `npm run smoke`
so the smoke gate exercises the publication contract directly before broader
publication and static bundle checks.

Validation:

```bash
npm run smoke
git diff --check
```

Result: passed after `npm ci` installed lockfile dependencies.

PR: https://github.com/jwalin-shah/jwalin-shah.github.io/pull/6
Implementation commit: 692084b044132441f9384b8da2868ba1d1951774
Residual risk: low; this is a validation-only refactor and does not change
the published page behavior.

## WP-108 Duplicate Logic Consolidation - 2026-05-14

Consolidated duplicated public-claim membership checks into
`PublicationContract`:

- `missing_required_public_links()` is now the canonical rule for required
  links that must appear in the public source text.
- `missing_compiled_public_markers()` is now the canonical rule for public
  claim markers that must appear in the compiled bundle.

`scripts/validate_publication.py`, `scripts/smoke_static_build.py`, and
`scripts/test_publication_contract.py` now route through those methods.

Validation:

```bash
npm run smoke
git diff --check
```

Result: passed after `npm ci` installed lockfile dependencies.

PR: https://github.com/jwalin-shah/jwalin-shah.github.io/pull/7
Residual risk: low; validation-only refactor with no published page behavior
change expected.
