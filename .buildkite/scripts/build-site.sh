#!/bin/sh
set -e

export GATSBY_TELEMETRY_DISABLED=true

yarn install --frozen-lockfile
yarn gatsby build --prefix-paths
tar -czf ./site.tar.gz ./site/public
