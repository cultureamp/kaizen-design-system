#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

yarn install --frozen-lockfile

# Running an explicit command for design-tokens here, because running `yarn lerna run prepublish` takes a long time and isn't worth doing for dev builds.
# At the time of writing this, no other package apart from design-tokens has a build step other than `tsc`.
yarn lerna run prepublish --scope @kaizen/design-tokens

# TypeScript build for the whole repo 
yarn tsc