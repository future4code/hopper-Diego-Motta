import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Styles.css"

const Card = () =>{

    const [pessoa, setPessoa] =useState({});
  
    const receberPessoa = async () => {
        await axios
        .get(
            'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego/person',
            {
              headers: {
                 Authorization: "diego-motta-hopper"
              }
            }
        )
        .then(response => {    
            console.log(response.data)
            setPessoa(response.data.profile);
        })
        .catch(error => {
            console.log(error.response.data)
        });
    }

    const testeMatch = (choice) => {
        const dados = {
            id: pessoa.id,
            choice: choice
        }
        axios
        .post(
            'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego/choose-person', dados,
        )
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            alert('Erro :(')
            console.log(error.response.data)
        });
        receberPessoa()
    };

    useEffect(() => {
        receberPessoa();
    }, []);



  
  return (
    <div className="Card">
        
        <container className="Perfil">
            <img src={pessoa.photo} ></img>
            <div className="dados">
                <div className="info">
                    <div className="info-age">{pessoa.age}</div>
                    <div className="info-name">{pessoa.name}</div>
                </div>
                <div className="bio">
                    <div className="info-bio">{pessoa.bio}</div> 
                </div>
            </div>
        </container>
        
        <container className="Like-dislike">
            <button onClick={() => testeMatch(false)}>X</button>
            <button onClick={() => testeMatch(true)}>♥</button>
        </container>
    
    </div>
  );
}

export default Card;