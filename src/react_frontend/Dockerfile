FROM node:15.2.1-alpine3.10

# set working directory
WORKDIR /usr/src/react_frontend

#copy dependencies
COPY package.json yarn.lock ./

# install dependencies
RUN yarn

# copy project
COPY . ./

# run project
CMD ["yarn", "run", "start"]