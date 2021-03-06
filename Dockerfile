FROM node:10-alpine as builder
ENV PORT 80
ENV REACT_APP_LIBOGRAPHY_CLIENT_ID=clientId
ENV REACT_APP_LIBOGRAPHY_HASURA_ADMIN_SECRET=hasuraSecret
ENV REACT_APP_LIBOGRAPHY_AUTH_DOMAIN=libography.us.auth0.com
ENV REACT_APP_LIBOGRAPHY_REDIRECT_URI=https://libography.herokuapp.com/#/login
ENV REACT_APP_LIBOGRAPHY_AUDIENCE=https://libography.herokuapp.com/callback

# copy the package.json to install dependencies
COPY package.json yarn.lock ./

# Install the dependencies and make the folder
RUN yarn install && mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

COPY . .

# Build the project and copy the files
RUN yarn run build


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf
# RUN envsubst < "/etc/nginx/nginx.conf.temp" > "/etc/nginx/nginx.conf"

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /react-ui/build /usr/share/nginx/html

# CMD ["nginx", "-g", "daemon off;"]
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'