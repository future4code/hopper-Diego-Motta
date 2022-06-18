import React from 'react';
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {

  const navigate = useNavigate();

  return(
    <div>
      <p>LabeX</p>
      <h1>Inscreva-se</h1>
      <button onClick={() => navigate("/trips")}>Voltar</button>
      <div>
        <form>
          <input placeholder='Escolha uma Viagem'></input><br/>
          <input placeholder='Nome'></input><br/>
          <input placeholder='Idade'></input><br/>
          <input placeholder='Texto da Candidatura'></input><br/>
          <input placeholder='Profissão'></input><br/>
          <input placeholder='Escolha um País'></input><br/>
        </form>
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default ApplicationForm;