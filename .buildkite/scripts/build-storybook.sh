#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

pnpm install --frozen-lockfile
pnpm workspace @kaizen/design-tokens prepublishOnly
pnpm workspace @kaizen/tailwind prepublishOnly
pnpm storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
