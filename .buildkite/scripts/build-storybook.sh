#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

echo "--- Build Storybook"
corepack enable
echo "--- installing deps"
pnpm install --frozen-lockfile
echo "--- building storybook"
if pnpm turbo build:docs --filter=@docs/storybook; then
  echo "--- unpack Storybook" to ./docs/storybook-static
  if tar -czf ./storybook.tar.gz ./docs/storybook-static; then
    echo "Build and unpack of Storybook successful"
    exit 0
  fi
fi

echo "Build or unpack of Storybook failed"
exit 1
