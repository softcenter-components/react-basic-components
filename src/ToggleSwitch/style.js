import styled from 'styled-components'

const StyledToggleSwitch = styled.div`
  cursor: pointer;
  box-sizing: content-box;
  transition: all 0.15s ease-out;
  border: 1px solid #b7b7b7;
  width: 50px;
  background: #ebebeb;
  height: 23px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: stretch;
  border-radius: 100px;
  ${(props) => (props.gridArea ? `grid-area: ${props.gridArea};` : '')}

  >.fill {
    border-radius: 100px;
    background: #0072bc;
    transition: all 0.15s ease-out;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

    > .circle {
      width: 23px;
      height: 23px;
      border: 1px solid #b7b7b7;
      border-radius: 100px;
      background: white;
      position: relative;
      left: -1px;
    }
    &.enabled {
      width: 100%;
      .circle {
        left: 0;
      }
    }
    &.disabled {
      width: 23px;
      background: #ebebeb;
    }
  }
`

export default StyledToggleSwitch
