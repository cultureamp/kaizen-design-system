#!/bin/bash

yarn svgo -f ./assets/svgs/icons -o ./src/Icon/bin/built-svgs/

ts-node ./src/Icon/bin/wrapSVGs.ts --source-dir ./src/Icon/bin/built-svgs --output-dir ./src/Icon --delete-source-dir

yarn prettier -w ./src/Icon
