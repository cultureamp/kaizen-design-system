#!/bin/bash

pnpm svgo -f ./assets/svgs/icons -o ./src/Icon/bin/built-svgs/

ts-node ./src/Icon/bin/wrapSVGs.ts --source-dir ./src/Icon/bin/built-svgs --output-dir ./src/Icon --delete-source-dir

pnpm prettier -w ./src/Icon
