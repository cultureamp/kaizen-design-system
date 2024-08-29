#!/bin/bash

pnpm svgo -f ./assets/svgs/icons -o ./src/__illustrations__/Icon/v1/bin/built-svgs/

npx tsx ./src/__illustrations__/Icon/v1/bin/wrapSVGs.ts --source-dir ./src/__illustrations__/Icon/v1/bin/built-svgs --output-dir ./src/__illustrations__/Icon/v1 --delete-source-dir

pnpm prettier -w ./src/__illustrations__/Icon/v1
