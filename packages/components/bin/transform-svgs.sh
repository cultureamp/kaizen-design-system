#!/bin/bash

yarn svgo -f ./icons -o ./built-icons/
#yarn svgo ./icons/academy.icon.svg -o ./built-icons/academy.icon.svg

ts-node ./bin/wrapSVGs.ts



