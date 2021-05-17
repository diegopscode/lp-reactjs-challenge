require("dotenv/config");
const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

const { APP_PORT } = process.env;

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send("Hi, welcome to react challenge!");
    res.end();
  });

  await new Promise((resolve) => app.listen({ port: APP_PORT }, resolve));
  console.log(
    `Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`
  );

  return { server, app };
}

startApolloServer();
