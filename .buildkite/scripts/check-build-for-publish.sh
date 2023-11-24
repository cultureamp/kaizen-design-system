#!/bin/sh
set -e

VALID_LABEL="pipeline test label"

echo "⏩ Querying Github for current commit: ${CURRENT_COMMIT} and retriving labels"

# Stores the labels object in a variable
LABELS=$(curl --request GET \
  --url "https://api.github.com/repos/cultureamp/kaizen-design-system/commits/${CURRENT_COMMIT}/pulls?=" \
  --header "Authorization: Bearer ${GITHUB_REGISTRY_TOKEN}" | jq 'try .[0] .labels [] .name catch .')


if [ -n "${LABELS}" ]; then
    echo "🔍 Labels were found! Checking for \"${VALID_LABEL}\" label"
    if [[ $LABELS =~ "${VALID_LABEL}" ]]; then
        echo "🔮 \"${VALID_LABEL}\" was found! Commencing build..."
      exit 0  
    else
      echo "🤷‍♀️ \"${VALID_LABEL}\" label was not found. Exiting build"
      exit 1  
    fi
else
    echo "⛔️ No labels were found in this commit. Exiting build"
    exit 1  
fi