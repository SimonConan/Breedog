FROM alpine:edge

COPY . /var/breedog

EXPOSE 3000

# Installs latest Chromium (77) package.
RUN apk add --no-cache \
      nodejs \
      npm \
      make

WORKDIR /var/breedog
RUN make dev

CMD cd api && nodemon server
