import React from 'react'
import { Box } from '@mui/material'
import { Header } from '../containers/header'
import { Main } from '../containers/main'

export const Home = () => {
  return <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Header />
    <Main />
  </Box>
}
