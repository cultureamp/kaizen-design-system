#!/usr/bin/env bash
set -eux

fastmod -m -d $(pwd) --extensions scss,css \
  'add-alpha\((.*)?\)' \
  'rgba($1)'
