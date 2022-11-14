#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. .buildkite/scripts/helpers/setup-registry.sh

echo "--- :nodesecurity: Audit JS dependencies"
npm_config_yes=true npm_config_registry=https://npm.pkg.github.com/ npx -p @cultureamp/frontend-ci-scripts@latest --call frontend-audit-js-dependencies
