#!/bin/sh

export GATSBY_TELEMETRY_DISABLED=true

yarn setup \
  && yarn gatsby build --prefix-paths \
  && tar -czf ./site.tar.gz ./site/public
