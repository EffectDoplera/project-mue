import { Typography } from '@mui/material'
import React, { FC } from 'react'

interface WithEmptyPlaceHolderProps {
  dataSource: any[]
}

export const WithEmptyPlaceHolder: FC<WithEmptyPlaceHolderProps> = ({ children, dataSource }) => {
  if (!dataSource.length) {
    return <Typography variant="h6">This list is still empty</Typography>
  }

  return <>{children}</>
}
