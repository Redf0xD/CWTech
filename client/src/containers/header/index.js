import React, { useState } from 'react'
import { Input } from '../../components/input'
import { Btn } from '../../components/button'
import { Box, CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getWord } from '../../globalContext/actions'

export const Header = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  const [input, setInput] = useState('')
  const [errors, setErrors] = useState('')
  const handleSubmit = () => {
    if (input !== '') {
      dispatch(getWord(input))
      setInput('')
    } else {
      setErrors('Invalid input')
    }
  }
  const handleChange = e => {
    setInput(e.target.value)
    errors.length > 0 && setErrors('')
  }
  return (
    <Box
      component='header'
      sx={{
        p: 2,
        gap: 2,
        borderRadius: 4,
        background: '#0a1929',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Input value={input} onChange={handleChange} errors={errors}>
        Insert Text
      </Input>
      <Btn disabled={loading} onClick={handleSubmit}>
        {' '}
        {loading ? <CircularProgress size={30} /> : 'Send'}
      </Btn>
    </Box>
  )
}
