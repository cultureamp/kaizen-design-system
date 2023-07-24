#!/bin/sh
set -e

# shellcheck source=helpers/get-secret.sh
. ".buildkite/scripts/helpers/get-secret.sh"

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

setup_github() {
  git config --global credential.helper cache
  git config --global user.email "cultureamp-ci@cultureamp.com"
  git config --global user.name "cultureamp-ci"
  git config --global user.password "$GH_TOKEN"
  git config --global commit.gpgsign false
  git config --global --add safe.directory /workspace

  echo "Checking GitHub authentication..."
  ssh -T git@github.com || true # exits non-zero
}

setup_npm() {
  npm config set update-notifier false
  npm config set email service-npm@cultureamp.com
  npm config set //registry.npmjs.org/:_auth cultureamp-user
  npm config set //registry.npmjs.org/:_authToken "$NPM_TOKEN"
  npm config set access public

  echo "Checking npm authentication..."
  echo "Logged in as: $(npm whoami)"
}

release() {
  git checkout main && git pull

  yarn install --frozen-lockfile

  yarn ci:publish
  git push --follow-tags
}

release_canary() {
  git checkout canary && git pull

  yarn install --frozen-lockfile

  yarn ci:publish --tag "canary"
}

main() {
  export GH_TOKEN NPM_TOKEN

  printf "Fetching secrets... "
  GH_TOKEN=$(get_secret "github-api-token") || exit $?
  NPM_TOKEN=$(get_secret "npm-token") || exit $?
  echo "(done)"

  echo "Setting up git and npm credentials..."
  setup_github
  setup_npm

  if [ "$BUILDKITE_BRANCH" = main ]; then

    echo "Branch: main"

    echo "Releasing packages..."
    release

  elif [ "$BUILDKITE_BRANCH" = canary ]; then

    echo "Branch: canary"

    echo "Releasing packages..."
    release_canary

    echo "Resetting canary branch..."
    git reset --hard main
    git push --force --no-verify

  fi

  echo "All done!"

  unset GH_TOKEN NPM_TOKEN
}

main

unset -f main setup_github setup_npm
