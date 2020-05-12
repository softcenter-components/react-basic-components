import styled from 'styled-components'

export const ModalBody = styled.div`
  position: absolute;
  background: white;
  padding: 35px;
  border-radius: 10px;
  width: 580px;
  height: 340px;
  place-self: center center;
  display: grid;
  font-family: Montserrat;
  z-index: 90;

  > .close-button {
    width: 24px;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 100;
    &:hover {
      width: 25px;
      cursor: pointer;
    }
  }
`

export const ClickableOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 85;
`

export const StyledBackground = styled.div`
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #000000a6;
  display: grid;
  top: 0;
  z-index: 80;
`
