# syntax=docker/dockerfile:1.4

FROM node:16-bullseye AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn generate

FROM nginx:1.27-alpine
LABEL org.opencontainers.image.title="get-better" \
  org.opencontainers.image.description="Get Better web app" \
  org.opencontainers.image.vendor="Roman Zipp" \
  org.opencontainers.image.authors="Roman Zipp" \
  org.opencontainers.image.licenses="NOASSERTION" \
  org.opencontainers.image.url="https://codeberg.org/romanzipp/get-better.me" \
  org.opencontainers.image.source="https://codeberg.org/romanzipp/get-better.me" \
  org.opencontainers.image.documentation="https://codeberg.org/romanzipp/get-better.me"
COPY nginx/server-tokens.conf /etc/nginx/conf.d/server-tokens.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
