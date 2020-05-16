FROM node:alpine
WORKDIR /client
COPY package.json .
RUN npm install
CMD ["npm", "run", "dev"]