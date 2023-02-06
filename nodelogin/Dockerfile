FROM node:16.13.2

WORKDIR /nodelogin

COPY package*.json ./
RUN npm install

COPY login.js ./
COPY login.html ./
COPY homepage.html ./

EXPOSE 3000

CMD ["node", "login.js"]