import styled from 'styled-components'

export const StyledButton = styled.button`
  color: #fff;
  background: ${(props) => (props.disabled ? '#ACACAC' : '#0072bc')};
  width: 165px;
  height: 45px;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.disabled ? '#ACACAC' : '#0072bc')};
  outline: none;

  &:active {
    background: #0009;
    border: 1px solid #0009;
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  }
`
