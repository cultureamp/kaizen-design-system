#!/bin/sh
set -e

yarn install --frozen-lockfile

# Ensure that the only version of React in the repo is v17
# so that the test suite resolves to this version
USE_REACT_17=true yarn test --ci
