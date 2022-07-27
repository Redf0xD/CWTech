import React from 'react'
import { Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
export const Card = ({ text, palindrome }) => {
  return <Box component={'div'} sx={{ p: 2, borderRadius: 2, textTransform: 'uppercase', color: '#fff', background: '#1c4775', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>{text}</span>{palindrome ? <StarIcon /> : null}  </Box>
}
