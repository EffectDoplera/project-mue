import { Button } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { TransactionActionItem } from './TransactionActionItem'

export const TransactionActions = () => {
  const router = useRouter()

  const navigateToCreateCost = () => router.push('/create-cost')

  return (
    <Button fullWidth onClick={navigateToCreateCost}>
      <TransactionActionItem />
    </Button>
  )
}
