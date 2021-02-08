#!/bin/sh
set -e

# shellcheck source=helpers/get-secret.sh
. ".buildkite/scripts/helpers/get-secret.sh"

export CHROMATIC_APP_CODE
CHROMATIC_APP_CODE=$(get_secret "chromatic-app-code") || exit $?

yarn install --frozen-lockfile
yarn storybook:build
yarn chromatic --exit-zero-on-changes --storybook-build-dir storybook/public
