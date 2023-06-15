FROM node:12-alpine
ENV DATABASE_HOST=mongo
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "dev"]
EXPOSE 5002