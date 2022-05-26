import React from "react";
import axios from "axios";
import styled from "styled-components";
import ExibirMusicas from "./ExibirMusicas";
import excluir from "./img/excluir.png"

class ListaPlaylists extends React.Component{

    state = {
        playlists: [],
        resultado: [],
    }

    refresh = () => {
        axios
        .get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            {headers: {Authorization: "diego-motta-hopper"}}
        )
        .then(response => {
            this.setState({playlists: response.data.result.list})
            this.setState({resultado: response.data})
        })
        .catch(error => {
            console.log(error.response.data)
        })
        console.log(this.state.playlists)
        console.log(this.state.resultado);
    };

    apagarLista = id => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
            {headers: {Authorization: "diego-motta-hopper"}}
        )
        .then(() => {
            alert('Playlist apagada!')
        })
        .catch(error => {
            alert('Não foi possível apagar essa playlist!')
        })
    }
    
    


    render(){
        return(
            <div>
                <h2>Teste</h2>
                <button onClick={this.refresh}>Atualizar</button>
                <ul>
                    {this.state.playlists.map((playlist) => {
                        return (
                            <li key={playlist.id}>
                                {playlist.name}
                                <img src={excluir} width="25px" onClick={() => this.apagarLista(playlist.id)}/>
                                <ExibirMusicas id={playlist.id}/>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        )
    }
}

export default ListaPlaylists