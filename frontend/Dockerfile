FROM node:21.4.0

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]