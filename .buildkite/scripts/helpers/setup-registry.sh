#!/bin/sh
set -e

echo "Authenticating against the GitHub package registry"
npm config set "//npm.pkg.github.com/:_authToken" "${GITHUB_REGISTRY_TOKEN}"

printf "Logged in as: "
npm whoami --registry=https://npm.pkg.github.com
