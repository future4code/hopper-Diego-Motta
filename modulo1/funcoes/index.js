// Exercícios de interpretação de código

// 1. Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
// Vai ser impresso o resultado da multiplicação entre os parametros chamados e o 5 já definido. 10 e 50.

// b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// A função retornaria o mesmo resultado e ficaria armazenado fora da função, mas o resultado não seria impresso no console. 


// 2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
// Essa função quando chamada transforma o paramêtro digitado em letras minúsculas e então analisa se contém a palavra "cenoura", retornando true ou false.


// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` - true
//      ii.  `CENOURA é bom pra vista` - true
//      iii. `Cenouras crescem na terra` - false


// Exercícios de escrita de código

// 1.

// a)

const mensagemA = () => {console.log("Eu sou Diego, tenho 28 anos, moro em Brasília e sou contador.")}

// b)

const mensagemB = (nome, idade, cidade, profissao) => (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)


// 2.

// a)

const adicao = (a, b) => a+b
console.log(adicao(56, 80))

// b)

const maiorIgualQue = (a, b) => a>=b
console.log(maiorIgualQue(10, 15))

// c)

const ePar = x => (x%2)===0
console.log(ePar(10))

// d)

const tamanhoEMaiusculo = (frase) => {
    console.log(frase.length, frase.toUpperCase())
}
tamanhoEMaiusculo("Escreva uma frase")


// 3.

const soma = (a, b) => a + b
const subtracao = (a, b) => a - b
const multiplicacao = (a, b) => a * b
const divisao = (a, b) => a / b

let x = Number(prompt("Digite um número"))
let y = Number(prompt("Digite outro número"))

console.log(`Números inseridos: ${x} e ${y}
Soma: ${soma(x,y)}
Diferença: ${subtracao(x,y)}
Multiplicação: ${multiplicacao(x,y)}
Divisão: ${divisao(x,y)}`)


// Desafio.

// 1.

// a)

const imprimir = parametro => {console.log(parametro)}

// b)

const adicionar = (z, k) => z+k
imprimir(adicionar(5, 10))

// 2. 

const pitagoras = (a, b) => Math.sqrt((a*a)+(b*b))

console.log(pitagoras(10, 10))
















































