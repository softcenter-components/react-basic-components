// npm modules
import React from 'react'

// styled components
import StyledCheckbox from './style'

// components
import { Checked } from '../assets/icons'

const Checkbox = ({ small, round, className, enabled, ...props }) => {
  const classNames = [
    !enabled && 'disabled',
    small && 'small ',
    round && 'round',
    className
  ]

  return (
    <StyledCheckbox className={classNames} {...props}>
      <Checked />
    </StyledCheckbox>
  )
}

export default Checkbox
