import React, { FC } from 'react'
import { useAppSelector } from 'src/hooks'
import { selectIsLoading } from 'src/store/globalSlice'
import Navbar from 'src/components/Navbar/Navbar'
import { CircularProgress, Container } from '@mui/material'

const MainLayout: FC = ({ children }) => {
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: 120 }}>{isLoading ? <CircularProgress disableShrink /> : children}</Container>
    </>
  )
}

export default MainLayout
