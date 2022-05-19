import React from "react";
import axios from "axios"


class IntegracaoApi extends React.Component {

    state = {
        playlist: [],
        inputPlaylist: ''
    }

    componentDidMount(){
        this.pegarPlaylist()
    }

    onChangeInput = (event) => {
        this.setState({inputPlaylist: event.target.value})
    }

    // Requisição para pegar as Playlits 
    // Para saber o que precisa passa como parametro no axios.get, sempre olhe a documentação da API

    pegarPlaylist = () => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
               Authorization: "juliana-moraes-guimaraes" // aqui é informado o nome-sobrenome-turma
            }
        })
        .then((response)=>{ // Para caso de sucesso. Preciso do response para receber as informações que vem da API
            this.setState({playlist: response.data.result.list}) // Guardando o retorno no estado 
        })
        .catch((error)=>{ // para caso de erro
            console.log('Erro', error.response.data)
        })
    }

    // Requisição para criar uma playlist

    criarPlaylist = () => {

        const body = {
            name: this.state.inputPlaylist 
        }


        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization: "juliana-moraes-guimaraes"
            }
        })
        .then(()=>{
            //console.log("Playlist criada com sucesso")
            this.setState({inputPlaylist: ''}) // Limpar o input após clicar no botão
            this.pegarPlaylist() // chamo a função de pegar playlist para atualizar a lista na tela
            
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    render(){
        
        // utilizo o map para conseguir renderizar a lista de playlist e mostrar na tela.
        const list = this.state.playlist.map((cadaPlaylist)=>{
            return <h3>{cadaPlaylist.name}</h3>
        })

        return(
            <div>
                <input
                    value={this.state.inputPlaylist}
                    onChange={this.onChangeInput}
                />
                <button onClick={this.criarPlaylist}>Criar Playlist</button>

                <div>
                    {list}
                </div>
            </div>
        )
    }
}

export default IntegracaoApi