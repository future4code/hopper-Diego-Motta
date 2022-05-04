import React from "react";

import styled from "styled-components"
import EtapaI from "./Pages/EtapaI"
import EtapaII from "./Pages/EtapaII"
import EtapaIII from "./Pages/EtapaIII"
import EtapaIV from "./Pages/EtapaIV";

const Botao = styled.button`
  display: flex;
  margin: 20px;
  border: 20px;
  background-color: white;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  width: 10em;
  padding: 1em;
`

class App extends React.Component {
  state = {
    pagina: 1
  }

  renderizaEtapa = () => {
    switch (this.state.pagina) {
      case 1:
        return <EtapaI />
      case 2:
        return <EtapaII />
      case 3:
        return <EtapaIII />
      case 4:
        return <EtapaIV />
    }
  }

  irParaProximaEtapa = () => {
    let soma = (this.state.pagina += 1)
    if (soma <= 4) {
      return this.setState({ pagina: soma })
    }
  }

  render() {
    return (
      <>
        {this.renderizaEtapa()}
        {this.state.pagina <= 3 ? (
            <Botao>
              <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
            </Botao>
        ) : null}
      </>
    )
  }
}


export default App;
