import React from "react";
import axios from "axios";

class Lista extends React.Component {

  state = {
    usuarios: []
  }

  pegarUsuarios = () => {

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
           Authorization: "diego-motta-hopper"
        }
    })
    .then((response)=>{ 
        this.setState({usuarios: response.data.result.list}) 
    })
    .catch((error)=>{
        console.log('Erro', error.response.data)
    })
  }

  componentDidMount(){
    this.pegarUsuarios()
  }
  
  render(){

    const listaUsuarios = this.state.usuarios.map((pessoas) =>{
      return <h3>{pessoas.name}</h3>
    })
    
    return(
      <div></div>
    )
  
  }



    

}

export default Lista