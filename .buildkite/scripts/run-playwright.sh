#!/bin/sh
set -e

KAIZEN_DEV_BRANCH=""


if [ "$KAIZEN_DOMAIN_NAME" = "dev.cultureamp.design" ]; then
    echo "On dev branch for ${BUILDKITE_BRANCH}"
    KAIZEN_DEV_BRANCH="${KAIZEN_DOMAIN_NAME}/${BUILDKITE_BRANCH}/"
    echo "Running playwright tests on ${KAIZEN_DEV_BRANCH}"

    yarn install --frozen-lockfile
    yarn playwright

else
    echo "Playwright tests not run on prod env. Move along, move along"
fi
