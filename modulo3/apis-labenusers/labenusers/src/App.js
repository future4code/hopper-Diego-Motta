import React from 'react';
import Cadastro from './CadastroDeUsuarios';
import Lista from './ListaDeUsuarios';

class App extends React.Component{
    
    state = {
        paginaExibida: 'Cadastro',
    }


    mudarPagina = () => {
        if(this.state.paginaExibida === 'Cadastro'){
            this.setState({paginaExibida: 'Lista'})
        }else{
            this.setState({paginaExibida: 'Cadastro'})
        }
        
    }    
    
    
    render(){
        return(
            <div>
                {this.state.paginaExibida === 'Cadastro' ? 
                    (<Cadastro />) 
                    :
                    (<Lista/>)
                }
                <button onClick={this.mudarPagina}>
                    {this.state.paginaExibida === 'Cadastro' ? 
                        (this.textoBotao = 'Usuários Cadastrados') 
                        :
                        (this.textoBotao = 'Voltar')
                    }
                </button>
            </div>
        )
    }
}

export default App