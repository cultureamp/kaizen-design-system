#!/usr/bin/env bash

set -e

elapsed_time() {
  echo -e "${GREEN}Built in: ${BOLD}${GREEN}$SECONDS${NC} ${GREEN}seconds${NC}"
}

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 transformDir codemodFileName"
  exit 1
fi

# Assign parameters to variables
transformDir=$1
codemodFileName=$2

# Calculated variables
BASEPATH=$(pwd "$0")
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
CODEMOD_PATH="$SCRIPTPATH/../codemods/$codemodFileName/index.ts"
TARGET_DIR="$BASEPATH/$transformDir"

# Print the parameters (for debugging purposes)
echo ""
echo "Attempting to run codemod '$codemodFileName' on the dir:"
echo "$TARGET_DIR"
echo ""

if npx tsx@latest $CODEMOD_PATH $TARGET_DIR; then
  echo "Codemod '$codemodFileName' completed successfully in directory '$transformDir'"
  echo "---"
  echo "Run linting and prettier to correct issues with re-writes"
else
  echo "Codemod '$codemodFileName' could not be run in '$TARGET_DIR'"
  exit 1
fi

elapsed_time
