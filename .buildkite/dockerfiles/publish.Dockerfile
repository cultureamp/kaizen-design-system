FROM alpine:3.11

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python \
  py-pip \
  curl \ 
  gcc \ 
  alpine-sdk \ 
  python-dev

RUN pip install \
  aws-cli
