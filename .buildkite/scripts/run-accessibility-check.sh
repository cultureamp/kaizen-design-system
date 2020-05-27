#!/bin/sh
set -e

yarn install --frozen-lockfile

yarn storybook:build
yarn ts-node storybook/bin/check-storybook-accessibility.ts
