import React from "react";
import axios from "axios";

class Lista extends React.Component {

  state = {
    usuarios: []
  }

  pegarUsuarios = () => {

    axios
    .get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        headers: {
           Authorization: "diego-motta-hopper"
        }
      }
    )
    .then(response => { 
        this.setState({usuarios: response.data}) 
    })
    .catch(error=>{
        console.log('Erro', error.response.data)
    })
  }

  componentDidMount(){
    this.pegarUsuarios()
  }

  apagarUsuarios = id => {
    
    axios
    .delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
      {
        headers: {
          Authorization: "diego-motta-hopper"
       }
      }
    )
    .then(() => {
      alert('Usuário apagado com sucesso!')
    })
    .catch(error => {
      alert('Não foi possível apagar esse usuário!')
    })

  }
  
  render(){
    return (
      <div>
        <ul>
          {this.state.usuarios.map((nomes, index) => {
            return (
              <li key={index}>
                {nomes.name}
                <button onClick={() => this.apagarUsuarios(nomes.id)}>Deletar</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }



    

}

export default Lista