#!/bin/bash




npx npm explore @kaizen/components -- tsx ./codemods/codemod-migrate-v1-to-v2.ts --directory="$PWD/src/**/*.ts(x)"
