import { Button } from '@mui/material'
import { TransactionsType } from 'enums'
import { useRouter } from 'next/dist/client/router'
import React, { FC } from 'react'
import { TransactionActionItem } from './TransactionActionItem'

interface TransactionActionsProps {
  label: string
}

export const TransactionActions: FC<TransactionActionsProps> = ({ label }) => {
  const router = useRouter()

  const navigateToCreateCost = () => router.push('/create-cost')

  const navigateToCreateIncome = () => router.push('/create-income')

  return (
    <Button fullWidth onClick={label === TransactionsType.COST ? navigateToCreateCost : navigateToCreateIncome}>
      <TransactionActionItem label={label} />
    </Button>
  )
}
