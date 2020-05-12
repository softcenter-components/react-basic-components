import React from 'react'

import { Button, Input } from 'react-basic-components'
import styled from 'styled-components'

const MyDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 100px;

  .red {
    background: red;
    width: 100%;
    height: 100%;
  }

  .black {
    background: grey;
    width: 100%;
    height: 100%;
    font-size: 65px;
  }

  .blue {
    background: blue;
    width: 100%;
    height: 100%;
    font-size: 1rem;
  }
`

const App = () => {
  return (
    <>
      <MyDiv>
        <div className='red'></div>
        <div className='black'>preto</div>
        <div className='blue'>azul</div>
      </MyDiv>
    </>
  )
}

export default App
