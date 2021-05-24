#!/bin/sh
set -e
 
# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

export GATSBY_TELEMETRY_DISABLED=true

yarn install --frozen-lockfile
yarn gatsby build --prefix-paths
tar -czf ./site.tar.gz ./site/public
