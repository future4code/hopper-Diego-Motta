// Exercícios de interpretação de código

// 1. 
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// Aqui o resultado = false. Com o operador && se pelo menos uma das variáveis for false toda a estrutura também será.


// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// resultado = false. Apesar da bool1 e bool3 serem true, a bool2 torna tudo false.


// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// aqui resultado = true. !resultado se refere ao oposto da ultima variável resultado, ou seja true.
// e também o operador || indica que apenas um precisa ser true para a operação ser true.


// console.log("d. ", typeof resultado)
// boolean. esse tipo de valor lógico que é referente a true ou false.

// 2.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Os números digitados pelo usuário estão sendo armazenados como strings.
// Antes de ser feita a soma é preciso converte-los para number, ou já armazenar dessa forma com o comando prompt.

// 3.

// Eu mudaria essa parte do código:

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// Para essa:

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// Dessa forma a variável já é salva diretamente com a propriedade correta.


// Exercícios de escrita de código

// 1.

let idadeUser = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu(a) melhor amigo(a)?"))

console.log("Sua idade é maior do que a do seu melhor amigo?")
console.log(idadeUser>idadeAmigo)
console.log(`Diferença de idade: ${idadeUser-idadeAmigo}`)

// 2.

let numeroPar = Number(prompt("Digite um número PAR"))
console.log(numeroPar%2)

// Em números pares o resto da divisão por 2 sempre será 0.

// Caso o usuário digite um número ímpar o resto da divisão será 1.

// 3

const idadeAnos = Number(prompt("Quantos anos você tem?"))

let idadeMeses = idadeAnos*12
let idadeDias = idadeAnos*365
let idadeHoras = idadeAnos*8760

console.log(idadeAnos+" anos", idadeMeses+" meses", idadeDias+" dias", idadeHoras+" horas")

// 4. 

let numeroI = Number(prompt("Digite um número"))
let numeroII = Number(prompt("Digite outro número"))

console.log(`O primeiro número é maior que o segundo? ${numeroI>numeroII}`)
console.log(`O primeiro número é igual ao segundo? ${numeroI===numeroII}`)
console.log(`O primeiro número é divisível pelo segundo? ${0===(numeroI%numeroII)}`)
console.log(`O segundo número é divisível pelo primeiro? ${0===(numeroII%numeroI)}`)