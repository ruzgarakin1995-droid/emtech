import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const adapter = new PrismaMariaDb({
  host: "178.105.53.38",
  port: 3306,
  user: "root",
  password: "Egemo070425.",
  database: "website_builder",
  allowPublicKeyRetrieval: true
});

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
