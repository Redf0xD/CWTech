import React, { useState } from 'react'
import { Input } from '../../components/input'
import { Btn } from '../../components/button'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getWord } from '../../globalContext/actions'

export const Header = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const handleSubmit = () => {
    dispatch(getWord(input))
    setInput('')
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <Box component='header' sx={{ p: 2, gap: 2, borderRadius: 4, background: '#0a1929', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Input value={input} onChange={handleChange}> Insert Text </Input>
      <Btn onClick={handleSubmit}> Send </Btn>
    </Box>
  )
}
