FROM alpine:3.11

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python \
  py-pip \
  curl

RUN pip install \
  awscli
