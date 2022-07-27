import React from 'react'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import { Card } from '../../components/card'
import { Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
export const Main = () => {
  const searches = useSelector(state => state.searches)
  return (
    <Box component={'section'} sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1, borderRadius: 2, background: '#0a1929', height: '80vh' }}>
      <Typography variant={'h2'} sx={{ color: '#fff' }}>Results:</Typography>
      <Typography variant={'p'} sx={{ color: '#fff', display: 'flex', alignItems: 'center' }}>if you see this icon,  it means the word is a palindrome: <StarIcon /></Typography>
      {searches.map(search => <Card key={search.id} {...search} />
      )}
    </Box>
  )
}
