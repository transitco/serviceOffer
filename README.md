# ServiceOffer

## Run serviceoffer container alone

`docker build . -t serviceoffer`

`docker run -p 4000:4000 serviceoffer`

### Test single container

<http://localhost:4000/graphql>

## Run serviceoffer completly

`docker-compose build`

`docker-compose up`

### Test app

MongoDB admin: <http://localhost:8082/>

Connection URI: mongodb://mongo:27017/serviceofferdb
