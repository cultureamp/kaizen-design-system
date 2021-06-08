#!/usr/bin/env sh
set -u

registry_user=$(npm whoami --registry "https://npm.pkg.github.com/")

if [ $? -eq 0 ] || [ ! -z "$registry_user" ]; then
  echo "Logged in to GitHub package registry as: ${registry_user}"
else
  echo
  echo "You need to log into the GitHub package registry to install private @cultureamp packages."
  echo
  echo "Read this to find out how:"
  echo "  https://github.com/cultureamp/node-packages/blob/master/how-to-use-private-cultureamp-packages-on-your-laptop.md"
  echo
  exit 1
fi
