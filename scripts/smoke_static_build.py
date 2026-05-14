#!/usr/bin/env python3
from __future__ import annotations

import argparse
import sys
from pathlib import Path

from publication_contract import (
    PUBLICATION_BUNDLE_PATH,
    ROOT,
    RUNTIME_BUNDLE_PATH,
    PublicationContract,
    PublicationContractError,
)


def fail(message: str) -> None:
    print(f"static build smoke failed: {message}", file=sys.stderr)
    raise SystemExit(1)


def parse_args(argv: list[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Validate the local static build output.")
    parser.add_argument(
        "--bundle",
        default=str(RUNTIME_BUNDLE_PATH.relative_to(ROOT)),
        help="bundle path to validate, relative to the repo root unless absolute",
    )
    return parser.parse_args(argv)


def resolve_bundle(path: str) -> Path:
    bundle = Path(path)
    if not bundle.is_absolute():
        bundle = ROOT / bundle
    return bundle


def display_path(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def validate_compiled_bundle(
    compiled: str,
    bundle: Path,
    contract: PublicationContract,
    runtime_compiled: str | None = None,
) -> None:
    if "<EditorialDir" in compiled or "type=\"text/babel\"" in compiled:
        fail(f"{display_path(bundle)} appears to contain uncompiled JSX/Babel markers")
    for marker in ["window.PROFILE", "window.PROJECTS", "window.STATS", "React.createElement", "ReactDOM.createRoot"]:
        if marker not in compiled:
            fail(f"{display_path(bundle)} is missing expected marker: {marker}")
    for marker in contract.missing_compiled_public_markers(compiled):
        fail(f"{display_path(bundle)} is missing public claim marker: {marker}")
    if runtime_compiled is not None and compiled != runtime_compiled:
        fail(f"{display_path(bundle)} does not match the current runtime build; run npm run build:publication")


def main(argv: list[str] | None = None) -> None:
    args = parse_args(sys.argv[1:] if argv is None else argv)

    try:
        contract = PublicationContract.load()
    except PublicationContractError as exc:
        fail(str(exc))

    index = (ROOT / "index.html").read_text()
    bundle = resolve_bundle(args.bundle)
    if not bundle.exists():
        fail(f"{display_path(bundle)} does not exist; run npm run build")
    compiled = bundle.read_text()

    publication_bundle = PUBLICATION_BUNDLE_PATH.relative_to(ROOT).as_posix()
    if publication_bundle not in index:
        fail(f"index.html does not load {publication_bundle}")
    if not PUBLICATION_BUNDLE_PATH.exists():
        fail(f"missing checked-in publication fixture: {publication_bundle}")
    publication_compiled = PUBLICATION_BUNDLE_PATH.read_text()
    if "@babel/standalone" in index or 'type="text/babel"' in index:
        fail("index.html still depends on browser Babel")

    validate_compiled_bundle(compiled, bundle, contract)
    validate_compiled_bundle(publication_compiled, PUBLICATION_BUNDLE_PATH, contract, compiled)

    print("static build smoke passed")


if __name__ == "__main__":
    main()
