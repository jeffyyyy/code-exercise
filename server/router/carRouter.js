const graphqlHTTP = require('express-graphql');
const app = require('../../app');
const schema = require('../graphql/schemas/car/schema');

// GraphQL entry
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
