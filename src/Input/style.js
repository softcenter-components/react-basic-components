import styled from 'styled-components'

export const FloatingMessage = styled.div`
  background: transparent;
  width: 100%;
  height: 20px;
  bottom: -25px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #bc0000;
  position: absolute;
`

export const InputBody = styled.div`
  width: 100%;
  height: 54px;
  border: 1px solid #acacac;
  padding: 2px;
  border-radius: 10px;
  font-family: Montserrat;
  cursor: text;
  &.contains-searchbox,
  &.error {
    position: relative;
  }
  background: white;
  display: grid;
  ${(props) =>
    props.icon
      ? `
    grid-auto-flow: column;
    grid-template-columns: 1fr 35px;
  `
      : null}

  ${(props) =>
    props.isFocused
      ? `
    box-shadow: 0 0 5px 0 #dddddd;
  `
      : null}

  svg {
    width: 50%;
    height: auto;
    ${(props) => (props.svgStrokeMode ? `stroke: grey;` : 'fill: grey;')}
    place-self: center center;
  }

  .icon-container {
    display: grid;
    width: 100%;
    place-self: center;
    place-content: center;
  }

  &.hoverable .icon-container {
    cursor: pointer;
  }

  &.error {
    margin-bottom: 20px;
    border-width: 2px;
    border-color: #bc0000;
    svg {
      fill: #bc0000;
    }
  }

  input {
    height: 100%;
    width: 100%;
    padding: 0px 15px;
    outline: none;
    border: none;
    font-size: 16px;
    color: #464646;
    font-family: Montserrat;
    background: white;
    border-radius: 10px;
    &::placeholder {
      font-weight: 500;
      font-family: Montserrat;
      color: #959595;
    }
  }
`
