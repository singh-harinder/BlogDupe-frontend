FROM node:14-alpine3.14 as deps

ARG NEXT_PUBLIC_PRODUCTION_ENDPOINT
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]
EXPOSE 4500
RUN apk add --no-cache libc6-compat

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./
RUN npm install && npm cache clean --force

FROM node:14-alpine3.14 as build
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
ENV NODE_ENV=production
COPY --chown=node:node . ./
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:14-alpine3.14 as prod
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=5000
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force
COPY --from=build /app/.next ./.next
COPY --from=build /app/next.config.js ./
USER node
CMD ["node_modules/.bin/next", "start"]
