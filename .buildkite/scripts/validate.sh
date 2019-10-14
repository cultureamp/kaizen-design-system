#!/bin/sh
set -e

echo
echo "Validating release..."
# Check that lerna isn't reporting errors
lerna list
# Count the number of modified non-private packages
changed=$(lerna --loglevel=error changed || echo "") 
changed_count=$(echo "$changed" | wc -l)

echo
echo "Modified packages:"
echo "${changed:-"(none)"}"

if [ "$changed_count" -gt 1 ]; then
  echo
  echo "Branches may not release (modify) more than one non-private package."
  exit 1
fi

echo
echo "All checks passed."
