import React from 'react'

import { Button, Input } from 'react-basic-components'

const App = () => {
  return (
    <>
      <Input
        // error={true}
        type="password"
        errorMsg='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum  '

      />
      <Button text='Botão' />
    </>
  )
}

export default App
