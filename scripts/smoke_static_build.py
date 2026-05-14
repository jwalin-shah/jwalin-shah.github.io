#!/usr/bin/env python3
from __future__ import annotations

import json
import subprocess
import sys
import textwrap
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def fail(message: str) -> None:
    print(f"static build smoke failed: {message}", file=sys.stderr)
    raise SystemExit(1)


def run_bundle_contract() -> dict:
    script = textwrap.dedent(
        """
        global.window = global;
        global.document = { getElementById: () => ({}) };
        global.__renderedFunctionComponents = [];

        const renderElement = (node) => {
          if (Array.isArray(node)) {
            node.forEach(renderElement);
            return;
          }
          if (!node || typeof node !== "object") {
            return;
          }
          if (typeof node.type === "function") {
            global.__renderedFunctionComponents.push(node.type.name || "<anonymous>");
            renderElement(node.type({ ...(node.props || {}), children: node.children }));
            return;
          }
          renderElement(node.children);
        };

        global.React = {
          createElement: (type, props, ...children) => ({
            type,
            props: { ...(props || {}), children },
            children,
          }),
          useEffect: () => {},
          useState: (initial) => [initial, () => {}],
        };
        global.ReactDOM = { createRoot: () => ({ render: renderElement }) };

        require("./dist/app.js");

        process.stdout.write(JSON.stringify({
          profile: global.PROFILE,
          projects: global.PROJECTS,
          stats: global.STATS,
          renderedFunctionComponents: global.__renderedFunctionComponents,
        }));
        """
    )
    try:
        result = subprocess.run(
            ["node", "-e", script],
            cwd=ROOT,
            check=True,
            text=True,
            capture_output=True,
        )
    except FileNotFoundError:
        fail("node is not available to execute dist/app.js")
    except subprocess.CalledProcessError as exc:
        detail = (exc.stderr or exc.stdout or "").strip()
        fail(f"dist/app.js did not execute cleanly under the public bundle contract: {detail}")

    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError as exc:
        fail(f"dist/app.js contract output was invalid JSON: {exc}")


def validate_featured_project_contract(claims: dict) -> None:
    state = run_bundle_contract()
    projects = state.get("projects")
    if not isinstance(projects, list):
        fail("dist/app.js did not expose window.PROJECTS as a list")

    rendered_components = state.get("renderedFunctionComponents")
    if not isinstance(rendered_components, list):
        fail("dist/app.js render smoke did not report invoked function components")
    if "App" not in rendered_components:
        fail("dist/app.js render smoke did not invoke App")
    if not any(component.startswith("EditorialDir") for component in rendered_components):
        fail("dist/app.js render smoke did not invoke EditorialDir")

    required_slugs = claims.get("required_project_slugs", [])
    rendered_slugs = [project.get("slug") for project in projects if isinstance(project, dict)]
    missing = [slug for slug in required_slugs if slug not in rendered_slugs]
    if missing:
        fail(f"dist/app.js is missing required project data: {', '.join(missing)}")

    featured = projects[:4]
    if len(featured) < 4:
        fail("dist/app.js must expose at least four featured projects")
    for project in featured:
        slug = project.get("slug", "<missing slug>")
        repo = project.get("repo", "")
        if repo.count("/") != 1 or any(not part for part in repo.split("/")):
            fail(f"featured project {slug} has an invalid GitHub repo value: {repo}")
        for field in ["title", "kicker", "blurb", "longBlurb"]:
            if not project.get(field):
                fail(f"featured project {slug} is missing modal field: {field}")
        for field in ["metrics", "findings", "stack"]:
            if not project.get(field):
                fail(f"featured project {slug} is missing modal list: {field}")


def main() -> None:
    index = (ROOT / "index.html").read_text()
    bundle = ROOT / "dist/app.js"
    if not bundle.exists():
        fail("dist/app.js does not exist; run npm run build")
    compiled = bundle.read_text()

    if "dist/app.js" not in index:
        fail("index.html does not load dist/app.js")
    if "@babel/standalone" in index or 'type="text/babel"' in index:
        fail("index.html still depends on browser Babel")
    if "<EditorialDir" in compiled or "type=\"text/babel\"" in compiled:
        fail("dist/app.js appears to contain uncompiled JSX/Babel markers")
    for marker in ["window.PROFILE", "window.PROJECTS", "window.STATS", "React.createElement", "ReactDOM.createRoot"]:
        if marker not in compiled:
            fail(f"dist/app.js is missing expected marker: {marker}")
    claims = json.loads((ROOT / "public_claims.json").read_text())
    for marker in [
        claims["update_marker"],
        claims["profile"]["email"],
        f"https://github.com/{claims['profile']['handle']}",
        f"https://linkedin.com/in/{claims['profile']['handle']}",
    ]:
        if marker not in compiled:
            fail(f"dist/app.js is missing public claim marker: {marker}")
    validate_featured_project_contract(claims)

    print("static build smoke passed")


if __name__ == "__main__":
    main()
