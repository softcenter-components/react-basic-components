import styled from 'styled-components'
import '../index.css'

export const FloatingMessage = styled.div`
  background: transparent;
  width: 100%;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #c50000;
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  width: 100%;
  box-sizing: border-box;
  grid-row-gap: 2px;
  &.default {
    grid-template-rows: auto;
  }
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
    padding: 3.4% 8%;
    outline: none;
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
    &[type=number] {
      -moz-appearance: textfield;
    }
  }
`
