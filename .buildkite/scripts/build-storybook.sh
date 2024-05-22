#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

pnpm install --frozen-lockfile
pnpm -F @kaizen/design-tokens build
pnpm -F @kaizen/tailwind build
pnpm storybook:build:prod
tar -czf ./storybook.tar.gz ./storybook/public
