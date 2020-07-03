#!/bin/sh
yarn check --integrity

if [[ $? -eq 1 ]]; then
  echo "\nERROR - Missing packages. Run yarn install before running storybook"
fi