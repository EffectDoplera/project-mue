import React, { FC } from 'react'
import { useAppSelector } from 'hooks'
import { selectIsLoading } from 'store/globalSlice'
import Navbar from 'components/Navbar/Navbar'
import { Box, CircularProgress, Container } from '@mui/material'

const MainLayout: FC = ({ children }) => {
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: 50 }}>{isLoading ? <CircularProgress disableShrink /> : children}</Container>
      <Box height={50} />
    </>
  )
}

export default MainLayout
