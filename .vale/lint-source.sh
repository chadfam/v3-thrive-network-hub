#!/usr/bin/env bash
# Lint JSX/TSX/JS/TS files with the UTT Vale rules.
#
# Vale 3 doesn't natively parse JSX. As a workaround, this script pipes each
# source file through Vale with --ext=.html so JSX text content gets parsed as
# HTML. False positives possible on JS string-only content, but acceptable for
# catching banned phrases and em-dashes in prose-heavy components.
#
# Used by: npm run lint:copy

set -uo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)"
if [ -z "$REPO_ROOT" ]; then
  echo "Not in a git repo. Bailing." >&2
  exit 1
fi
cd "$REPO_ROOT"

if ! command -v vale >/dev/null 2>&1; then
  echo "Vale CLI not found on PATH. Install it (https://vale.sh/docs/install) and retry." >&2
  exit 1
fi

FILES=$(find src -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" \) 2>/dev/null)

if [ -z "$FILES" ]; then
  echo "No JSX/TSX/JS/TS files under src/. Nothing to lint."
  exit 0
fi

ANY_ERRORS=0
ANY_WARNINGS=0

while IFS= read -r f; do
  # Vale exits non-zero only when errors are present (not warnings).
  if ! output=$(vale --ext=.html < "$f" 2>&1); then
    echo "=== $f ==="
    echo "$output"
    echo ""
    ANY_ERRORS=1
  elif echo "$output" | grep -qE "[1-9][0-9]* warnings?"; then
    echo "=== $f ==="
    echo "$output"
    echo ""
    ANY_WARNINGS=1
  fi
done <<< "$FILES"

if [ "$ANY_ERRORS" -eq 1 ]; then
  echo "✖ One or more files have errors. Fix and re-run."
  exit 1
fi

if [ "$ANY_WARNINGS" -eq 1 ]; then
  echo "✔ No errors. Warnings present (see above)."
  exit 0
fi

echo "✔ All JSX/TSX/JS/TS source files clean."
exit 0
