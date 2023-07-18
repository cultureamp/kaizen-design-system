FROM python:3.10-alpine

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python \
  py-pip \
  curl \ 
  gcc \ 
  alpine-sdk \ 
  python-dev
  aws-cli
