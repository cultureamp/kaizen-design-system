#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

if [ "$KAIZEN_DOMAIN_NAME" = "dev.cultureamp.design" ]; then
    echo "On dev branch for ${BUILDKITE_BRANCH}"

    echo "--- :yarnpkg: Install Playwright dependencies"
    yarn install --frozen-lockfile
    npx playwright install

    KAIZEN_DEV_BRANCH="${KAIZEN_DOMAIN_NAME}/${BUILDKITE_BRANCH}/"

    echo "--- :playwright: Running playwright on ${KAIZEN_DEV_BRANCH}"
    URL=${KAIZEN_DEV_BRANCH} npx playwright test
else
    echo ":playwright: Playwright tests are only run on dev branches. Everything's good to go!"
fi

