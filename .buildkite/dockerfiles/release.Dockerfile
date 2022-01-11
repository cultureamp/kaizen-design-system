FROM node:16-alpine

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python2 \
  py-pip \ 
  gcc \ 
  alpine-sdk \ 
  python2-dev

RUN pip install \
  awscli
