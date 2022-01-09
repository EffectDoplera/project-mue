import { List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import TransactionIcon from 'components/Transactions/TransactionIcon'
import { WithEmptyPlaceHolder } from 'hoc/withEmptyPlaceHolder'
import { FC } from 'react'

export const Transactions: FC<{ transactions: any[] }> = ({ transactions }) => (
  <WithEmptyPlaceHolder dataSource={transactions}>
    <List dense>
      {transactions.map(({ category, amount, id, currency }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <TransactionIcon category={category} />
          </ListItemAvatar>
          <ListItemText
            primary={category}
            secondary={
              <Typography variant="h6">
                {amount} {currency}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  </WithEmptyPlaceHolder>
)
