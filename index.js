const { GraphQLServer } = require('graphql-yoga')
var mongoose = require('mongoose');
const resolvers = require('./graphql/resolvers/resolvers')

mongoose.connect('mongodb://mongo:27017/gtfs', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const server = new GraphQLServer({
  typeDefs: './graphql/schemas/schema.graphql',
  resolvers,
})

server.start(() => console.log(`GraphQL API Server is running on http://localhost:4000`))
