#!/bin/sh
set -e

yarn install --frozen-lockfile
yarn add react@17.0.2 react-dom@17.0.2 -W
yarn test --ci
