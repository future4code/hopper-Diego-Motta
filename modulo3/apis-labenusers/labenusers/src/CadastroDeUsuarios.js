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
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "diego-motta-hopper"
      }
    })
    .then(()=>{
      alert("Sucesso")
      this.setState({inputName: ""})
      this.setState({inputEmail: ""})
    })
    .catch((err)=>{
      alert("Erro", err.response.data)
    })
  }
  
  render(){
    return(
      <div>
        <h1>Criar Conta</h1>

        <input placeholder="Nome" 
          value={this.state.inputName} 
          onChange={this.onChangeName}>
        </input>

        <input placeholder="Email"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}>
        </input>

        <button onClick={this.criarUsuario}>Criar Usuário</button>
      </div>
    )
  }
}
export default Cadastro