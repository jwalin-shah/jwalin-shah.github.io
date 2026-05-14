#!/usr/bin/env python3
from __future__ import annotations

import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ENTRYPOINT = ROOT / "scripts" / "validate_publication.py"


def fail(message: str) -> None:
    print(f"CLI smoke contract failed: {message}", file=sys.stderr)
    raise SystemExit(1)


def run_validate(*args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, str(ENTRYPOINT), *args],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=False,
    )


def main() -> None:
    smoke = run_validate("--smoke")
    if smoke.returncode != 0:
        fail(f"--smoke exited {smoke.returncode}: {smoke.stderr.strip()}")
    if "publication CLI smoke passed" not in smoke.stdout:
        fail("--smoke did not report success")

    bad_input = run_validate("--definitely-not-a-real-option")
    if bad_input.returncode == 0:
        fail("bad input unexpectedly exited 0")
    if "unrecognized arguments: --definitely-not-a-real-option" not in bad_input.stderr:
        fail("bad input did not produce a clear argparse failure")

    print("CLI smoke contract passed")


if __name__ == "__main__":
    main()
