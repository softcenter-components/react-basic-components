import React, { useRef } from 'react'

import { Button, Input, Checkbox, LabeledInput, InputComboBox } from 'react-basic-components'
import { Container } from './style'

const App = () => {
  const inputRef = useRef();

  return (
    <Container>
      {/* <LoadingBackdrop text='Carregando' color="#4CAD8D" /> */}
      <h1>Exemplos</h1>
      <p>
        Os componentes tem largura e altura 100%, e devem ser renderizados
        seguindo a div que a contem.
      </p>

      <h3>Input</h3>
      <LabeledInput
        camelCase={true}
        errorMsg='Mensagens de erro'
      />

      <InputComboBox 
        title="Albuma coisa"
        ref={inputRef}
        itemsList={['item1', 'item2', 'item3', 'item4']}
        itemOnClick={e => console.log(e)} 
      />

      <h3>Button</h3>
      <Button>Clique</Button>

      <h3>Disabled Button</h3>
      <Button disabled={true}>Clique</Button>

      <h3>Checkbox</h3>
      <Checkbox />
    </Container>
  )
}

export default App
