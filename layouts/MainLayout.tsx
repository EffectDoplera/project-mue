import React, { FC } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container } from '@mui/material'

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: 120 }}>{children}</Container>
    </>
  )
}

export default MainLayout
