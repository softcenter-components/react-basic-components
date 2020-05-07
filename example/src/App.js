import React from 'react'

import { Button, Input } from 'react-basic-components'

const App = () => {
  return (
    <>
      <Input
        // error={true}
        errorMsg='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum  '

      />
      <Button onClick={() => console.log('123123')} disabled={false} text='Botão' />
    </>
  )
}

export default App
