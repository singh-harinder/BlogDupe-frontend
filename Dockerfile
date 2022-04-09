FROM node:14 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 7777
RUN npm run build
FROM node:14
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm install
COPY --from=build /app ./
CMD ["npm", "start"]