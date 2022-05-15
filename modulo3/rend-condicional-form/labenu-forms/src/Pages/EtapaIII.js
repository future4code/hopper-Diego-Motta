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
    margin: 0;
    padding: 0;
`
const Seletor = styled.select`
    text-align: center;
`


export default class EtapaIII extends React.Component{
    render() {
        return(
            <Container>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <Lista>
                    <ItemLista>5. Por que você não terminou um curso de graduação?
                        <input></input>
                    </ItemLista>
                    <ItemLista>6. Você fez algum curso complementar?
                    <Seletor>
                            <option>Nenhum</option>
                            <option>Curso técnico</option>
                            <option>Curso de inglês</option>
                        </Seletor>
                    </ItemLista>
                </Lista>
            </Container>
        )
      }
}