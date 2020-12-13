import resolvers from './src/resolvers';
import typeDefs from './src/typeDefs';
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
