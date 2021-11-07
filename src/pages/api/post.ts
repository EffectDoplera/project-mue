// import { getSession } from 'next-auth/client'
// import prisma from 'db/prisma'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
// export default async function handle(req, res) {
// const { title, content } = req.body

//   const session = await getSession({ req })
//   const result = await prisma.post.findUnique({
//     where: { id: 1 },
//   })
//   res.json(result)
// }
