const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../graphql/types.js');
const resolvers = require('../graphql/resolvers.js');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

server.applyMiddleware({ app });

module.exports = app;