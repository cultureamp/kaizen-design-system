FROM node:16-alpine

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python \
  py-pip \ 
  gcc \ 
  alpine-sdk \ 
  python-dev

RUN pip install \
  awscli
