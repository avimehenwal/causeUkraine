import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { resolvers } from '../../graphql/resolvers';
import { typeDefs } from '../../graphql/schema';
import { createContext } from '../../graphql/context';


// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const graphqlServer = new ApolloServer({ typeDefs, resolvers, context:createContext });
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
