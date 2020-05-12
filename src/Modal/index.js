import React from 'react'

import { Close } from '../assets/icons'
import { StyledBackground, ModalBody, ClickableOverlay } from './style'

export const Modal = ({
  children,
  onClose = undefined,
  className,
  CloseIcon
}) => {
  return (
    <StyledBackground>
      <ClickableOverlay onClick={onClose} />
      <ModalBody className={`modal-div ${className}`}>
        {onClose &&
          (CloseIcon ? (
            <CloseIcon className='close-button' onClick={onClose} />
          ) : (
            <Close className='close-button' onClick={onClose} />
          ))}
        {children}
      </ModalBody>
    </StyledBackground>
  )
}
