import React from 'react'

import { StyledButton } from './styles'

export const Button = ({
  children,
  className,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      onClick={disabled ? null : onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
