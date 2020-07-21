import React from 'react'
import { StyledLabeledInput } from './style'
import { Input } from '../Input'

export const LabeledInput = React.forwardRef(
  ({ title, fontSize = '18px', className, id, ...props }, ref) => {
    return (
      <StyledLabeledInput id={id} className={className} fontSize={fontSize}>
        <span className='field-title'>{title}</span>

        <Input {...props} ref={ref} />
      </StyledLabeledInput>
    )
  }
)
