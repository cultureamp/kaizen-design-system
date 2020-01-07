#!/bin/sh

# AWS_SECRETS=$(aws secretsmanager get-secret-value --secret-id /kaizen-design-system/chromatic-app-code | jq -r  '.SecretString')

AWS_SECRETS='{ "CHROMATIC_APP_CODE": "q2uguq8te" }'
CHROMATIC_APP_CODE=$(echo "$AWS_SECRETS" | jq -r '.CHROMATIC_APP_CODE')
# echo $CHROMATIC_APP_CODE

cd ../..
# pwd
./node_modules/.bin/chromatic --build-script-name=storybook:build --app-code=$CHROMATIC_APP_CODE
