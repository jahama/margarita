FROM node:8-alpine

ENV NODE_ENV=development

RUN apk add --no-cache bash git openssh

WORKDIR /usr/margarita

COPY package.json .
COPY package-lock.json .

RUN npm i --quiet

EXPOSE 6006
