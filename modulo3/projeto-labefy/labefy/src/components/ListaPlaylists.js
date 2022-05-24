import React from "react";
import axios from "axios";
import styled from "styled-components";

class ListaPlaylists extends React.Component{

    state = {
        playlists: [],
        resultado: []
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
        console.log(this.state.resultado)
    };





    render(){
        return(
            <div>
                <h2>Teste</h2>
                <button onClick={this.refresh}>Atualizar</button>
                <ul>
                    {this.state.playlists.map((nomes, index) => {
                        return (
                            <li key={index}>
                                {nomes.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ListaPlaylists