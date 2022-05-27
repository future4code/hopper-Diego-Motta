import React from "react";
import axios from "axios";
import styled from "styled-components";
import pausePlay from "./img/pause-play.png"
import excluir from "./img/excluir.png"
import expandir from "./img/expandir.png"
import AdicionarMusica from "./AdicionarMusica";
import Player from "./Player";
import refresh from "./img/refazer.png"

class ListaPlaylists extends React.Component{

    state = {
        playlists: [],
        resultado: [],
        musicas: [],
        exibirMusicas: false,
        playing: false,
        musicaTocada: {}
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
    
    receberMusicas = (id, nome) => {
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
        this.setState({exibirMusicas: !this.state.exibirMusicas});
        this.idDaPlaylist = id
        this.nomeDaPlaylist = nome
    }

    idDaPlaylist = ''
    nomeDaPlaylist = ''

    removerMusica = (playlistId, musicaId) => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${(playlistId)}/tracks/${musicaId}`,
            {headers: {Authorization: "diego-motta-hopper"}}
        )
        .then(() => {
            alert('Música removida!')
        })
        .catch(error => {
            alert('Não foi possível remover essa música!')
        })
    }

    musicaPlay = musica => {
        this.setState({
            musicaTocada: musica,
            playing: (!this.state.playing)
        })
    }

    musicaStop = () => {
        this.setState({
            musicaTocada: {},
            playing: false
        })
    }
    


    render(){
        return(
            <div>
                <h2>Suas Playlists</h2>
                <button onClick={this.refresh}>Atualizar</button>
                <div>
                    {this.state.playlists.map((playlist) => {
                        return (
                            <p key={playlist.id}>
                                {playlist.name}
                                <span>{'   '}</span>
                                <img src={expandir} width="25px" onClick={() => this.receberMusicas(playlist.id, playlist.name)}/>
                                <span>{'   '}</span>
                                <img src={excluir} width="25px" onClick={() => this.apagarLista(playlist.id)}/>
                            </p>
                        )
                    })}    
                </div>
                {this.state.exibirMusicas === true ? 
                    <div>
                        <AdicionarMusica id={this.idDaPlaylist} nome={this.nomeDaPlaylist}/>
                        {this.state.musicas.map((musica) => {                           
                            return (
                                <p key={musica.id}>
                                    {musica.name}
                                    <span>{'   '}</span>
                                    |
                                    <span>{'   '}</span>
                                    {musica.artist}
                                    <span>{'            '}</span>
                                    <img src={pausePlay} width="25px" onClick={() => this.musicaPlay(musica.url)}/>
                                    <span>{'            '}</span>
                                    <img src={excluir} width="25px" onClick={() => this.removerMusica(this.idDaPlaylist, musica.id)}/>
                                </p>)                           
                        })}    
                    </div>
                    :
                    <div/>
                }
                {this.state.playing === true ?
                    <Player url={this.state.musicaTocada}/>
                    :
                    <div/>
                }
            </div>
        )
    }
}

export default ListaPlaylists