// Exercícios de interpretação de código

// 1. Indique todas as mensagens impressas no console

// let array
// console.log('a. ', array)
// Mensagem: undefined. A variável não foi definida.

// array = null
// console.log('b. ', array)
// Mensagem: b. null. Aqui array é uma variável definida como null.

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// Mensagem: c. 11. A função está contando o número de elementos do array

// let i = 0
//  console.log('d. ', array[i])
// Mensagem: d. 3. É impresso a posição i do array, nesse caso a 0.

// array[i+1] = 19
// console.log('e. ', array)
// Mensagem: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]. Aqui o número 19 foi adicionado na posição 1. 

// const valor = array[i+6]
// console.log('f. ', valor)
// Mensagem: f. 9. É atribuido à variavel valor o elemento i+6 do array

// 2. 

// Será impressa a frase com as alterações de alterar todas as letras para maiusculas e substituir os As por Is:
// Também será mostrado o número de caracteres, incluindo os espaços:
// SUBI NUM ÔNIBUS EM MIRRICOS 27


// Exercícios de escrita de código

// 1.

const nomeDoUsuario = prompt("Nome do Usuário")
const emailDoUsuario = prompt("Email do Usuário")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`)

// 2.

const comidasFavoritas = ["Pizza", "Comida Japonesa", "Hambúrguer", "Lasanha", "Churrasco"]

console.log(comidasFavoritas)

console.log(`Essas são as minhas comidas preferidas:\n${comidasFavoritas.join("\r\n")}\n`)

comidasFavoritas [1] = prompt("Sua comida favorita?")
console.log(comidasFavoritas)

// 3.

const listaDeTarefas = []

listaDeTarefas.push(prompt("Tarefa 1"))
listaDeTarefas.push(prompt("Tarefa 2"))
listaDeTarefas.push(prompt("Tarefa 3"))
console.log(listaDeTarefas)

listaDeTarefas.splice((prompt("Qual tarefa já foi realizada? 0, 1 ou 2?")),1)
console.log(listaDeTarefas)

// Desafio

//1
let frase = (prompt("Escreva uma frase")).split(" ")
console.log(frase)

//2
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`Índice da palavra Abacaxi: ${frutas.indexOf("Abacaxi")}\nTamanho do array: ${frutas.length}.`)