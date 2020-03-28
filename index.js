var express = require('express');
const { GraphQLServer } = require('graphql-yoga')
var gtfs = require('gtfs');
const config = require('./gtfs/config.json');
var mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/gtfs', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const resolvers = {
  Query: {
    routes: async () => {
      const test_route = await gtfs.getRoutes({
        agency_key: 'exo_gtfs',
        route_id: '6'
      });
      console.log(test_route);
      console.log('ici1');
      return test_route[0].route_short_name;
      },
  },
}

const server = new GraphQLServer({
  typeDefs: './graphql/schemas/schema.graphql',
  resolvers,
})

gtfs.import(config)
.then(() => {
  console.log('Import Successful');
  async () => {
    const test_route = await gtfs.getRoutes({
      agency_key: 'exo_gtfs',
      route_id: '6'
    });
    console.log(test_route);
    console.log('ici2');
    }
})
.catch(err => {
  console.error(err);
});

server.start(() => console.log(`GraphQL API Server is running on http://localhost:4000`))
