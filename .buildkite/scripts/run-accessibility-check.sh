#!/bin/sh
set -e

yarn install --frozen-lockfile

yarn ts-node ./check-storybook-accessibility.ts
