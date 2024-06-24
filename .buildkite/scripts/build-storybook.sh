#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

corepack enable
pnpm install --frozen-lockfile
pnpm turbo storybook:build:prod:root
tar -czf ./storybook.tar.gz ./storybook/public
