FROM node:10.16.3-alpine

RUN apk add --no-cache \
  git \
  openssh \
  python \
  py-pip

RUN pip install \
  awscli

RUN npm config set unsafe-perm true \
  && npm install --global --no-audit lerna
