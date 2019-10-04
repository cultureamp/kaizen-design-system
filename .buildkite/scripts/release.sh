#!/bin/sh
set -e

ssm_get() {
  aws ssm get-parameter \
    --name "/${KAIZEN_SSM_PARAMETER_PATH}/$1" \
    --with-decryption \
    --query Parameter.Value \
    --output text
}

main() {
  printf "Installing apk packages... "
  apk add --no-cache --quiet --no-progress \
    git \
    openssh \
    python \
    py-pip
  echo "(done)"

  printf "Installing aws cli... "
  pip install --quiet --progress-bar=off \
    awscli
  echo "(done)"

  printf "Fetching ssm parameters... "
  github_deploy_key=$(ssm_get "github-deploy-key") || exit $?
  npm_token=$(ssm_get "npm-token") || exit $?
  echo "(done)"

  unset github_deploy_key
  unset npm_token
}

main

unset -f main ssm_get
