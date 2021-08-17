import { Button } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { TransactionActionItem } from './TransactionActionItem'

export const TransactionActions = () => {
  const router = useRouter()
  return (
    <Button fullWidth onClick={() => router.push('/create-cost')}>
      <TransactionActionItem />
    </Button>
  )
}
