import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Styles.css"


const MeusMatches = () =>{

  const [matchs, setMatchs] =useState([]);
  
  const receberMatchs = async () => {
      await axios
      .get(
          'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego/matches'
      )
      .then(response => {    
          console.log(response.data.matches)
          setMatchs(response.data.matches);
      })
      .catch(error => {
          console.log(error.response.data)
      });
  }


  useEffect(() => {
    receberMatchs();
  }, []);




  return (
    <div className="Lista-matchs">
      <div> 
      {/* className="Lista-matchs" */}
          {matchs.map((match) => {
            return(
              <p key={match.id} className="Matchs">
                <img src={match.photo} alt={match.photo_alt}/>
                {match.name}
              </p>
            )
          })}
      </div>
    </div>
  );
}

export default MeusMatches;