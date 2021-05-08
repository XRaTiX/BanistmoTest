FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN apk add bash

USER node

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "app.js" ]
