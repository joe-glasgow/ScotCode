FROM node:7-alpine

RUN apk --update add \
    bash \
    ca-certificates \
    curl \
    git \
    gnupg \
    gzip \
    openssh-client \
    tar \
    && rm -rf /var/cache/apk/*

RUN touch /root/.profile

RUN sh -c 'curl https://yarnpkg.com/install.sh | /bin/bash'

ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/root/.yarn/bin

COPY . /approot