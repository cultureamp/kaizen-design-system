#!/bin/sh
set -e

if [ "$$(buildkite-agent meta-data get should_publish)" == "true" ]; then
  echo ":gandalf: You shall publish! should_publish is true"
else
  echo ":one-does-not-simply: One does not simply publish without a label! should_publish is false"
fi