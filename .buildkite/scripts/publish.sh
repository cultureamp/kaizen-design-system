#!/bin/bash
set -e

if [[ "$BUILDKITE_BRANCH" == "master" ]]; then
    destination=${KAIZEN_DOMAIN_NAME}
    echo "Publishing to ${destination}"

    aws s3 sync --delete \
        "site/public" \
        "s3://${destination}"

    aws s3 sync --delete \
        "storybook/public" \
        "s3://${destination}/storybook"
else
    destination=${KAIZEN_DOMAIN_NAME}/${BUILDKITE_BRANCH}
    echo "Publishing to ${destination}"

    aws s3 sync --delete \
        "storybook/public" \
        "s3://${destination}"
fi

aws cloudfront create-invalidation \
    --distribution-id "${KAIZEN_DISTRIBUTION_ID}" \
    --paths "${KAIZEN_BASE_PATH:-/}*" \
    --output text

echo "Reporting the deployed URL via the GitHub status API"

commit_hash=$(git rev-parse --verify HEAD)
curl --fail -s "https://api.github.com/repos/cultureamp/kaizen-design-system/statuses/$commit_hash" \
  --header "authorization: Bearer $GITHUB_STATUS_TOKEN" \
  --data '{"state": "success", "target_url": "https://'"$destination"'", "description": "'"$destination"'", "context": "Branch preview"}'
