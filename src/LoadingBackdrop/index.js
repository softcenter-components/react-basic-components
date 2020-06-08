import React from 'react'

import StyledLoadingBackdrop from './style'
import { SpinningCircle } from '../assets/animations'

export const LoadingBackdrop = ({text, color}) => {
  return (
    <StyledLoadingBackdrop>
      <SpinningCircle color={color} />
      <span>{text}</span>
    </StyledLoadingBackdrop>
  )
}
