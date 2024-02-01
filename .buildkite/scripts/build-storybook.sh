#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

pnpm install --frozen-lockfile
pnpm -F @kaizen/design-tokens prepublishOnly
pnpm -F @kaizen/tailwind prepublishOnly
pnpm storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
