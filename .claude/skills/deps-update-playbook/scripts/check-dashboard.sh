#!/bin/bash
# check-dashboard.sh
# Fetches the Renovate Dependency Dashboard issue and summarises open dependency updates.
# Usage: .claude/skills/deps-update-playbook/scripts/check-dashboard.sh
#
# Requires: gh (GitHub CLI), authenticated

set -euo pipefail

REPO="cultureamp/kaizen-design-system"
ISSUE_NUMBER="2039"

if ! command -v gh &> /dev/null; then
  echo "Error: GitHub CLI (gh) is not installed. Install it from https://cli.github.com/" >&2
  exit 1
fi

if ! gh auth status &> /dev/null 2>&1; then
  echo "Error: Not authenticated with GitHub CLI. Run 'gh auth login' first." >&2
  exit 1
fi

echo "==> Fetching Dependency Dashboard (issue #${ISSUE_NUMBER}) from ${REPO}..."
echo ""

# Fetch the issue body
BODY=$(gh issue view "$ISSUE_NUMBER" --repo "$REPO" --json body --jq '.body')

if [[ -z "$BODY" ]]; then
  echo "Error: Could not fetch issue body. Check the issue number and repo." >&2
  exit 1
fi

# --- Open Renovate PRs ---
echo "=== Open Renovate PRs ==="
echo ""
OPEN_PRS=$(gh pr list --repo "$REPO" --author "app/renovate" --state open --json number,title,labels,updatedAt --template \
  '{{range .}}#{{.number}} | {{.title}} | {{range .labels}}{{.name}} {{end}}| updated: {{.updatedAt}}
{{end}}')

if [[ -z "$OPEN_PRS" ]]; then
  echo "  No open Renovate PRs found."
else
  echo "$OPEN_PRS"
fi

echo ""

# --- Dashboard sections ---
echo "=== Dependency Dashboard Summary ==="
echo ""

# Extract checked (pending/approved) items
CHECKED=$(echo "$BODY" | grep -c '^\s*- \[x\]' || true)
# Extract unchecked (awaiting) items
UNCHECKED=$(echo "$BODY" | grep -c '^\s*- \[ \]' || true)

echo "  Approved / in-progress items:  $CHECKED"
echo "  Awaiting approval items:       $UNCHECKED"
echo ""

# Show section headers and their item counts
echo "=== Dashboard Sections ==="
echo ""
CURRENT_SECTION=""
while IFS= read -r line; do
  # Detect markdown headers (## or ###)
  if [[ "$line" =~ ^##[[:space:]]+(.*) ]]; then
    if [[ -n "$CURRENT_SECTION" ]]; then
      echo ""
    fi
    CURRENT_SECTION="${BASH_REMATCH[1]}"
    echo "--- $CURRENT_SECTION ---"
  fi
  # Print checked items
  if [[ "$line" =~ ^\s*-\ \[x\] ]]; then
    echo "  [x] ${line#*] }"
  fi
  # Print unchecked items
  if [[ "$line" =~ ^\s*-\ \[\ \] ]]; then
    echo "  [ ] ${line#*] }"
  fi
done <<< "$BODY"

echo ""
echo "==> Dashboard check complete."
echo "    Full dashboard: https://github.com/${REPO}/issues/${ISSUE_NUMBER}"
