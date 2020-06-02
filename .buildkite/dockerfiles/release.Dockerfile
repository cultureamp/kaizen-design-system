FROM node:12-alpine3.11

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python \
  py-pip

RUN pip install \
  awscli
