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

# Print the parameters (for debugging purposes)
echo "RUNNING - codemod: '$codemodFileName' in directory: '$transformDir'"
echo ""

BASEPATH=$(pwd "$0")
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
CODEMOD_PATH="$SCRIPTPATH/../codemods/$codemodFileName"

# Run the codemod using ts-node
npx tsx $CODEMOD_PATH $BASEPATH/$transformDir

echo "Codemod '$codemodFileName' completed successfully in directory '$transformDir'"