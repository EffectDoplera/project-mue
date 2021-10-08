import { Button } from '@mui/material'
import { TransactionsType } from 'src/enums'
import { useRouter } from 'next/dist/client/router'
import { FC } from 'react'
import { TransactionActionItem } from 'src/components/TransactionActions/TransactionActionItem'
import Link from 'next/link'

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
