import { CostCategory } from 'enums'
import { Avatar } from '@mui/material'
import { FC, memo } from 'react'
import { getTransactionIcon } from 'components/Transactions/Transaction.helpers'

interface TransactionIconProps {
  category: CostCategory | string
}

const TransactionIcon: FC<TransactionIconProps> = ({ category }) => {
  const TransactionIcon = getTransactionIcon(category as CostCategory)

  return (
    <Avatar>
      <TransactionIcon />
    </Avatar>
  )
}

export default memo(TransactionIcon)
