import React from 'react'

import { StyledButton } from './styles'

export const Button = ({ children, className, ...props }) => {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  )
}
