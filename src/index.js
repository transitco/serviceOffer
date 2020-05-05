const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');

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

const server = new ApolloServer({
  typeDefs: importSchema('./src/graphql/schemas/schema.graphql'),
  resolvers,
});

const app = express();
server.applyMiddleware({ app });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
