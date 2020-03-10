FROM node:alpine

# Create app directory
WORKDIR /app
ADD . /app/

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
