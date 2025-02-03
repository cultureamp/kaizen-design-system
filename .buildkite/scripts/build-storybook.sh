#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"
pnpm add -g corepack@v0.31.0
corepack enable
pnpm install --frozen-lockfile
pnpm turbo build:docs --filter=@docs/storybook
tar -czf ./storybook.tar.gz ./docs/storybook-static
