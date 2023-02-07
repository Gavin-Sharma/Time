FROM node:16.13.2

WORKDIR /view_data

COPY package*.json ./
RUN npm install

COPY index.html ./
COPY style.css ./
COPY view_data.js ./

EXPOSE 8004

CMD [ "node", "view_data.js" ]

