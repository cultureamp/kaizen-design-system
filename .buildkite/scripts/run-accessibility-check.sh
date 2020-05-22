#!/bin/sh
set -e

yarn install --frozen-lockfile

ts-node ./check-storybook-accessibility.ts