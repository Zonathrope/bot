FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
ARG TELEGRAM_KEY="5072101703:AAFKDUK1hpmfXnZfNm2fn_hk6caqxaRSgkk"

RUN npm install

COPY . .

EXPOSE 8888
CMD [ "node", "index.js" ]