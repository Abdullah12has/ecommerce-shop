FROM node AS builder

WORKDIR /app

COPY . .

RUN npm build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD [ "nginx" ]

