# syntax=docker/dockerfile:1.4

FROM node:16-bullseye AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn generate

FROM nginx:1.27-alpine
COPY nginx/server-tokens.conf /etc/nginx/conf.d/server-tokens.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
