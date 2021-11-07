import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      name: 'test test',
    },
  })

  await prisma.operation.createMany({
    data: [
      {
        type: 'INCOME',
        category: 'SALARY',
        title: ' ',
        amount: 100,
        currency: 'RUB',
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
