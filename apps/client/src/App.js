import './App.css';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';
import { ApolloClient, ApolloLink, ApolloProvider } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { Customers } from './components/Customer';

const link = ApolloLink.from([
  createPersistedQueryLink({ useGETForHashedQueries: true }),
  createHttpLink({ uri: 'http://localhost:4000' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Customers />
    </ApolloProvider>
  );
}

export default App;
