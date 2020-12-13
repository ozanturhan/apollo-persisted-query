import { importSchema } from 'graphql-import';
import { gql } from 'apollo-server-core';

export default gql`
  ${importSchema('./apps/server/src/typeDefs/scheme.graphql')}
`;
