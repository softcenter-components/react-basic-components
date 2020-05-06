import React from 'react'

import { Button, Input } from 'react-basic-components'

const App = () => {
  return (
    <>
      <Input error={true} errorMsg='oi' />
      <Button text='Botão' />
    </>
  )
}

export default App
