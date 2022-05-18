#!/bin/sh
set -e

KAIZEN_BASE_PATH=""

echo "Publishing to ${KAIZEN_DOMAIN_NAME}"

# if we're publishing to the production bucket...
if [ "$KAIZEN_DOMAIN_NAME" = "cultureamp.design" ]; then
    # publish the site to the bucket root
    # note: doesn't delete the bucket contents
    aws s3 sync \
        "site/public" \
        "s3://${KAIZEN_DOMAIN_NAME}"
    aws s3 sync --delete \
        "storybook/public" \
        "s3://${KAIZEN_DOMAIN_NAME}/storybook"
else
    KAIZEN_BASE_PATH="/${BUILDKITE_BRANCH}"
    # publish storybook to the root of the path corresponding to the branch
    # note: no site deploy when targeting the dev bucket
    aws s3 sync --delete \
        "storybook/public" \
        "s3://${KAIZEN_DOMAIN_NAME}${KAIZEN_BASE_PATH}"
fi

aws cloudfront create-invalidation \
    --distribution-id "${KAIZEN_DISTRIBUTION_ID}" \
    --paths "${KAIZEN_BASE_PATH:-/}*" \
    --output text

echo "Reporting the deployed URL via the GitHub status API"

destination=${KAIZEN_DOMAIN_NAME}${KAIZEN_BASE_PATH}
commit_hash=$(git rev-parse --verify HEAD)
curl --fail -s "https://api.github.com/repos/cultureamp/kaizen-design-system/statuses/$commit_hash" \
  --header "authorization: Bearer $GITHUB_STATUS_TOKEN" \
  --data '{"state": "success", "target_url": "https://'"$destination"'", "description": "'"$destination"'", "context": "Branch preview"}'
