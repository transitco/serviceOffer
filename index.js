const { GraphQLServer } = require('graphql-yoga')
var gtfs = require('gtfs');
const config = require('./gtfs/config.json');
var mongoose = require('mongoose');
//const resolvers = require('./graphql/resolvers/resolvers.js')

mongoose.connect('mongodb://mongo:27017/gtfs', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const resolvers = {
  Query: {
    routes: async (_, {agency_key, route_id}) => {
      const test_route = await gtfs.getRoutes({
        agency_key: agency_key,
        route_id: route_id
      });
      console.log(test_route);
      return test_route;
      },
  },
  // 3
  route: {
    route_id: (parent) => parent.route_id,
    route_short_name: (parent) => parent.route_short_name,
    route_long_name: (parent) => parent.route_long_name,
    route_desc: (parent) => parent.route_desc,
    route_url: (parent) => parent.route_url,
    route_color: (parent) => parent.route_color,
    route_text_color: (parent) => parent.route_text_color,
    trip_count: (parent) => parent.trip_count,
    pattern_count: (parent) => parent.pattern_count,
  }
}

const server = new GraphQLServer({
  typeDefs: './graphql/schemas/schema.graphql',
  resolvers,
})

server.start(() => console.log(`GraphQL API Server is running on http://localhost:4000`))
