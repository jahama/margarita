FROM node:8-alpine

RUN apk add --no-cache bash git openssh

WORKDIR /usr/margarita

COPY package.json .
COPY package-lock.json .

RUN npm i --quiet

EXPOSE 6006
