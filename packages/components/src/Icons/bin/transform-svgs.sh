#!/bin/bash

yarn svgo -f ./icons -o ./src/Icons/subComponents/built-svgs/

ts-node ./wrapSVGs.ts --source-dir ./src/Icons/subComponents/built-svgs --output-dir ./src/Icons

yarn prettier -w ./src/Icons
