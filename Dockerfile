FROM node:10-alpine as builder
ENV PORT 80
# copy the package.json to install dependencies
COPY package.json yarn.lock ./
# Install the dependencies and make the folder
RUN yarn install && mkdir /react-ui && mv ./node_modules ./react-ui
WORKDIR /react-ui
COPY . .
# Build the project and copy the files
RUN yarn run build
FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stage 1
COPY --from=builder /react-ui/build /usr/share/nginx/html

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'