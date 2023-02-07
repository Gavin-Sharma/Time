FROM node:16.13.2

WORKDIR /nodelogin

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "login.js"]