import { NextApiRequest, NextApiResponse } from 'next'

export default (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    id: 777,
    email: `testemail@gmail.com`,
    name: 'test test',
    image: 'https://lh3.googleusercontent.com/a-/AOh14GgAFjJ88BP1eaBIwZ5CH2tNVkZvn7RR8Ov7Cp-sGQ=s96-c',
  })
}
