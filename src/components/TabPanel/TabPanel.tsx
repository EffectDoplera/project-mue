import { Box } from '@mui/material'
import React, { FC } from 'react'

interface ITabPanelProps {
  index: number
  value: number
}

export const TabPanel: FC<ITabPanelProps> = ({ children, value, index }) => {
  return <Box role="tabpanel">{value === index && <Box>{children}</Box>}</Box>
}
