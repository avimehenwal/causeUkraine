import { prisma } from "../common/db";
import { Context } from './context'

// data can come from ORM
export const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


// Resolvers define the technique for fetching the types defined in the schema
// arguments for resolvers: _parent, args, context
export const resolvers: any = {
  Query: {
    GetAllBooks: () => books,
    GetAllLinks: async (_parent: undefined, args: undefined, context: Context) => await context.prisma.link.findMany(),
    GetAllImages: async (_parent: undefined, args: undefined, context: Context) => await context.prisma.image.findMany(),
  },
};
