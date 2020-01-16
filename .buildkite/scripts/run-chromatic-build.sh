#!/bin/sh

# shellcheck source=helpers/get-secret.sh
. ".buildkite/scripts/helpers/get-secret.sh"

CHROMATIC_APP_CODE=$(get_secret "chromatic-app-code") || exit $?

yarn setup

yarn -s chromatic --build-script-name=storybook:build --app-code="$CHROMATIC_APP_CODE"
