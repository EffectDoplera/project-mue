import React, { FC } from 'react'
import { useAppSelector } from 'hooks'
import { selectIsLoading } from 'store/globalSlice'
import { Loader, Navbar } from 'components'
import { Box, Container } from '@mui/material'

const MainLayout: FC = ({ children }) => {
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <>
      <Navbar />
      <Container>{isLoading ? <Loader /> : children}</Container>
      <Box height={50} />
    </>
  )
}

export default MainLayout
