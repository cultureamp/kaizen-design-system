#!/bin/sh
set -e

get_secret() {
  aws secretsmanager get-secret-value \
    --secret-id "kaizen-design-system/$1" \
    --query SecretString |
    tr -d '"' |
    sed 's/\\n/\n/g'
}
