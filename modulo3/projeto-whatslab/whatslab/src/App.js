import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WhatsContainer = styled.div`
  border: 1px solid black;
  width: 30vw;
  height: 95vh;
  display: flex;
  display: flex;
  flex-direction: column;
  background-color: white;
    
`

const WhatsMain = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  
`

const ChatFooter = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5px;
   
`
const UserInput = styled.input`
  width: 15vh;
  padding: 5px;
  margin: 0 5px;
  border-radius: 5px;
`
const MessageInput = styled.input`
  width: 100%;
  padding: 5px;
  margin: 0 5px;
  border-radius: 5px;
`
const SendButton = styled.button` 
  width: 15vh;
  border-radius: 5px;
  padding: 5px;
  margin: 0 5px;
  background-color: orange;
`




class App extends React.Component {
  state = {
    chat: [
      {
        usuario: '',
        mensagem: ''
      },
      {
        usuarioEnviar: '',
        mensagemEnviar: ''
      }
      ],
  };

  adicionaMensagem = () => {
    const comentario = {
      usuario: this.state.usuarioEnviar,
      mensagem: this.state.mensagemEnviar,


    };

    const comentarios = [comentario, ...this.state.chat];

    this.setState({
      chat: comentarios,
      usuarioEnviar: "",
      mensagemEnviar: ""
    });
  };

  onChangeUsuario = (event) => {
     this.setState({usuarioEnviar: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({mensagemEnviar: event.target.value})
 }

  render(){

    const listaDeComponentes = this.state.chat.map((chat) => {
      return(

         <p>
         <strong>{chat.usuario}</strong> {chat.mensagem}

         </p>


      );
    });  

    return (

    <MainContainer>
        <WhatsContainer>

            <WhatsMain>
                {listaDeComponentes}
            </WhatsMain>

            <ChatFooter>
            <UserInput
                placeholder="Usuário"
                value={this.state.usuarioEnviar}
                onChange={this.onChangeUsuario}
            />
            <MessageInput
                placeholder="Mensagem"
                value={this.state.mensagemEnviar}
                onChange={this.onChangeMensagem}
            />
            <SendButton onClick={this.adicionaMensagem}>Enviar</SendButton>

             </ChatFooter>


        </WhatsContainer>


      </MainContainer> 
    )
  }
}

export default App;