import { PrismaClient } from '@prisma/client'
import prisma from 'db/prisma'
import { DefaultSession } from 'next-auth'
import { getSession } from 'next-auth/client'
import { NextApiRequest, NextApiResponse } from 'next'

type MySession = DefaultSession & { user: DefaultSession['user'] & { id: string } }

export interface Context {
  prisma: PrismaClient
  session: MySession | null
}

export interface CreateContextPayload {
  req: NextApiRequest
  res: NextApiResponse
}

export async function createContext({ req }: CreateContextPayload): Promise<Context> {
  const session = (await getSession({ req })) as MySession

  return {
    prisma,
    session,
  }
}
