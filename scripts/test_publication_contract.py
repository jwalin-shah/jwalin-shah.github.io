#!/usr/bin/env python3
from __future__ import annotations

from publication_contract import PublicationContract


def fail(message: str) -> None:
    raise SystemExit(f"publication contract test failed: {message}")


def main() -> None:
    contract = PublicationContract.load()

    for value in contract.required_links:
        if value not in contract.public_source_text:
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

    print("publication contract test passed")


if __name__ == "__main__":
    main()
