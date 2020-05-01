
const {GraphQLServer} = require('graphql-yoga');
const mongoose = require('mongoose');
const queries_resolvers = require('./graphql/resolvers/queries.resolvers')
const mutations_resolvers = require('./graphql/resolvers/mutations.resolvers')
const resolvers = [queries_resolvers, mutations_resolvers];
mongoose.connect('mongodb://mongo:27017/gtfs',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
);
const server = new GraphQLServer({
  typeDefs: './src/graphql/schemas/schema.graphql',
  resolvers,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  server.start(() => console.log(`GraphQL API Server is running on http://localhost:4000`));
});
