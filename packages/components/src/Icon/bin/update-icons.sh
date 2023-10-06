#!/bin/bash

yarn svgo -f ./assets/svgs/icons -o ./src/Icon/subComponents/built-svgs/

ts-node ./wrapSVGs.ts --source-dir ./src/Icon/subComponents/built-svgs --output-dir ./src/Icon --delete-source-dir

yarn prettier -w ./src/Icon
