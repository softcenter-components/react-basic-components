import React from 'react'

import { Button, Input, Modal, LoadingBackdrop } from 'react-basic-components';
import { Container } from './style';

const App = () => {
  return (
    <Container>
      {/* <LoadingBackdrop text='Carregando' /> */}
      <h1>Exemplos</h1>
      <p>Os componentes tem largura e altura 100%, e devem ser renderizados seguindo a div que a contem.</p>

      <h3>Input</h3>
      <Input
        camelCase={true}
        // error={true}
        // type="password"
        errorMsg='Mensagens de erro'
      />

      <h3>Button</h3>
      <Button>Clique</Button>

      <h3>Disabled Button</h3>
      <Button disabled={true} >Clique</Button>

      <h3>Modal</h3>
      {/* <Modal /> */}
    </Container>
  )
}

export default App

