import React from 'react'

import { StyledButton } from './styles'

export const Button = ({ text, ...props }) => {
  return (
    <StyledButton onPress={() => false} {...props}>
      {text}
    </StyledButton>
  )
}
