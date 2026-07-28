FROM node:22-alpine AS build
WORKDIR /site
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm test

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /site/_site /usr/share/nginx/html
RUN chmod -R a+rX /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -qO- http://127.0.0.1/healthz || exit 1
