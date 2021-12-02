import React, { FC } from 'react'
import { useAppSelector } from 'hooks'
import { selectIsLoading } from 'store/globalSlice'
import { Loader } from 'components'
import { Box, Container } from '@mui/material'

import { Header } from './Header'

const MainLayout: FC = ({ children }) => {
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <>
      <Header />
      <Container>{isLoading ? <Loader /> : children}</Container>
      <Box height={50} />
    </>
  )
}

export default MainLayout
