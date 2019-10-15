#!/bin/sh
set -e

get_secret() {
  aws secretsmanager get-secret-value \
    --secret-id "kaizen-design-system/$1" \
    --query SecretString \
    | tr -d '"'
}

main() {
  printf "Fetching secrets... "
  GH_SSH_KEY=$(get_secret "github-ssh-key") || exit $?
  GH_TOKEN=$(get_secret "github-api-token") || exit $?
  NPM_TOKEN=$(get_secret "npm-token") || exit $?
  echo "(done)"

  unset GH_SSH_KEY
  unset GH_TOKEN
  unset NPM_TOKEN
}

main

unset -f main get_secret
