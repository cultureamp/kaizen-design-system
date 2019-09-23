#!/bin/sh

yarn setup \
  && yarn gatsby build --prefix-paths \
  && tar -czf ./site.tar.gz ./site/public
