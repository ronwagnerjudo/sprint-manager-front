FROM node:18 AS builder
WORKDIR /app
COPY ./package.json ./package.json
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
ENTRYPOINT ["nginx", "-g", "daemon off;"]