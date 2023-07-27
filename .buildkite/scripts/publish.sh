#!/bin/sh
set -e

echo "Publishing to ${KAIZEN_DOMAIN_NAME}"

# Publish to production bucket
aws s3 sync --delete \
    "storybook/public" \
    "s3://${KAIZEN_DOMAIN_NAME}/storybook"

aws cloudfront create-invalidation \
    --distribution-id "${KAIZEN_DISTRIBUTION_ID}" \
    --paths "/*" \
    --output text

echo "Reporting the deployed URL via the GitHub status API"

destination=${KAIZEN_DOMAIN_NAME}
commit_hash=$(git rev-parse --verify HEAD)
curl --fail -s "https://api.github.com/repos/cultureamp/kaizen-design-system/statuses/$commit_hash" \
  --header "authorization: Bearer $GITHUB_STATUS_TOKEN" \
  --data '{"state": "success", "target_url": "https://'"$destination"'", "description": "'"$destination"'", "context": "Branch preview"}'
