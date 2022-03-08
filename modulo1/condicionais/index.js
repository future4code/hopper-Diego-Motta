// Exercícios de interpretação de código

// 1. a)
// O código pede para o usuário digitar um número e então é adicionada a propriedade de Number.
// Então é rodado um teste que avalia se o resto da divisão desse número por 2 é igual a zero.
// Se positivo é impressa a mensagem "Passou no teste" caso contrário a mensagem é "Não passou no Teste".

// b)
// Números pares.

// c)
// Números ímpares.


// 2. a)
// O código mostra o preço da fruta digitada pelo usuário.

// b)
// O preço da fruta maçã é R$ 2.25

// c) 
// Seria impresso o preço 5, pois o código da linha abaixo "passaria por cima" do código anterior.


// 3. a) 
// Perguntando um número ao usuário e já atribuindo a propriedade Number.

// b)
// No caso de número positivo apareceria a mensagem "Esse número passou no teste".
// Porém ao chamar o console.log(mensagem), será undefined, pois variáveis do tipo let não saem do seu escopo.
// No caso de número negativo a única mensagem seria a de erro do console.log(mensagem).

// c)
// Sim, variáveis do tipo let não são exportadas para além do escopo das suas funções.


// Exercícios de escrita de código

// 1.

const idadeDoUsuario = Number(prompt("Qual a sua idade?"))

const verificaIdade = idade => {
    if(idade>=18){
        console.log("Você pode dirigir")
    }else{
        console.log("Você não pode dirigir")
    }
}

verificaIdade(idadeDoUsuario)

// 2.

const turnoAula = prompt("Qual o seu turno de aula? M (matutino), V (Vespertino) ou N (Noturno)?")

const verificaTurno = turno => {
    if(turno==="M"){
        console.log("Bom Dia!")
    }else if(turno==="V"){
        console.log("Boa Tarde!")
    }else if(turno==="N"){
        console.log("Boa Noite!")
    }else{
        console.log("Turno Inválido!")
    }
}

verificaTurno(turnoAula)

// 3.

const turnoAula2 = prompt("Qual o seu turno de aula? M (matutino), V (Vespertino) ou N (Noturno)?")

const verificaTurno2 = turno2 => {
    switch (turno2){
        case "M":
            console.log("Bom Dia!")
            break

        case "V":
            console.log("Boa Tarde!")
            break

        case "N":
            console.log("Boa Noite!")
            break

        default:
            console.log("Turno Inválido!")
            break
    }
}

verificaTurno2(turnoAula2)

// 4. 
const generoDoFilme = prompt("Qual o gênero do filme?")
const preçoIngresso = Number(prompt("Qual o valor do ingresso?"))

const verificaFilme = (genero, preço) => {
    if (genero === "fantasia" && preço<15){
        console.log("Bom filme!")
    }else{
        console.log("Escolha outro filme :(")
    }
}

verificaFilme(generoDoFilme, preçoIngresso)


// Desafios

// 1.

const generoDoFilme2 = prompt("Qual o gênero do filme?")
const preçoIngresso2 = Number(prompt("Qual o valor do ingresso?"))

const verificaFilme2 = (genero, preço) => {
    if (genero === "fantasia" && preço<15){
        let lanchinho = prompt("Qual lanchinho você vai comprar?")
        console.log("Bom filme!")
        console.log(`Aproveite o seu ${lanchinho}!`)
    }else{
        console.log("Escolha outro filme")
    }
}

verificaFilme2(generoDoFilme2, preçoIngresso2)

// 2.

const ingresso = {
 nomeCompleto: prompt("Qual o seu nome completo?"),
 tipoDeJogo: prompt("Qual o tipo de jogo? internacional ou doméstico?"),
 etapaDoJogo: prompt("Qual a etapa do jogo? semi-final, terceiro lugar ou final?"),
 categoria: Number(prompt("Qual a categoria do ingresso? 1, 2, 3 ou 4?")),
 quantidadeIngressos: Number(prompt("Quantos ingressos serão comprados?"))
}

const preçoDosIngressos = [1320, 880, 550, 220, 660, 440, 330, 170, 1980, 1320, 880, 330]

const verificaPreço = etapa => {
    if(etapa==="semi-final"){
        return digito = 0
    }else if(etapa==="terceiro lugar"){
        return digito = 4
    }else if(etapa ==="final"){
        return digito = 8
    }else{
        console.log("erro")
    }
}


const posicaoPreço = preçoDosIngressos[((verificaPreço(ingresso.etapaDoJogo))+ingresso.categoria-1)]

const preçoUnitario = tipo => {
    if(ingresso.tipoDeJogo==="internacional"){
        return preçoFinal = 4.10*posicaoPreço
    }else if(ingresso.tipoDeJogo==="doméstico"){
        return preçoFinal = posicaoPreço 
    }else{
        console.log("erro")
    }
}
const preçoTotal = tipo => {
    if(ingresso.tipoDeJogo==="internacional"){
        return preçoFinal = 4.10*posicaoPreço*ingresso.quantidadeIngressos
    }else if(ingresso.tipoDeJogo==="doméstico"){
        return preçoFinal = posicaoPreço*ingresso.quantidadeIngressos 
    }else{
        console.log("erro")
    }
}


const recibo = tipo => {
    if(ingresso.tipoDeJogo==="internacional"){
        console.log(
            `---Dados da compra---
Nome do cliente: ${ingresso.nomeCompleto}
Tipo de jogo: ${ingresso.tipoDeJogo}
Etapa do jogo: ${ingresso.etapaDoJogo}
Categoria: ${ingresso.categoria}
Quantidade de Ingressos: ${ingresso.quantidadeIngressos}
---Valores---
Valor do ingresso: U$ ${preçoUnitario(ingresso.tipoDeJogo)}
Valor total: U$ ${preçoTotal(ingresso.tipoDeJogo)}
            `
        )
    }else if(ingresso.tipoDeJogo==="doméstico"){
        console.log(
            `---Dados da compra---
Nome do cliente: ${ingresso.nomeCompleto}
Tipo de jogo: ${ingresso.tipoDeJogo}
Etapa do jogo: ${ingresso.etapaDoJogo}
Categoria: ${ingresso.categoria}
Quantidade de Ingressos: ${ingresso.quantidadeIngressos}
---Valores---
Valor do ingresso: R$ ${preçoUnitario(ingresso.tipoDeJogo)}
Valor total: R$ ${preçoTotal(ingresso.tipoDeJogo)}
            `
        )
    }else{
        console.log("erro")
    }
}
recibo(ingresso.tipoDeJogo)



