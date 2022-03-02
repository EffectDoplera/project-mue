import { List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import TransactionIcon from 'components/Transactions/TransactionIcon'
import { WithEmptyPlaceHolder } from 'hoc/withEmptyPlaceHolder'
import { FC } from 'react'
import { capitalizeFirstChar } from 'utils/helpers'

export const Transactions: FC<{ transactions: any[] }> = ({ transactions }) => (
  <WithEmptyPlaceHolder dataSource={transactions}>
    <List dense>
      {transactions.map(({ category, amount }) => (
        <ListItem key={category}>
          <ListItemAvatar>
            <TransactionIcon category={category} />
          </ListItemAvatar>
          <ListItemText
            primary={capitalizeFirstChar(category)}
            secondary={
              <Typography variant="h6">
                {amount} {'RUB'}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  </WithEmptyPlaceHolder>
)
