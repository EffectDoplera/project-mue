import { List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import TransactionIcon from 'src/components/Transactions/TransactionIcon'
import { FC } from 'react'

interface TransactionsProps {
  transactions: any[]
}

export const Transactions: FC<TransactionsProps> = ({ transactions }) => (
  <List dense>
    {transactions.map(({ category, value, currency }) => (
      <ListItem key={category}>
        <ListItemAvatar>
          <TransactionIcon category={category} />
        </ListItemAvatar>
        <ListItemText
          primary={category}
          secondary={
            <Typography variant="h6">
              {value} {currency}
            </Typography>
          }
        />
      </ListItem>
    ))}
  </List>
)
