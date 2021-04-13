#!/bin/sh
set -e

yarn install --frozen-lockfile

USE_REACT_17=true yarn test --ci
