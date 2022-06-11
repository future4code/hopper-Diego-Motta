import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card"
import MeusMatches from "./components/MeusMatches";
import "./components/Styles.css"

import imgLimparMatchs from "./components/img/refresh.png"
import imgMatchs from "./components/img/user.png"
import imgVoltar from "./components/img/repeat.png"

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
    alert("Matchs zerados")
  }

  const [iconeExibido, setIconeExibido] = useState(imgMatchs);
  
  const exibirIcone = () => {
    if(iconeExibido == (imgMatchs)){
      setIconeExibido(imgVoltar);
    }else{
      setIconeExibido(imgMatchs)
    }
    

  };
  

  
  


  return (
    <div className="App">
      <div className="Astromatch">
        <header className="Titulo">
          <h1>astroMatch</h1>
        </header>
        
        <section className="Botoes">
          
          <img src={imgLimparMatchs} onClick={() => limparMatchs()}/>
          <div/>

          <img src={iconeExibido} onClick={() => {exibirMatchs(); exibirIcone();}} />
          
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
    </div>
  );
}

export default App;
