# BREEDOG website
# Node.js / Express / MongoDB / VanillaJS

## Installation

Clone the project and execute the commands below

```bash
docker-compose build
docker-compose up
```

Copy and Modify .env file

```bash
cp api/.env.sample api/.env && vim api/.env
cp frontend/.env.sample frontend/.env && vim frontend/.env
```

## Dev usage

Will launch both http-server for the frontend and node server for the backend
[API is accessible via localhost:3000](localhost:3000)\
[Frontend is accessible via localhost:80](localhost:80)

```bash
docker-compose up
```

### Frontend dev and watch modifications

Will build and watch modifications on the frontend

```bash
docker exec -it breedog sh
cd frontend && npm run dev
```

### Backend dev and watch modifications

Will kill the running node process and launch with nodemon the express server

```bash
docker exec -it breedog sh
kill -9 6
cd api && nodemon server.js
```