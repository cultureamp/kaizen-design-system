#!/bin/sh
set -e

destination=${KAIZEN_DOMAIN_NAME}${KAIZEN_BASE_PATH}

echo "Publishing to ${destination}"

aws s3 sync --delete \
    "site/public" \
    "s3://${KAIZEN_DOMAIN_NAME}${KAIZEN_BASE_PATH}"

aws s3 sync --delete \
    "storybook/public" \
    "s3://${KAIZEN_DOMAIN_NAME}${KAIZEN_BASE_PATH}/storybook"

aws cloudfront create-invalidation \
    --distribution-id "${KAIZEN_DISTRIBUTION_ID}" \
    --paths "${KAIZEN_BASE_PATH:-/}*" \
    --output text

echo "Reporting the deployed URL via the GitHub status API"

commit_hash=$(git rev-parse --verify HEAD)
curl --fail -s "https://api.github.com/repos/cultureamp/kaizen-design-system/statuses/$commit_hash" \
  --header "authorization: Bearer $GITHUB_STATUS_TOKEN" \
  --data '{"state": "success", "target_url": "https://'"$destination"'", "description": "'"$destination"'", "context": "Branch preview"}'
