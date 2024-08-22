#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

corepack enable
pnpm install --frozen-lockfile
pnpm turbo @docs/storybook#build -- --docs
tar -czf ./storybook.tar.gz ./docs/storybook-static
