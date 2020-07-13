import React from 'react'

import { StyledButton } from './style'

const Button = ({
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

export { Button }
