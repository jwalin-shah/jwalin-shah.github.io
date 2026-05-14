#!/usr/bin/env python3
from __future__ import annotations

import sys
from pathlib import Path

from publication_contract import PublicationContract, PublicationContractError


ROOT = Path(__file__).resolve().parents[1]


def fail(message: str) -> None:
    print(f"static build smoke failed: {message}", file=sys.stderr)
    raise SystemExit(1)


def main() -> None:
    try:
        contract = PublicationContract.load()
    except PublicationContractError as exc:
        fail(str(exc))

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
    for marker in contract.missing_compiled_public_markers(compiled):
        fail(f"dist/app.js is missing public claim marker: {marker}")

    print("static build smoke passed")


if __name__ == "__main__":
    main()
