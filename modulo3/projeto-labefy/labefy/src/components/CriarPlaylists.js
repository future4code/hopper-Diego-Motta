import axios from "axios";
import React from "react";
import styledComponents from "styled-components";

class CriarPlaylists extends React.Component{
  
    state = {
        inputName: ""
    }
    
    onChangeName = (event) => {
        {event.target.value.toLowerCase().includes('funk') ?
            alert("Não é possível criar playlists de funk :)")
            :
            this.setState({inputName: event.target.value})
        }
    }
    
    novaPlaylist = () => {
        const body = {
            name: this.state.inputName
        }
        
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body,
        {headers: {
          Authorization: "diego-motta-hopper"}
        })
        .then(() => {
          alert(`Playlist ${this.state.inputName} criada com sucesso!`)
          this.setState({inputName: ''})
        })
        .catch(error => {
          alert(`Erro`)
          console.log(error.response.data)
        })
    }
  
  
  
  
  
    render(){
        return(
        <div>
            <h2>Nova Playlist</h2>
            <input placeholder="Nome da Playlist"
                type="text"
                value={this.state.inputName}
                onChange={this.onChangeName}
            />
            <button onClick={this.novaPlaylist}>
                Criar
            </button>
        </div>
        )
    }
}


export default CriarPlaylists