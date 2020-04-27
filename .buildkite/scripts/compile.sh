#!/bin/sh
set -e

yarn install --frozen-lockfile
lerna run build
