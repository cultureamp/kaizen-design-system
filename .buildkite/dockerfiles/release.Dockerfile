FROM node:10.18.1-alpine

RUN apk add --no-cache \
  git \
  openssh \
  python \
  py-pip

RUN pip install \
  awscli
