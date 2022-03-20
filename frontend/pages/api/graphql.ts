import { ApolloServer, gql } from 'apollo-server-micro';
import Cors from 'micro-cors';
import type { NextApiRequest, NextApiResponse } from 'next';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// data can come from ORM
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers: any = {
  Query: {
    books: () => books,
  },
};

// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const graphqlServer = new ApolloServer({ typeDefs, resolvers });
const startGraphqlServer = graphqlServer.start()
const cors = Cors()

export default cors(async function handler(req: NextApiRequest, res: NextApiResponse | boolean) {
  // res.setHeader("Access-Control-Allow-Origin", "*")
  // res.setHeader("access-control-allow-methods", "POST")

  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startGraphqlServer
  await graphqlServer.createHandler({
    path: "/api/graphql",
  })(req, res)
})

// tell nextjs to leave the body parsing to apolloServer and not do it by itself
export const config = {
  api: {
    bodyParser: false,
  },
}
