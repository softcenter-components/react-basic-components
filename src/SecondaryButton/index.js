import React from 'react'

import { StyledButton } from './style'

export const SecondaryButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}
