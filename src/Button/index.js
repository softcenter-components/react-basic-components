import React from 'react'

import { StyledButton } from './style'

export const Button = ({
  children,
  className,
  disabled,
  onClick,
  fontSize = '15px',
  ...props
}) => {
  return (
    <StyledButton
      className={className + (disabled ? ' disabled' : '')}
      disabled={disabled}
      type='button'
      onClick={disabled ? null : onClick}
      fontSize={fontSize}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
