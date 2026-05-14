from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
CLAIMS_PATH = ROOT / "public_claims.json"
PUBLIC_SOURCE_PATHS = ("index.html", "data.jsx", "dir-editorial.jsx")


class PublicationContractError(ValueError):
    pass


def read_repo_text(path: str) -> str:
    return (ROOT / path).read_text()


def _require_nonempty_sequence(claims: dict[str, Any], key: str) -> list[str]:
    values = claims.get(key, [])
    if not isinstance(values, list) or not values:
        raise PublicationContractError(f"public_claims.json must list {key}")
    if not all(isinstance(value, str) and value for value in values):
        raise PublicationContractError(f"public_claims.json {key} values must be non-empty strings")
    return values


def _require_nonempty_string(claims: dict[str, Any], key: str) -> str:
    value = claims.get(key, "")
    if not isinstance(value, str) or not value:
        raise PublicationContractError(f"public_claims.json must set {key}")
    return value


@dataclass(frozen=True)
class PublicationContract:
    claims: dict[str, Any]

    @classmethod
    def load(cls) -> "PublicationContract":
        try:
            return cls(json.loads(CLAIMS_PATH.read_text()))
        except FileNotFoundError as exc:
            raise PublicationContractError("missing public_claims.json") from exc
        except json.JSONDecodeError as exc:
            raise PublicationContractError(f"public_claims.json is invalid JSON: {exc}") from exc

    @property
    def required_links(self) -> list[str]:
        return _require_nonempty_sequence(self.claims, "required_links")

    @property
    def required_project_slugs(self) -> list[str]:
        return _require_nonempty_sequence(self.claims, "required_project_slugs")

    @property
    def update_marker(self) -> str:
        return _require_nonempty_string(self.claims, "update_marker")

    @property
    def profile(self) -> dict[str, str]:
        value = self.claims.get("profile", {})
        if not isinstance(value, dict):
            raise PublicationContractError("public_claims.json profile must be an object")
        missing = [key for key in ("email", "handle") if not isinstance(value.get(key), str) or not value[key]]
        if missing:
            raise PublicationContractError(f"public_claims.json profile is missing: {', '.join(missing)}")
        return value

    @property
    def public_source_text(self) -> str:
        return "\n".join(read_repo_text(path) for path in PUBLIC_SOURCE_PATHS)

    @property
    def compiled_public_markers(self) -> list[str]:
        profile = self.profile
        handle = profile["handle"]
        return [
            self.update_marker,
            profile["email"],
            f"https://github.com/{handle}",
            f"https://linkedin.com/in/{handle}",
        ]
