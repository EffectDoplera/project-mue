import { Button } from '@mui/material'
import { TransactionActionItem } from 'components/TransactionActions/TransactionActionItem'
import { TransactionsType } from 'enums'
import Link from 'next/link'
import { FC } from 'react'

interface TransactionActionsProps {
  type: TransactionsType
}

export const TransactionActions: FC<TransactionActionsProps> = ({ type }) => (
  <Link href={type === TransactionsType.COST ? '/create-cost' : '/create-income'} passHref>
    <Button fullWidth>
      <TransactionActionItem type={type} />
    </Button>
  </Link>
)
