import React from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  return(
    <div>
      <p>LabeX</p>
      <h1>Login</h1>
      <button onClick={() => navigate("/")}>Voltar</button><br/>
      <input placeholder='Email'></input><br/>
      <input placeholder='Senha'></input><br/>
      <button onClick={() => navigate("/admin")}>Entrar</button>
    </div>
  );
}

export default Login;