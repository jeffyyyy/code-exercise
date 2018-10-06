const graphql = require('graphql');
const carTypes = require('./types');

// GRAPHQL SCHEMA
const Schema = new graphql.GraphQLSchema({
  query: carTypes.Query,
});

module.exports = Schema;
