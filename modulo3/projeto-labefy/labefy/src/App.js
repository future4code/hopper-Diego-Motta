import React from "react";
import styledComponents from "styled-components";
import CriarPlaylists from "./components/CriarPlaylists";
import Playlists from "./components/Playlists";

class App extends React.Component{
  
  render(){
    return(
      <div>
        <h1>Labify</h1>
        <CriarPlaylists/>
        <Playlists />
      </div>
    )
  }
}


export default App