#!/bin/sh
set -e

yarn install --frozen-lockfile
yarn build
yarn storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
