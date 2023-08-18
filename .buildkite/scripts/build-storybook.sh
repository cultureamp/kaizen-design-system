#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

yarn install --frozen-lockfile
yarn workspace @kaizen/design-tokens prepublishOnly
yarn workspace @kaizen/tailwind prepublishOnly
yarn storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
