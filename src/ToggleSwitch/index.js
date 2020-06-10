import React from 'react'
import StyledToggleSwitch from './style'

const ToggleSwitch = ({ enabled, className, ...props }) => {
  const status = enabled ? ' enabled' : ' disabled'

  return (
    <StyledToggleSwitch className={className + status} {...props}>
      <div className={'fill' + status}>
        <div className='circle' />
      </div>
    </StyledToggleSwitch>
  )
}

export default ToggleSwitch