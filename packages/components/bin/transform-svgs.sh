#!/bin/bash

yarn svgo -f ./icons -o ./built-icons/

ts-node ./bin/wrapSVGs.ts



