#!/bin/bash

yarn svgo -f ./assets/svgs/icons -o ./src/Icons/subComponents/built-svgs/

ts-node ./wrapSVGs.ts --source-dir ./src/Icons/subComponents/built-svgs --output-dir ./src/Icons --delete-source-dir

yarn prettier -w ./src/Icons
