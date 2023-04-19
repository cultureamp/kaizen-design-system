#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

echo "FORCE_STORYBOOK_DEPLOY: ${FORCE_STORYBOOK_DEPLOY}"
echo "FORCE_STORYBOOK_DEPLOY True: ${FORCE_STORYBOOK_DEPLOY == "true"}"
echo "FORCE_STORYBOOK_DEPLOY False: ${FORCE_STORYBOOK_DEPLOY == "false"}"

yarn install --frozen-lockfile
yarn workspace @kaizen/design-tokens prepublish
yarn workspace @kaizen/tailwind prepublish
yarn storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
