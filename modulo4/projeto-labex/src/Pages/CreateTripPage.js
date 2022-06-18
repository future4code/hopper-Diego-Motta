import React from 'react';
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {

  const navigate = useNavigate();

  return(
    <div>
      <p>LabeX</p>
      <h1>Criar Viagem</h1>
      <button onClick={() => navigate("/admin")}>Voltar</button>
      <div>
        <form>
          <input placeholder='Nome'></input><br/>
          <input placeholder='Escolha um planeta'></input><br/>
          <input placeholder='dd/mm/aaaa'></input><br/>
          <input placeholder='Descrição'></input><br/>
          <input placeholder='Duração em Dias'></input><br/>
        </form>
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default CreateTrip;