import { User as PrismaUser } from '@prisma/client';
import { prisma } from './db';


export interface Context {
  prisma: typeof prisma;
  user: PrismaUser | null;
}
