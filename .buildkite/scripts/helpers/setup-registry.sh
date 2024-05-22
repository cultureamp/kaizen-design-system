#!/bin/sh
set -e

echo "Authenticating against the GitHub package registry"
# NOTE: we are adding a literal ${GITHUB_REGISTRY_TOKEN} to the npm config here;
#       npm/pnpm will interpret it and sub in the environment variable for us,
#       meaning we don't have to store the secret on disk.
npm config set "//npm.pkg.github.com/:_authToken" '${GITHUB_REGISTRY_TOKEN}'

printf "Logged in as: "
npm whoami --registry=https://npm.pkg.github.com
