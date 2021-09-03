import { CostCategory } from 'enums'
import { Avatar } from '@material-ui/core'
import { FC, memo } from 'react'
import { getTransactionIcon } from './Transaction.helpers'

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
