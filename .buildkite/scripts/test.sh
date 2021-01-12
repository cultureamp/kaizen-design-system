#!/bin/sh
set -e

yarn install --frozen-lockfile
yarn build
yarn test --ci
