import axios from "axios";
import React from "react";
import styledComponents from "styled-components";
import CriarPlaylists from "./components/CriarPlaylists";
import ListaPlaylists from "./components/ListaPlaylists";

class App extends React.Component{
  
  state = {
    playlists: false,
  }

  exibirPlaylists = () => {
    this.setState({playlists: !this.state.playlists})
  }

  render(){
    return(
      <div>
        <CriarPlaylists/>
        
        <button onClick={this.exibirPlaylists}>Playlists</button>
        
        {this.state.playlists === true ?
          <ListaPlaylists />
          :
          <div/>
        }
        
      
      </div>
    )
  }
}


export default App