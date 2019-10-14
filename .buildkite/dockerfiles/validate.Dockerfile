FROM node:10.16.3-alpine

RUN apk add --no-cache \
  git

RUN npm config set unsafe-perm true \
  && npm install --global --no-audit lerna
