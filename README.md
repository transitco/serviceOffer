# ServiceOffer

Retrieve GTFS data with a GraphQL query (nodejs graphql-yoga) from a database (npm gtfs + mongoose + MongoDB)  
Use case is made with Montreal public transit agencies: exo, RTL and STM

## Required

1. Docker
2. Docker Compose

## Run serviceoffer

`docker login docker.pkg.github.com`  
Use your Github username and your Github developer token as password.  
`docker-compose up -d`

### Rebuild and up only serviceoffer container

`docker-compose up -d --build serviceoffer`

### Test app

GraphQL query console: <http://localhost:4000>  
MongoDB admin: <http://localhost:8082/>  
Connection URI: mongodb://mongo:27017/gtfs

* Import GTFS from a zipfile to the database

```bash
curl --request POST \
  --url http://localhost:3000/import_gtfs
```

* Download GTFS from the database as a zipfile

```bash
curl --request GET \
  --url http://localhost:3000/export_gtfs
```

* Choose for which agency:
  * exo: port 3000
  * RTL: port 3001
  * STM: port 3002

Query available agencies

```bash
query {
  agencies {
    agency_key
  }
}
```

Query RTL specific data

```bash
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

Modify agency name

```bash
mutation {
  agency(agency_key: "rtl_gtfs", agency_new_name: "ralph") {
    agency_name
  }
}
```

#### Query from HTTP request (curl)

```bash
curl --request POST \
  --url http://localhost:4000/ \
  --header 'content-type: application/json' \
  --data '{"query":"{\n  agencies {\n    agency_key\n  }\n}\n"}'
```

## Contribute

You are welcome to contribute either directly via GitHub Pull Request or via Gerrit:
<https://review.gerrithub.io/q/project:transitco/serviceOffer+status:open>

Intial setup to use Gerrit:  
```pip install git-review```

Create a change:

1. ```git checkout -b BRANCH_NAME```
2. Modify your files
3. ```git add .```
4. ```git commit -m "MESSAGE"```
5. **```git review```**

Modify an existing change:

1. **```git review -d CHANGE_ID```**
2. Modify your files
3. ```git add .```
4. **```git commit --amend```**
5. **```git review```**
