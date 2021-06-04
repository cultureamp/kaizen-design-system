#!/bin/sh
set -e

yarn install --frozen-lockfile
yarn tsc
