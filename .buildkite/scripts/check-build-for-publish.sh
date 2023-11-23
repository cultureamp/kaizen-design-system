#!/bin/sh
set -e

echo "Query Github with the current commit ${GITHUB_CURRENT_BUILD}"

VALID_LABEL="release"

# Stores the labels object in a variable
LABELS=$(curl --request GET \
  --url "https://api.github.com/repos/cultureamp/kaizen-design-system/commits/${GITHUB_CURRENT_BUILD}/pulls?=" \
  --header "Authorization: Bearer ${GITHUB_REGISTRY_TOKEN}" | jq '[] | .labels.name')

echo "Latest commit labels: ${LABELS}"

if [ -n "${LABELS}" ]; then
    echo "I have labels, let's see it they match!!!"
    # Does something when labels exist
    exit 0  # Return true
else
    echo "I have no labels"
    exit 1  # Return false
fi