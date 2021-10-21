import { Button } from '@mui/material'
import { TransactionActionItem } from 'components/TransactionActions/TransactionActionItem'
import { CategoryType } from 'core/enums'
import Link from 'next/link'
import { FC } from 'react'

interface TransactionActionsProps {
  type: CategoryType
}

export const TransactionActions: FC<TransactionActionsProps> = ({ type }) => (
  <Link href={type === CategoryType.EXPENSE ? '/create-cost' : '/create-income'} passHref>
    <Button fullWidth>
      <TransactionActionItem type={type} />
    </Button>
  </Link>
)
