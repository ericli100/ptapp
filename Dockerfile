# build environment
FROM --platform=linux/amd64 node:18.12.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
# COPY ./.github/deployment/.npmrc /app/.npmrc

RUN npm install
COPY . /app
# RUN npm run test
RUN npm run build

# production environment
FROM --platform=linux/amd64 nginx:1.23.3-alpine
COPY ./.github/deployment/nginx-nocache.conf /etc/nginx/conf.d/nginx-nocache.conf
COPY ./.github/deployment/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./.github/deployment/bootstrap.sh /bootstrap.sh
EXPOSE 80
CMD ["/bin/ash", "/bootstrap.sh"]