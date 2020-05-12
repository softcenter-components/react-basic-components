import styled from 'styled-components'

export const StyledButton = styled.button`
  color: #fff;
  background: #0072bc;
  height: 100%;
  width: 100%;
  font-size: ${(props) => props.fontSize};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid #0072bc;
  outline: none;
  box-sizing: border-box;
  padding: 6% 2%;

  &:active {
    background: #0009;
    border-color: #0009;
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  }

  &.disabled {
    background: #acacac;
    border: 1px solid #acacac;
  }
`
