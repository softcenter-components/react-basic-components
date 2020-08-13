import React, { useRef } from 'react'

import {
  Button,
  Checkbox,
  Input,
  LabeledInput,
  InputComboBox,
  StatefulSearchList,
  SearchList
} from 'react-basic-components'
import { Container } from './style'

import { Eye } from '../src/icons'

const App = () => {
  const inputRef = useRef()

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
        error={true}
        showErrorIcon={false}
        errorMsg='Mensagens de erro'
      />

      <StatefulSearchList
        Component={Input}
        placeholder='São Paulo - SP'
        ref={inputRef}
        data={[
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' },
          { data: 'anta', value: 'anta' }
        ]}
      />

      <h3>Button</h3>
      <Button>
        <Eye /> <p>Clique aqui</p>
      </Button>

      <h3>Disabled Button</h3>
      <Button disabled={true}>Clique</Button>

      <h3>Checkbox</h3>
      <Checkbox />
    </Container>
  )
}

export default App
