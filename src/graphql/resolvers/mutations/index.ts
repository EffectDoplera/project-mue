import { mutationField, nonNull, nullable } from 'nexus'

export const createOperation = mutationField('createOperation', {
  type: nullable('Operation'),
  args: {
    input: nonNull('CreateOperationInput'),
  },
  resolve: (_, args, ctx) =>
    ctx.prisma.operation.create({
      data: {
        ...args.input,
        // FIXME
        // ownerId: ctx.session?.user.id,
        ownerId: 'f43e28e4-05a7-4f23-afe1-56170de2628e',
      },
    }),
})
