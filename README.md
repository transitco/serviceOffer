# ServiceOffer

Retrieve GTFS data with a GraphQL query (nodejs graphql-yoga) from a database (npm gtfs + mongoose + MongoDB)

Use case is made with Montreal public transit agencies: exo, RTL and STM

## Required
1. Docker
2. Docker Compose

## Run serviceoffer

`docker-compose up -d`

### Rebuild and up only serviceoffer container

`docker-compose up -d --build serviceoffer`

### Test app

GraphQL query console: <http://localhost:4000>

MongoDB admin: <http://localhost:8082/>

Connection URI: mongodb://mongo:27017/gtfs

Query available agencies
```
query {
  agencies {
    agency_key
  }
}
```

Query RTL specific data
```
query {
  agencies(agency_key: "rtl_gtfs") {
    routes(route_id: "889") {
      route_long_name
      trips(direction_id: "1") {
        trip_id
      }
    }
  }
}
```
#### Query from HTTP request (curl)

```
curl --request POST \
  --url http://localhost:4000/ \
  --header 'content-type: application/json' \
  --data '{"query":"{\n  agencies {\n    agency_key\n  }\n}\n"}'
```
