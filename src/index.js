import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: red;
`

export const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}
