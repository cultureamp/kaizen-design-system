#!/bin/sh
set -e

main() {
  git checkout KZN-1056-changesets && git pull

  yarn install --frozen-lockfile
  yarn changeset ci:version
  yarn changeset ci:publish

  echo "All done!"
}

main

unset -f main
