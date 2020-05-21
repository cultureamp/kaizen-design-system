FROM node:12-alpine

RUN apk add --no-cache \
  git \
  openssh \
  python \
  py-pip

RUN pip install \
  awscli
