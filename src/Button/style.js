import styled from 'styled-components'

export const StyledButton = styled.button`
  * {
    margin: 0;
    padding: 0;
  }

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  justify-content: center;
  grid-column-gap: 10px;
  color: #fff;
  background: #0072bc;
  height: 100%;
  width: 100%;
  font-size: ${(props) => props.fontSize};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid #0072bc;
  outline: none;
  box-sizing: border-box;
  padding: 6% 2%;

  > svg {
    width: 20px;
  }

  &:active {
    background: #0009;
    border-color: #0009;
  }

  &:hover {
    cursor: pointer;
  }

  &.disabled {
    background: #acacac;
    border: 1px solid #acacac;
    &:hover {
      cursor: auto;
    }
  }
`
