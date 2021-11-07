export const resolvers = {
  Query: {
    operations: async (_parent, _args, ctx) => {
      return await ctx.prisma.operation.findMany()
    },
  },
}
