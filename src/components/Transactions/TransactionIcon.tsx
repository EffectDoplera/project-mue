import { CostCategory } from 'src/enums'
import { Avatar } from '@mui/material'
import { FC, memo } from 'react'
import { getTransactionIcon } from 'src/components/Transactions/Transaction.helpers'

interface TransactionIconProps {
  category: CostCategory
}

const TransactionIcon: FC<TransactionIconProps> = ({ category }) => {
  const TransactionIcon = getTransactionIcon(category)

  return (
    <Avatar>
      <TransactionIcon />
    </Avatar>
  )
}

export default memo(TransactionIcon)
