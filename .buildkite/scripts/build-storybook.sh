#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

setup_npm() {
  npm config set update-notifier false
  npm config set email service-npm@cultureamp.com
  npm config set //registry.npmjs.org/:_authToken "$NPM_TOKEN"
  npm config set access public

  echo "Checking npm authentication..."
  echo "Logged in as: $(npm whoami)"
}

setup_npm

yarn install --frozen-lockfile
yarn workspace @kaizen/design-tokens prepublish
yarn workspace @kaizen/tailwind prepublish
yarn storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
