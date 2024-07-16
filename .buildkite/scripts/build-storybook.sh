#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

corepack enable
pnpm install --frozen-lockfile
pnpm storybook:build:prod
tar -czf ./storybook.tar.gz ./storybook/public
