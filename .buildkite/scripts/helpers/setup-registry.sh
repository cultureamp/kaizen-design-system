#!/bin/sh
set -e

echo "--- :github: Authenticate with Github Registry"
npm config set "//npm.pkg.github.com/:_authToken" "${GITHUB_REGISTRY_TOKEN}"
printf "Logged in as: "
npm whoami --registry=https://npm.pkg.github.com

npm install -g pnpm@8.6.0

echo "--- :pnpm: Install dependencies :nut_and_bolt: Build all packages"
pnpm install --frozen-lockfile