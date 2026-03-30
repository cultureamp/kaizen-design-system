#!/bin/bash
# validate-local.sh
# Runs local validation steps for dependency updates in kaizen-design-system.
# Usage: .claude/skills/deps-update-playbook/scripts/validate-local.sh [--no-frozen-lockfile]

set -euo pipefail

NO_FROZEN=""
if [[ "${1:-}" == "--no-frozen-lockfile" ]]; then
  NO_FROZEN="--no-frozen-lockfile"
fi

echo "==> Installing dependencies..."
if [[ -n "$NO_FROZEN" ]]; then
  pnpm install --no-frozen-lockfile
else
  pnpm install
fi

echo "==> Running tests..."
pnpm test

echo "==> Running build..."
pnpm build

echo "==> Local validation complete."
