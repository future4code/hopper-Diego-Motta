import React from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  return(
    <div>
      <p>viagens espaciais</p>
      <h1>LabeX</h1>
      <button onClick={() => navigate("/trips")}>Viagens</button>
      <button onClick={() => navigate("/login")}>Admin</button>
    </div>
  );
}

export default Home;