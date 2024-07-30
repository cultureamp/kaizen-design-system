#!/bin/sh

set -e

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 rootDir codeModname"
  exit 1
fi

# Assign parameters to variables
rootDir=$1
codeModname=$2

# Print the parameters (for debugging purposes)
echo "Running codemod '$codeModname' in directory '$rootDir'"

# Construct the path to the codemod file
codemodFilePath="packages/components/codemods/$codeModname.ts"

# Run the codemod using ts-node
npx tsx "$codemodFilePath" "$rootDir"

echo "Codemod '$codeModname' completed successfully in directory '$rootDir'"