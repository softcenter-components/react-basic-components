import React from 'react'

import StyledLoadingBackdrop from './style'
import { SpinningCircle } from '../assets/animations'

export const LoadingBackdrop = ({text}) => {
  return (
    <StyledLoadingBackdrop>
      <SpinningCircle />
      <span>{text}</span>
    </StyledLoadingBackdrop>
  )
}
