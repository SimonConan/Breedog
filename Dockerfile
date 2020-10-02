FROM alpine:edge

COPY . /var/breedog

EXPOSE 3000 8080

RUN apk add --no-cache \
      nodejs \
      npm \
      make \
      g++ \
      autoconf \
      automake \
      libtool\
      nasm \
      zlib-dev

WORKDIR /var/breedog
RUN make install

CMD cd api && node server.js & cd frontend/public && http-server