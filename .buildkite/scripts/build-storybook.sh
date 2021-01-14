#!/bin/sh
set -e

yarn install --frozen-lockfile
yarn storybook:build
tar -czf ./storybook.tar.gz ./storybook/public
