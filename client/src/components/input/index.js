import React from 'react'
import { TextField } from '@mui/material'
export const Input = ({ children, value, onChange, ref }) => {
  return <TextField ref={ref} sx={{ background: '#fff', width: '100%', maxWidth: '768px', borderRadius: 2 }}id='outlined-basic' label={children} variant='filled' onChange={onChange} value={value} />
}
