import React from 'react';
import { useNavigate } from "react-router-dom";

const AdminHome = () => {

  const navigate = useNavigate();

  return(
    <div>
      <p>LabeX</p>
      <h1>Painel</h1>
      <button onClick={() => navigate("/")}>Voltar</button><br/>
      <button onClick={() => navigate("/createTrip")}>Criar Viagem</button>
      <button>Logout</button>
      <div>
        <ul>
          <li><a onClick={() => navigate("/tripDetails")}>Inverno em Vênus<button>X</button></a></li>
          <li>Astro<button>X</button></li>
          <li>Outra Viagem<button>X</button></li>
        </ul>
      </div>
    </div>
  );
}

export default AdminHome;