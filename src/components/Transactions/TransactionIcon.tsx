import { Avatar } from '@mui/material'
import { getTransactionIcon } from 'components/Transactions/Transaction.helpers'
import { CategoryName } from 'core/domain/_category'
import { FC, memo } from 'react'

interface TransactionIconProps {
  category: CategoryName
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
