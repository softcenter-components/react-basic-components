import React from 'react'
import { StyledLabeledInput } from './style'
import { Input } from '../Input'

export const LabeledInput = React.forwardRef(({ title, ...props }, ref) => {
  return (
    <StyledLabeledInput>
      <span className='field-title'>{title}</span>

      <Input {...props} ref={ref} />
    </StyledLabeledInput>
  )
})
