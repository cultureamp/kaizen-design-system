#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

yarn install --frozen-lockfile
yarn storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
