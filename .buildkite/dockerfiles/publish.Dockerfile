FROM alpine:3.18

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python3 \
  py-pip \
  curl \ 
  gcc \ 
  alpine-sdk \ 
  python3-dev

RUN pip install \
  awscli