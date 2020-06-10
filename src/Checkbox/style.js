import styled from 'styled-components'

const StyledCheckbox = styled.div`
  background: #0072bc;
  border-radius: 5px;
  border: 2px solid #959595;
  width: 30px;
  height: 30px;
  display: inline-grid;
  place-items: center;
  transition: all 0.1s ease-out;
  cursor: pointer;
  > svg {
    width: 50%;
    height: 50%;
    fill: white;
  }
  &.disabled {
    background: white;
  }
  &.round {
    border-radius: 100px;
  }
  &.small {
    width: 20px;
    height: 20px;
  }
`

export default StyledCheckbox
