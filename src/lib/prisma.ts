import { PrismaClient } from '@prisma/client'

type CustomPrismaClient = PrismaClient // extend here if needed

declare global {
  var prisma: CustomPrismaClient | undefined
}

const prisma: CustomPrismaClient = global.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma
