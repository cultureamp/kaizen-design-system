#!/bin/sh
set -e

# shellcheck source=helpers/get-secret.sh
. ".buildkite/scripts/helpers/get-secret.sh"

GITHUB_SSH_HOST_KEY="
github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXY
PCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mU
jvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwo
G6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq
3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ=="

setup_github() {
  git config --global credential.helper cache
  git config --global user.email "cultureamp-ci@cultureamp.com"
  git config --global user.name "cultureamp-ci"
  git config --global user.password "$GH_TOKEN"
  git config --global commit.gpgsign false

  eval "$(ssh-agent -s)"
  echo "$GH_SSH_KEY" | ssh-add -

  echo "Adding GitHub host key to known hosts..."
  echo "$GITHUB_SSH_HOST_KEY" | tr -d "\\n" >> /etc/ssh/ssh_known_hosts

  echo "Checking GitHub authentication..."
  ssh -T git@github.com || true # exits non-zero
}

setup_npm() {
  npm config set update-notifier false
  npm config set email service-npm@cultureamp.com
  npm config set username cultureamp-user
  npm config set //registry.npmjs.org/:_authToken "$NPM_TOKEN"
  npm config set access public
  npm config set unsafe-perm true

  echo "Checking npm authentication..."
  echo "Logged in as: $(npm whoami)"
}

release() {
  git checkout master && git pull

  yarn install --frozen-lockfile

  # Bump packages, push and tag a release commit, and update release notes
  yarn lerna version --conventional-commits --create-release=github --yes \
    --message "chore: release [skip ci]" 
  
  # Publish any package versions which are not already present on npm
  yarn lerna publish from-package --yes
}

main() {
  export GH_SSH_KEY GH_TOKEN NPM_TOKEN

  printf "Fetching secrets... "
  GH_SSH_KEY=$(get_secret "github-ssh-key") || exit $?
  GH_TOKEN=$(get_secret "github-api-token") || exit $?
  NPM_TOKEN=$(get_secret "npm-token") || exit $?
  echo "(done)"

  setup_github
  setup_npm
  release

  unset GH_SSH_KEY GH_TOKEN NPM_TOKEN
}

main

unset -f main setup_github setup_npm
