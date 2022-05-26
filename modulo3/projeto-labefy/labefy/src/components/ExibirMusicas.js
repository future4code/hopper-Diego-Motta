import React from "react";
import axios from "axios";
import styled from "styled-components";
import props from 'prop-types';
import AdicionarMusica from "./AdicionarMusica";
import excluir from "./img/excluir.png"

class ExibirMusicas extends React.Component{

    state = {
        musicas: [],
        teste: false
    }

    receberMusicas = id => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
            {headers: {Authorization: "diego-motta-hopper"}}
        )
        .then(response => {
            this.setState({musicas: response.data.result.tracks})
        })
        .catch(error => {
            console.log(error.responde.data)
        });
        this.setState({teste: !this.state.teste})
    }

    removerMusica = id => {
        
        
        

        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${(this.props.id)}/tracks/${id}`,
            {headers: {Authorization: "diego-motta-hopper"}}
        )
        .then(() => {
            alert('Música removida!')
        })
        .catch(error => {
            alert('Não foi possível remover essa música!')
        })
    }

    
    

    render(){
        return(
            <div>
                <button onClick={() => this.receberMusicas(this.props.id)}>Detalhe</button>
                <ul>
                {this.state.teste === true ?
                    <AdicionarMusica id={this.props.id}/>
                    :
                    <div/>
                }
                {this.state.musicas.map((musica) => {
                    
                    if(this.state.teste === true){ 
                        return (
                        <li key={musica.id}>
                            {musica.name}
                            <img src={excluir} width="25px" onClick={() => this.removerMusica(musica.id)}/>
                        </li>)
                        }else{                        
                        <div/>
                    }
                    
                        
                })}
                </ul>
            </div>
        )
    }

}

export default ExibirMusicas