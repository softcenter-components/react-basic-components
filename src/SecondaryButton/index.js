import React from 'react'

import { StyledButton } from './style'

const SecondaryButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export { SecondaryButton }
