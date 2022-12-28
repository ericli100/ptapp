# build environment

# pull official base image
FROM node:18.12.1-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . /app

RUN npm install
# test
RUN CI=true npm run test
# build
RUN npm run build


# production environment
FROM nginx:1.23.3-alpine
COPY nginx-nocache.conf /etc/nginx/conf.d/nginx-nocache.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
