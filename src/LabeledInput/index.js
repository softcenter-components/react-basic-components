import React from 'react'
import { StyledLabeledInput } from './style'
import { Input } from '../Input'

export const LabeledInput = React.forwardRef(
  ({ title, fontSize = '18px', className, ...props }, ref) => {
    return (
      <StyledLabeledInput className={className} fontSize={fontSize}>
        <span className='field-title'>{title}</span>

        <Input {...props} ref={ref} />
      </StyledLabeledInput>
    )
  }
)
