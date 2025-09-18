import { PrismaClient } from '@prisma/client';

/**
 * Instanta globala Prisma reutilizata intre request-uri in development pentru a evita conexiuni multiple.
 */
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
