import React from 'react';
import { useNavigate } from "react-router-dom";

const ListTrips = () => {

  const navigate = useNavigate();

  return(
    <div>
      <p>LabeX</p>
      <h1>Viagens</h1>
      <button onClick={() => navigate("/")}>Voltar</button>
      <button onClick={() => navigate("/application")}>Inscreva-se</button>
      <div>
        <h2>Inverno em Vênus</h2>
        <p>Partiu passar frio no planeta Vênus?</p>
        <p>Planeta: Vênus</p>
        <p>Duração: 100</p>
        <p>Data:2022-06-14</p>
      </div>
    </div>
  );
}

export default ListTrips;