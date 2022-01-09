import { NextApiHandler } from 'next'
import NextAuth, { Session, User } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import prisma from 'lib/prisma'

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Providers.Credentials({
    //   id: '777',
    //   name: 'TEST PROVIDER',
    //   credentials: {
    //     email: { label: 'Email', type: 'text', placeholder: 'testemail@gamil.com' },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(credentials, req) {
    //     const res = await fetch('http://localhost:3000/api/login', {
    //       method: 'POST',
    //       body: JSON.stringify(credentials),
    //       headers: { 'Content-Type': 'application/json' },
    //     })
    //
    //     const user = await res.json()
    //     if (res.ok && user) {
    //       // Any object returned will be saved in `user` property of the JWT
    //       return user
    //     } else {
    //       // If you return null or false then the credentials will be rejected
    //       return null
    //       // You can also Reject this callback with an Error or with a URL:
    //       // throw new Error('error message') // Redirect to error page
    //       // throw '/path/to/redirect'        // Redirect to a URL
    //     }
    //   },
    // }),
  ],
  // session: {
  //   jwt: true,
  // },
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
  callbacks: {
    session: async (session: Session, user: User) => {
      return { ...session, user: { ...session.user, id: user?.sub || '' } }
    },
  },
}
