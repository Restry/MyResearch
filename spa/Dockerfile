FROM xataz/node
MAINTAINER Restry michael.wei@foxmail.com

RUN mkdir -p /base

ADD ./server.js /base/server.js
ADD ./package.json /base/package.json

COPY ./src /base/src

EXPOSE 8004
WORKDIR /base

RUN npm install
ENTRYPOINT npm start