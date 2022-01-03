import { mutationField, nonNull, nullable } from 'nexus'

export const createOperation = mutationField('createOperation', {
  type: nullable('Operation'),
  args: {
    input: nonNull('CreateOperationInput'),
  },
  resolve: (_, args, ctx) =>
    ctx.prisma.operation.create({
      // FIXME
      data: {
        ...args.input,
        ownerId: ctx.session?.user.id,
        category: 'HEALTH',
      } as any,
    }),
})
