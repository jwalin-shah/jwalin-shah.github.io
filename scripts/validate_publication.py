#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
import xml.etree.ElementTree as ET

from publication_contract import ROOT, PublicationContract, PublicationContractError, read_repo_text


def fail(message: str) -> None:
    print(f"publication validation failed: {message}", file=sys.stderr)
    raise SystemExit(1)


def read(path: str) -> str:
    return read_repo_text(path)


def validate_assets() -> None:
    index = read("index.html")
    for asset in ["styles.css", "dist/app.js", "favicon.svg", "og.svg"]:
        if asset not in index and asset not in {"favicon.svg", "og.svg"}:
            fail(f"index.html does not reference {asset}")
        path = ROOT / asset
        if not path.exists():
            fail(f"missing required asset: {asset}")
        if path.suffix == ".svg":
            try:
                ET.parse(path)
            except ET.ParseError as exc:
                fail(f"{asset} is not valid SVG XML: {exc}")
    if "@babel/standalone" in index or 'type="text/babel"' in index:
        fail("index.html must not depend on browser Babel")


def validate_public_links(contract: PublicationContract) -> None:
    for value in contract.required_links:
        if value not in contract.public_source_text:
            fail(f"missing public link or contact value: {value}")


def validate_data_contract(contract: PublicationContract) -> None:
    data = read("data.jsx")
    for global_name in ["PROFILE", "PROJECTS", "STATS"]:
        if f"window.{global_name}" not in data:
            fail(f"data.jsx is missing window.{global_name}")

    required_projects = set(contract.required_project_slugs)
    slugs = set(re.findall(r'slug:\s*"([^"]+)"', data))
    missing = sorted(required_projects - slugs)
    if missing:
        fail(f"missing required project slugs: {', '.join(missing)}")

    projects_block = data.split("// Stats", 1)[0]
    repo_values = re.findall(r'repo:\s*"([^"]+)"', projects_block)
    broken = [repo for repo in repo_values if "/" not in repo]
    if broken:
        fail(f"repo values must be owner/name pairs: {', '.join(broken)}")

    if contract.update_marker.lower() not in read("dir-editorial.jsx").lower():
        fail("dir-editorial.jsx masthead is missing the public update marker")


def main() -> None:
    try:
        contract = PublicationContract.load()
    except PublicationContractError as exc:
        fail(str(exc))

    validate_assets()
    validate_public_links(contract)
    validate_data_contract(contract)
    print("publication validation passed")


if __name__ == "__main__":
    main()
