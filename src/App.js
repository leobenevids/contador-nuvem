import React, { useState } from 'react'
import { Wrapper, Blanket, Button, Title, Viewer } from './styles/GlobalStyle'

function App() {
   
  const [valor, setValor] = useState(0)

  function aumentar(){
    setValor (valor + 1)
  }

  function diminuir(){
    setValor (valor - 1)
  }

  return (
    <Wrapper>
      <Blanket>
      <Button onClick={diminuir}>-</Button>
      <Title>clique para aumentar ou diminuir</Title>
      <Button onClick={aumentar}>+</Button>
      </Blanket>
      <Viewer>{valor}</Viewer>
    </Wrapper>
  );
}

export default App;
