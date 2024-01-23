import { PrismaClient } from '@prisma/client';

const singletonPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  singletonPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') singletonPrisma.prisma = prisma;
