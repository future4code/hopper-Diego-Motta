import React from "react";
import axios from "axios";

class Cadastro extends React.Component {

  state = {
    inputName: "",
    inputEmail: ""
  }

  onChangeName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  criarUsuario = () => {

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios
    .post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
    body,
    {
      headers: {
        Authorization: "diego-motta-hopper"
      }
    }
    )
    .then(()=>{
      alert(`Usuário ${this.state.inputName} criado com sucesso!`)
      this.setState({inputName: '', inputEmail: ''})
    })
    .catch(error => {
      alert("Erro")
      console.log(error.response.data)
    })
  }
  
  render(){
    return(
      <div>
        <h1>Criar Conta</h1>

        <input placeholder="Nome"
          type="text" 
          value={this.state.inputName} 
          onChange={this.onChangeName}
        />

        <input placeholder="Email"
          type="email"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
        />

        <button onClick={this.criarUsuario}>Criar Usuário</button>
      </div>
    )
  }
}
export default Cadastro