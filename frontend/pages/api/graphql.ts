import { ApolloServer } from 'apollo-server-micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse } from 'http';
import Cors from 'micro-cors';
import { createContext } from '../../graphql/context';
import { resolvers } from '../../graphql/resolvers';
import { typeDefs } from '../../graphql/schema';

// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
  introspection: true,
});

const startGraphqlServer = graphqlServer.start()
const cors = Cors()

export default cors(async function handler(req: MicroRequest, res: ServerResponse) {
  // res.setHeader("Access-Control-Allow-Origin", "*")
  // res.setHeader("access-control-allow-methods", "POST")

  // only want to process POST requests technically
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
