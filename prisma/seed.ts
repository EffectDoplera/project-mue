import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      name: 'test test',
      role: 'QA',
      image: 'https://lh3.googleusercontent.com/a-/AOh14GgAFjJ88BP1eaBIwZ5CH2tNVkZvn7RR8Ov7Cp-sGQ=s96-c',
      operations: {
        create: [
          {
            type: 'INCOME',
            category: 'SALARY',
            title: 'TEST',
            amount: 10,
            currency: 'RUB',
          },
          {
            type: 'INCOME',
            category: 'SALARY',
            title: 'TEST2',
            amount: 100,
            currency: 'RUB',
          },
          {
            type: 'INCOME',
            category: 'SALARY',
            title: 'TEST3',
            amount: 1000,
            currency: 'RUB',
          },
        ],
      },
    },
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
