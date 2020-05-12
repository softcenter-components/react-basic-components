import React from 'react'

import { StyledButton } from './styles'

export const SecondaryButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}
