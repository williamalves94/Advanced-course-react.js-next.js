const { ApolloServer, gql } = require("apollo-server");

//servidor
const server = new ApolloServer();

server.listen().then(({ url }) => {
  console.log(`Servidor rodando em ${url}`);
});
