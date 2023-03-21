#!/bin/sh
set -e

main() {
  git checkout main && git pull

  yarn install --frozen-lockfile
  yarn changeset version

  echo "All done!"
}

main

unset -f main