#!/usr/bin/env bash
set -eux

find . -name "*.scss" | while IFS= read -r css_file; do

  # be sure to run this from the root of the packages/component-library directory
  cat bin/design-uplift/replace-palette-sed.txt | xargs -I{} -t sed -E -i '' -e '{}' "$css_file"

  # optional line to add commits
  # git add -p "$css_file" && git commit -m "[something]"

done
