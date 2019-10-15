#!/bin/sh
set -e

get_secret() {
  aws secretsmanager get-secret-value \
    --secret-id "kaizen-design-system/$1" \
    --query SecretString \
    | tr -d '"' \
    | sed 's/\\n/\n/g'
}

setup_github() {
  git config --global credential.helper cache
  git config --global user.email "cultureamp-ci@cultureamp.com"
  git config --global user.name "cultureamp-ci"
  git config --global user.password "$GH_TOKEN"
  git config --global commit.gpgsign false

  eval "$(ssh-agent -s)"
  echo "$GH_SSH_KEY" | ssh-add -

  echo "Checking GitHub authentication..."
  ssh -T git@github.com || true # exits non-zero
}

setup_npm() {
  npm config set update-notifier false
  npm config set email service-npm@cultureamp.com
  npm config set username cultureamp-user

  echo "Checking npm authentication..."
  echo "Logged in as: $(npm whoami)"
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

  unset GH_SSH_KEY GH_TOKEN NPM_TOKEN
}

main

unset -f main get_secret setup_github setup_npm
