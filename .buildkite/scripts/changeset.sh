#!/bin/sh
set -e

# shellcheck source=helpers/get-secret.sh
. ".buildkite/scripts/helpers/get-secret.sh"

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

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
  git config --global --add safe.directory /workspace

  eval "$(ssh-agent -s)"
  echo "$GH_SSH_KEY" | ssh-add -

  echo "Adding GitHub host key to known hosts..."
  echo "$GITHUB_SSH_HOST_KEY" | tr -d "\\n" >>/etc/ssh/ssh_known_hosts

  echo "Checking GitHub authentication..."
  ssh -T git@github.com || true # exits non-zero
}

main() {
  export GH_SSH_KEY GH_TOKEN

  printf "Fetching secrets... "
  GH_SSH_KEY=$(get_secret "github-ssh-key") || exit $?
  GH_TOKEN=$(get_secret "github-api-token") || exit $?
  echo "(done)"

  echo "Setting up git and npm credentials..."
  setup_github

  git checkout KZN-1056-changesets && git pull

  yarn install --frozen-lockfile
  yarn changeset ci:version
  yarn changeset ci:publish

  echo "All done!"

  unset GH_SSH_KEY GH_TOKEN
}

main

unset -f main setup_github
