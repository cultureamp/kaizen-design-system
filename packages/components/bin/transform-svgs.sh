#!/bin/bash

yarn svgo -f ./icons -o ./built-icons/

ts-node ./bin/wrapSVGs.ts --source-dir ./built-icons --output-dir ./IconComponents

