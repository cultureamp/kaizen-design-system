FROM alpine:latest

RUN apk add --no-cache \
  git \
  openssh \
  python \
  py-pip

RUN pip install \
  awscli
