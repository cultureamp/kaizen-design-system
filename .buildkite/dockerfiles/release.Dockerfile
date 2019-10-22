FROM node:10.16.3-alpine

RUN apk add --no-cache \
  git \
  openssh \
  python \
  py-pip

RUN pip install \
  awscli
