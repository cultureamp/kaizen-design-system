#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

echo "--- :yarnpkg: Install dependencies"
yarn install --frozen-lockfile

KAIZEN_DEV_BRANCH=""


if [ "$KAIZEN_DOMAIN_NAME" = "dev.cultureamp.design" ]; then
    echo "On dev branch for ${BUILDKITE_BRANCH}"
    KAIZEN_DEV_BRANCH="${KAIZEN_DOMAIN_NAME}/${BUILDKITE_BRANCH}/"
    echo "Running playwright tests on ${KAIZEN_DEV_BRANCH}"

    yarn playwright
else
    echo "Playwright tests not run on prod env. Move along, move along"
fi
