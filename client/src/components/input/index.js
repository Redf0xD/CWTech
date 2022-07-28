import React from 'react'
import TextField from '@mui/material/TextField'
export const Input = ({ children, value, onChange, errors }) => {
  return (
    <TextField
      sx={{
        background: '#fff',
        width: '100%',
        maxWidth: '768px',
        borderRadius: 2
      }}
      error={errors.length > 0}
      id='filled-error-helper-text'
      label={children}
      variant='filled'
      onChange={onChange}
      value={value}
      helperText={errors.length ? errors : ''}
    />
  )
}
