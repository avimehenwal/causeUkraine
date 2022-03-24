import { ApolloServer, gql } from 'apollo-server-micro';

// A schema is a collection of type definitions (hence "typeDefs") that together
// define the "shape" of queries that are executed against your data.
export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type link {
    id: String
    url: String
    anchorText: String
    createdAt: String
    updatedAt: String
  }

  type Image {
    id: String
    url: String
    name: String
    description: String
    tagId: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    GetAllBooks: [Book]
    GetAllLinks: [link]
    GetAllImages: [Image]
  }
`;
