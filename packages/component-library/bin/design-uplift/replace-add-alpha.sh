#!/usr/bin/env bash
set -eux

fastmod -m -d draft-packages/ -d legacy-packages/ -d packages/ --extensions scss,css \
  'add-alpha\((.*)?\)' \
  'rgba($1)'
