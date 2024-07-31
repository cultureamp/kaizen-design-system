#!/usr/bin/env bash

set -e

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 transformDir codemodFileName"
  exit 1
fi

# Assign parameters to variables
transformDir=$1
codemodFileName=$2


BASEPATH=$(pwd "$0")
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
CODEMOD_PATH="$SCRIPTPATH/../codemods/$codemodFileName"
TARGET_DIR="$BASEPATH/$transformDir"

# Print the parameters (for debugging purposes)
echo ""
echo "RUNNING - codemod '$codemodFileName' on the dir:"
echo "$TARGET_DIR"
echo ""

if npx tsx $CODEMOD_PATH $TARGET_DIR; then
  echo "Codemod '$codemodFileName' completed successfully in directory '$transformDir'"
else
  echo "Codemod '$codemodFileName' could not be run in '$TARGET_DIR'"
  exit 1
fi

