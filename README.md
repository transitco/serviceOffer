# ServiceOffer

## Required
1. Docker
2. Docker Compose

## Run serviceoffer container alone

`docker build . -t serviceoffer`

`docker run -p 4000:4000 serviceoffer`

### Test single container

<http://localhost:4000/graphql>

## Run serviceoffer completly

`docker-compose build`

`docker-compose up -d`

### Rebuild and up only serviceoffer container

`docker-compose up -d --build serviceoffer`

### Test app

MongoDB admin: <http://localhost:8082/>

Connection URI: mongodb://mongo:27017/serviceofferdb
