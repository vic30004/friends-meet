const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");
const db = require("./db/knex");
const { createServer } = require("http");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");

(async function () {
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    context() {
      return { db };
    },
    schema,
  });
  await server.start();
  server.applyMiddleware({ app });
  const PORT = 4000;

  const subscription = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath }
  );

  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`
    );
    console.log(
      `🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`
    );
  });
})();
