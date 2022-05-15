import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin: 20px;
    border: 20px;
    background-color: white;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    width: 50vw;
    padding: 1em;
    text-align: center
`
const Subtitulo = styled.h2`
font-weight: normal;
`

export default class EtapaIV extends React.Component{
    render() {
        return(
            <Container>
                <h1>O FORMULÁRIO ACABOU</h1>
                <Subtitulo>Muito obrigado por participar! Entraremos em contato!</Subtitulo>
            </Container>    
        )
      }
}