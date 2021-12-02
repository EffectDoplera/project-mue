import { styled, useTheme } from '@mui/material/styles'
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { TableChartOutlined } from '@mui/icons-material'
import { FC } from 'react'
import { MainCard } from 'components/MainCard'

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
}))

interface TotalIncomeCardProps {
  isLoading: boolean
}

export const TotalIncomeCard: FC<TotalIncomeCardProps> = ({ isLoading }) => {
  const theme = useTheme()

  return (
    <CardWrapper>
      <Box sx={{ p: 1 }}>
        <List sx={{ py: 0 }}>
          <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                sx={{
                  // ...theme.typography.commonAvatar,
                  // ...theme.typography.largeAvatar,
                  backgroundColor: theme.palette.primary.dark,
                  color: '#fff',
                }}
              >
                <TableChartOutlined fontSize="inherit" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{
                py: 0,
                mt: 0.45,
                mb: 0.45,
              }}
              primary={
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  $203k
                </Typography>
              }
              secondary={
                <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                  Total Income
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </CardWrapper>
  )
}
