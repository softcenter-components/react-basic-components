import styled from 'styled-components'

export const StyledButton = styled.button`
  color: #fff;
  background: #0072bc;
  height: 45px;
  width: 100%;
  font-size: ${(props) => props.fontSize};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid #0072bc;
  outline: none;
  box-sizing: border-box;
  padding: 13px 5px;

  &:active {
    background: #0009;
    border: 1px solid #0009;
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  }

  &.disabled {
    background: #acacac;
    border: 1px solid #acacac;
  }
`
