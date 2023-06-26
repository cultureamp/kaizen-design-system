FROM node:18.16.1-alpine

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python3 \
  py3-pip \ 
  gcc \ 
  alpine-sdk \ 
  python3-dev

RUN pip install \
  awscli
