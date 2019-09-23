#!/bin/sh

echo "🎋 Publishing to ${DOMAIN}${BASE_PATH}" \
  && aws s3 sync --delete site/public "s3://${DOMAIN}${BASE_PATH}" \
  && aws cloudfront create-invalidation \
      --distribution-id "${DISTRIBUTION}" \
      --paths "${BASE_PATH:-/}*" \
      --output text
