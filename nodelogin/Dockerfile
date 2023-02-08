FROM node:16.13.2

WORKDIR /nodelogin

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "login.js"]