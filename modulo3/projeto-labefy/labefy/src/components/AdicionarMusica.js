import axios from "axios";
import React from "react";
import styledComponents from "styled-components";

class AdicionarMusica extends React.Component{

    state = {
        inputNome: '',
        inputArtista: '',
        inputLink: ''
    }

    adicionar = () => { // depois voltar para: adicionar = id => {
        
        const body = {
            name: this.state.inputNome,
            artist: this.state.inputArtista,
            url: this.state.inputLink
        }
        
        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/7bcc7f9c-db6a-417e-b83c-8bd87a7078be/tracks`, body, //7bcc7f9c-db6a-417e-b83c-8bd87a7078be id da playlist indie, depois voltar para: playlists/${id}/tracks
            {headers: {Authorization: "diego-motta-hopper"}}
        ).then(() =>{
            alert(`Música ${this.state.inputNome} adicionada com sucesso!`)
            this.setState({inputNome: ''})
            this.setState({inputArtista: ''})
            this.setState({inputLink: ''})
        }).catch(error => {
            console.log(error.response.data)
        })
    }

    onChangeNome = (event) => {
        this.setState({inputNome: event.target.value})
    }
    onChangeArtista = (event) => {
        this.setState({inputArtista: event.target.value})
    }
    onChangeLink = (event) => {
        this.setState({inputLink: event.target.value})
    }


    render(){
        return(
            <div>
                <input placeholder="Nome" 
                        type="text"
                        value={this.state.inputNome}
                        onChange={this.onChangeNome}/>
                <input placeholder="Artista"                         
                        type="text"
                        value={this.state.inputArtista}
                        onChange={this.onChangeArtista}/>
                <input placeholder="Link"                         
                        type="text"
                        value={this.state.inputLink}
                        onChange={this.onChangeLink}/>
                <button onClick={this.adicionar}>Adicionar</button>
            </div>
        )
    }

}

export default AdicionarMusica