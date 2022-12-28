# pull official base image
FROM node:18.12.1

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . ./

RUN npm install
RUN npm run build


# start app
