import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IxG7eBijAY3tbHUssicoD5OggbirGccTH-wE-WLQNefGma_OUh8x3zERF2Q_i6WRbYE&usqp=CAU" 
          nome="Diego Motta" 
          descricao="Oi, eu sou o Diego. Sou formado em contabilidade, com especialização em finanças. Estou em processo de transição de carreira para a área de tecnologia. Após estudar um tempo sozinho decidi iniciar o curso de Web Full Stack na LaBenu. "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1650665655~hmac=865458f8166488c2433eae19abb61fce" 
          nome="Email:" 
          descricao="mottadiego93@gmail.com" 
        />
        
        <CardPequeno 
          imagem="https://cdn-icons.flaticon.com/png/512/5521/premium/5521776.png?token=exp=1650665579~hmac=df813a1848afd60878dba8757d6c805a" 
          nome="Endereço:" 
          descricao="Setor Sudoeste - Brasília/DF" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTNBEXoXcp4TOvvO1U4HGeD6Ur4N46R2GQp2uqLKjdlvlL3y4ZbO9rIRu6hg_V-_U7rc&usqp=CAU" 
          nome="Integre Nutrição" 
          descricao="Atuação com conciliação bancária, levantamento e execução das transações financeiras, contas a pagar e a receber." 
        />
        
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/a-/AOh14Gg48luJ_XfF3cGhpDYfR97Ja4MQXn9XkkZXG_f2=w60-h60-p-rp-mo-br100" 
          nome="Agência digital de contabilidade" 
          descricao="Rotinas contábeis de empresas prestadoras de serviços. Envio de declarações obrigatórias e acessórias, apuração dos impostos do Simples Nacional." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
