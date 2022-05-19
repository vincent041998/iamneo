FROM node:16-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @angular/cli
RUN npm install -g @ionic/cli
RUN npm install
COPY ./ /app/
RUN ionic build
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/www/ /usr/share/nginx/html/