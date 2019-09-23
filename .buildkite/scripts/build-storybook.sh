#!/bin/sh

yarn setup \
  && yarn storybook:build \
  && tar -czf ./storybook.tar.gz ./storybook/public
