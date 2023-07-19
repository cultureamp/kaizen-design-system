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
  "Cython<3.0" "pyyaml<6" --no-build-isolation \
  awscli
