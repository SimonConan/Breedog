FROM alpine:edge

COPY . /var/breedog

EXPOSE 3000 8080

RUN apk add --no-cache \
      nodejs \
      npm \
      make

WORKDIR /var/breedog
RUN make dev

CMD cd api && node server.js & cd frontend/public && http-server