#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

pnpm install --frozen-lockfile
pnpm build
pnpm storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
