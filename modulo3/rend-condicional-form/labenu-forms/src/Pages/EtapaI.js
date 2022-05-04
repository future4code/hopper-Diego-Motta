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
const Seletor = styled.select`
    text-align: center;
`
const Lista = styled.ul`
    margin: 0;
    padding: 0;
`


export default class EtapaI extends React.Component{
    render() {
        return(
            <Container>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <Lista>
                    <ItemLista>1. Qual o seu nome?
                        <input></input>
                    </ItemLista>
                    <ItemLista>2. Qual a sua idade?
                        <input></input>
                    </ItemLista>
                    <ItemLista>3. Qual o seu email?
                        <input></input>
                    </ItemLista>
                    <ItemLista>4. Qual a sua escolaridade?
                        <Seletor>
                            <option>Ensino médio incompleto</option>
                            <option>Ensino médio completo</option>
                            <option>Ensino superior incompleto</option>
                            <option>Ensino superio completo</option>
                        </Seletor>
                    </ItemLista>
                </Lista>
            </Container>
        )
      }
}