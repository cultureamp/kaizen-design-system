#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

# if [ "$FORCE_STORYBOOK_DEPLOY" = "true" ]; then
#   echo "Force is with you"
# elif [ "$FORCE_STORYBOOK_DEPLOY" = "false" ]; then
#   echo "No force for you"
# else
#   echo "not found"
# fi

yarn install --frozen-lockfile
yarn workspace @kaizen/design-tokens prepublish
yarn workspace @kaizen/tailwind prepublish
yarn storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
