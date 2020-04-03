# ServiceOffer

## Required
1. Docker
2. Docker Compose
3. Local container image of https://github.com/ChronoSAEIV/GTFSloader

## Run serviceoffer container alone

`docker build . -t serviceoffer`

`docker run -p 4000:4000 serviceoffer`

### Test single container

<http://localhost:4000>

## Run serviceoffer completly

`docker-compose build`

`docker-compose up -d`

### Rebuild and up only serviceoffer container

`docker-compose up -d --build serviceoffer`

### Test app

MongoDB admin: <http://localhost:8082/>

Connection URI: mongodb://mongo:27017/serviceofferdb

```
query {
  test_stl: routes(agency_key: "rtl_gtfs", route_id: "889") {
    route_id
    route_short_name
    route_text_color
    route_long_name
  }
  test_exo: routes(agency_key: "exo_gtfs", route_id: "6") {
    route_text_color
    route_long_name
  }
  test_stm: routes(agency_key: "stm_gtfs", route_id: "445") {
    route_id
    route_short_name
  }
}

```

```
query {
  routes(agency_key: "exo_gtfs") {
    route_long_name
    trips {
      trip_id
      trip_headsign
      stop_times {
        stop_id
      }
    }
  }
}
```