#!/bin/sh
set -e

yarn install --frozen-lockfile
yarn lerna run build
