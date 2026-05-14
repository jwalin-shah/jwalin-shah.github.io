#!/usr/bin/env python3
from __future__ import annotations

import contextlib
import io
import json

from publication_contract import PUBLICATION_BUNDLE_PATH, ROOT, RUNTIME_BUNDLE_PATH, PublicationContract
from smoke_static_build import validate_compiled_bundle


def fail(message: str) -> None:
    raise SystemExit(f"publication contract test failed: {message}")


def canonical_compiled_bundle(contract: PublicationContract) -> str:
    return "\n".join(
        [
            "window.PROFILE",
            "window.PROJECTS",
            "window.STATS",
            "React.createElement",
            "ReactDOM.createRoot",
            *contract.compiled_public_markers,
        ]
    )


def main() -> None:
    contract = PublicationContract.load()
    package = json.loads((ROOT / "package.json").read_text())
    scripts = package.get("scripts", {})

    runtime_bundle = RUNTIME_BUNDLE_PATH.relative_to(ROOT).as_posix()
    if runtime_bundle not in scripts.get("build", ""):
        fail(f"npm run build must write to ignored runtime bundle: {runtime_bundle}")
    if "dist/app.js" not in scripts.get("build:publication", ""):
        fail("npm run build:publication must preserve the tracked publication bundle path")
    if ".runtime/" not in (ROOT / ".gitignore").read_text():
        fail(".gitignore must ignore local runtime outputs")

    for value in contract.missing_required_public_links():
        fail(f"public source text is missing required link: {value}")

    compiled_markers = contract.compiled_public_markers
    expected_profile_values = [contract.update_marker, contract.profile["email"]]
    for value in expected_profile_values:
        if value not in compiled_markers:
            fail(f"compiled marker interface omitted: {value}")

    handle = contract.profile["handle"]
    expected_urls = [f"https://github.com/{handle}", f"https://linkedin.com/in/{handle}"]
    for value in expected_urls:
        if value not in compiled_markers:
            fail(f"compiled marker interface omitted: {value}")

    if contract.missing_compiled_public_markers("\n".join(compiled_markers)):
        fail("compiled marker membership check rejected the canonical markers")

    compiled = canonical_compiled_bundle(contract)
    validate_compiled_bundle(compiled, PUBLICATION_BUNDLE_PATH, contract, compiled)
    with contextlib.redirect_stderr(io.StringIO()):
        try:
            validate_compiled_bundle(compiled, PUBLICATION_BUNDLE_PATH, contract, f"{compiled}\nnew runtime output")
        except SystemExit:
            pass
        else:
            fail("publication bundle mismatch must fail static build smoke validation")

    print("publication contract test passed")


if __name__ == "__main__":
    main()
