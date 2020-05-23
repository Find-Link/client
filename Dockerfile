FROM node:12-alpine
WORKDIR /client
COPY package.json .
RUN npm install
CMD ["npm", "run", "dev"]