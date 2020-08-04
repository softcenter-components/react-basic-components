import styled from 'styled-components'
import '../index.css'

export const FloatingMessage = styled.div`
  background: transparent;
  width: 100%;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #c50000;
  position: absolute;
  top: 100%;
`

export const Container = styled.div`
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  &.default {
    grid-template-rows: auto;
  }
  position: relative;
`

export const InputBody = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #acacac;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: Montserrat;
  cursor: text;
  &.contains-searchbox,
  &.error {
    position: relative;
  }
  background: white;
  display: grid;
  position: relative;
  ${(props) =>
    props.icon
      ? `
    grid-auto-flow: column;
    grid-template-columns: 1fr 45px;
  `
      : null}

  &.focused {
    box-shadow: 0 0 5px 0 #dddddd;
  }

  svg {
    width: 25px;
    height: auto;
    ${(props) => (props.svgStrokeMode ? `stroke: grey;` : 'fill: grey;')}
    place-self: center center;
    ${(props) => (props.iconIsClickable ? `cursor: pointer;` : null)}
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
    border-width: 2px;
    border-color: #c50000;
  }

  &:not(.password).error {
    svg {
      fill: #c50000;
    }
  }

  input {
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0 25px;
    ${props => props.icon ? `padding-right: 0;` : ''}
    border: none;
    font-size: 16px;
    color: #464646;
    font-family: Montserrat;
    font-weight: 500;
    background: white;
    border-radius: 10px;
    box-sizing: border-box;
    &::placeholder {
      font-weight: 500;
      font-family: Montserrat;
      color: #959595;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`
