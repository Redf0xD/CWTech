import React from 'react'
import { Button } from '@mui/material'
export const Btn = ({ children, onClick, disabled }) => {
  return <Button sx={{ p: 2, width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant='contained' onClick={onClick} disabled={disabled}>{children}</Button>
}
