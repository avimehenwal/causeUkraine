import { PrismaClient } from "@prisma/client";
import { prisma } from "../common/db";
import { MicroRequest } from 'apollo-server-micro/dist/types';

export type Context = {
  prisma: PrismaClient;
};

export async function createContext({ req }: { req: MicroRequest }): Promise<Context> {
  return {
    prisma,
  }
}