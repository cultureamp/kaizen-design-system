#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

yarn install --frozen-lockfile

USE_REACT_17=true yarn test --ci
