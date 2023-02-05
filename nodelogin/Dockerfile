FROM node:14

WORKDIR /nodelogin

COPY package*.json ./
RUN npm install

COPY static ./static

COPY login.* ./

COPY node_modules ./node_modules

CMD [ "npm", "start" ]