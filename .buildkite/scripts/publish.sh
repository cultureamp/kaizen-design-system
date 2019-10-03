#!/bin/sh

echo "🎋 Publishing to ${KAIZEN_DOMAIN_NAME}${KAIZEN_BASE_PATH}" \
  && aws s3 sync --delete \
      site/public "s3://${KAIZEN_DOMAIN_NAME}${KAIZEN_BASE_PATH}" \
  && aws s3 sync --delete \
      storybook/public "s3://${KAIZEN_DOMAIN_NAME}${KAIZEN_BASE_PATH}/storybook-static" \
  && aws cloudfront create-invalidation \
      --distribution-id "${KAIZEN_DISTRIBUTION_ID}" \
      --paths "${KAIZEN_BASE_PATH:-/}*" \
      --output text
