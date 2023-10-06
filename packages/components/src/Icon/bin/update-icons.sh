#!/bin/bash

yarn svgo -f ./assets/svgs/icons -o ./src/Icon/subcomponents/built-svgs/

ts-node ./wrapSVGs.ts --source-dir ./src/Icon/subcomponents/built-svgs --output-dir ./src/Icon --delete-source-dir

yarn prettier -w ./src/Icon
