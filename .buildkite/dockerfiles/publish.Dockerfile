FROM python:3.10-alpine

RUN pip install 'cython<3.0' cfn-lint --no-build-isolation

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
