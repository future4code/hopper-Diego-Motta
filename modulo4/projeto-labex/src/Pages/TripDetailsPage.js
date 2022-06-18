import React from 'react';
import { useNavigate } from "react-router-dom";

const TripDetails = () => {

  const navigate = useNavigate();

  return(
    <div>
      <p>LabeX</p>
      <h1>Inverno em Vênus</h1>
      <button onClick={() => navigate("/admin")}>Voltar</button>
      <div>
        <h3>Partiu passar frio no planeta Vênus?</h3>
        <p>Planeta: Vênus</p>
        <p>Duração: 100</p>
        <p>Data:2022-06-14</p>
      </div>
      <div>
        <h3>Candidatos Pendentes</h3>
        <ul>
          <li>
            <p>João das Neves - 19</p>
            <ul>
              <li>Patrulheiro</li>
              <li>Westeros</li>
            </ul>
            <p>"Quero muito ver o sol"</p>
          </li>
          <button>Reprovar</button>
          <button>Aprovar</button>
        </ul>
      </div>
      <div>
        <h3>Candidatos Aprovados</h3>
        <ul>
          <li>Antonio Fagulha - 49</li>
          <li>Lucas dos Céus - 32</li>
        </ul>
      </div>
    </div>
  );
}

export default TripDetails;