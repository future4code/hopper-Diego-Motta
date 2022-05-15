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
const ItemLista = styled.li`
    display: grid;
    grid-template-rows: auto;
    text-align: center;
    margin-top: 20px;
    row-gap: 2px
`

const Lista = styled.ul`
    display: grid;
    margin: 0;
    padding: 0;
    width: 50vw;
    
`   



export default class EtapaII extends React.Component{
    render() {
        return(
            <Container>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <Lista>
                    <ItemLista>5. Qual curso?
                        <input></input>
                    </ItemLista>
                    <ItemLista>6. Qual a unidade de ensino?
                        <input></input>
                    </ItemLista>
                </Lista>
            </Container>
        )
      }
}