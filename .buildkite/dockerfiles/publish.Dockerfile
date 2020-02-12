FROM alpine:latest

RUN apk add --no-cache \
  git \
  openssh \
  python \
  py-pip \
  curl

RUN pip install \
  awscli
