import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card"
import MeusMatches from "./components/MeusMatches";
import "./components/Styles.css"

const App = () =>{

  const [paginaInicial, setPaginaInicial] = useState(true);

  const exibirMatchs = () => {
    setPaginaInicial(!paginaInicial)
  };

  const limparMatchs = () => {
    axios
      .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego/clear')
      .then(response => {    
        console.log(response.data.matches)
      })
      .catch(error => {
        console.log(error.response.data)
    });
  }

  return (
    <div className="App">
        <header className="Titulo">
          <h1>astroMatch</h1>
        </header>
        
        <section className="Botoes">
          <button onClick={() => limparMatchs()}>Limpar Matchs</button>
          <div/>
          <button onClick={() => exibirMatchs()}>{paginaInicial === true ? 'Matchs' : 'Voltar'}</button>
        </section>
        
        <main className="Pagina-exibida">
          
          <div className="Card-principal">
            <container className="Container-pagina">
              {paginaInicial === true ? 
                <Card />
                :
                <MeusMatches />
              }
            </container>  
          </div>
          
        </main>
    
    </div>
  );
}

export default App;
