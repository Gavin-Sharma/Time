FROM node:16.13.2

WORKDIR /nodelogin

COPY package*.json ./
RUN npm install

COPY static ./static
COPY login.js ./
COPY login.html ./

EXPOSE 3000

CMD ["node", "login.js"]