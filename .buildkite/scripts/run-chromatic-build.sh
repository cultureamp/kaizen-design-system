#!/bin/sh

CHROMATIC_APP_CODE="q2uguq8te"

yarn setup

yarn run chromatic --build-script-name=storybook:build --app-code=$CHROMATIC_APP_CODE
