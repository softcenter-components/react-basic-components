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

  > .close-button {
    width: 24px;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 10;
    &:hover {
      width: 25px;
      cursor: pointer;
    }
  }
`

export const StyledBackground = styled.div`
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #000000a6;
  display: grid;
  top: 0;
  z-index: 100;
`
