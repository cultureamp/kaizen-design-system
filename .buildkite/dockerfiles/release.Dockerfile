FROM node:18.16.0-alpine

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python3 \
  py3-pip \ 
  gcc \ 
  alpine-sdk \ 
  python3-dev \

RUN pip install \
  "Cython<3.0" "pyyaml<6" --no-build-isolation \
  awscli
