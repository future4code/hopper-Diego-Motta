import React from "react";
import axios from "axios";
import styled from "styled-components";
import AdicionarMusica from "./AdicionarMusica";

class ListaPlaylists extends React.Component{

    state = {
        playlists: [],
        resultado: [],
        playlistExibida: []
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

    exibirLista = id => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
            {headers: {Authorization: "diego-motta-hopper"}}
        )
        .then(response => {
            this.setState({playlistExibida: response.data.result.tracks})
        })
        .catch(error => {
            console.log(error.responde.data)
        })
        console.log(this.exibirLista)
        console.log(id)
    }





    render(){
        return(
            <div>
                <h2>Teste</h2>
                <button onClick={this.refresh}>Atualizar</button>
                <ul>
                    {this.state.playlists.map((nomes, index) => {
                        return (
                            <li key={index}>
                                <a onClick={() => this.exibirLista(nomes.id)}>{nomes.name}</a>
                                <button onClick={() => this.apagarLista(nomes.id)}>Apagar</button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <AdicionarMusica/>    
                    <div>
                        {this.state.playlistExibida.map((nomes, index) => {
                            return (
                            <p>Teste</p>,
                            <ul aria-label="Teste">
                                <li key={index}>
                                    {nomes.name}
                                </li>
                            </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListaPlaylists