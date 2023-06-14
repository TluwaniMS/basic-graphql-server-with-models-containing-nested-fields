FROM node:12-alpine
ENV DATABASE_HOST=mongo
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["node", "server.js"]
EXPOSE 5002