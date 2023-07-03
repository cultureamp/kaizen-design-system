#!/bin/sh
set -e

# shellcheck source=helpers/get-secret.sh
. ".buildkite/scripts/helpers/get-secret.sh"

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

GITHUB_SSH_HOST_KEY="github.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCj7ndNxQowgcQnjshcLrqPEiiphnt+VTTvDP6mHBL9j1aNUkY4Ue1gvwnGLVlOhGeYrnZaMgRK6+PKCUXaDbC7qtbW8gIkhL7aGCsOr/C56SJMy/BCZfxd1nWzAOxSDPgVsmerOBYfNqltV9/hWCqBywINIR+5dIg6JTJ72pcEpEjcYgXkE2YEFXV1JHnsKgbLWNlhScqb2UmyRkQyytRLtL+38TGxkxCflmO+5Z8CSSNY7GidjMIZ7Q4zMjA2n1nGrlTDkzwDCsw+wqFPGQA179cnfGWOWRVruj16z6XyvxvjJwbz0wQZ75XK5tKSb7FNyeIEs4TT4jk+S4dhPeAUC5y+bDYirYgM4GC7uEnztnZyaVWQ7B381AK4Qdrwt51ZqExKbQpTUNn+EjqoTwvqNj4kqx5QUCI0ThS/YkOxJCXmPUWZbhjpCg56i+2aB6CmK2JGhn57K5mj0MNdBXA4/WnwH6XoPWJzK5Nyu2zB3nAZp+S5hpQs+p1vN1/wsjk="

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

setup_npm() {
  npm config set update-notifier false
  npm config set email service-npm@cultureamp.com
  npm config set _auth cultureamp-user
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
  export GH_SSH_KEY GH_TOKEN NPM_TOKEN

  printf "Fetching secrets... "
  GH_SSH_KEY=$(get_secret "github-ssh-key") || exit $?
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

  unset GH_SSH_KEY GH_TOKEN NPM_TOKEN
}

main

unset -f main setup_github setup_npm
