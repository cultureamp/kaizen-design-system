#!/bin/sh
set -e

# Update to real one once this has been sorted
valid_label="pipeline test label"

echo "📦  Querying Github and retrieving labels for: ${BUILDKITE_COMMIT}"

# Retrieves ascociated PR from Github and filters out all labels
labels=$(curl --request GET \
  --url "https://api.github.com/repos/cultureamp/kaizen-design-system/commits/${BUILDKITE_COMMIT}/pulls?=" \
  --header "Authorization: Bearer ${GITHUB_REGISTRY_TOKEN}" \
  --header "Content-Type: multipart/form-data" \
  | jq "try .[] .labels [] .name catch .")

if [ -n "${labels}" ]; then
    echo "🗂️  Labels found in commit:"
    echo "${labels}"
    echo "🔍 Checking for match with: \"${valid_label}\""
    if expr "$labels" : ".*$valid_label" > /dev/null; then
        echo "✅ \"${valid_label}\" label was found."
        echo "🔨 Commencing build!"

        export SHOULD_PUBLISH="true"
      exit 0
    else
      echo "🤷‍♀️ \"${valid_label}\" label was not found. Exiting build"
    fi
else
    echo "⛔️ No labels were found in this commit. Exiting build"
fi

exit 1  
