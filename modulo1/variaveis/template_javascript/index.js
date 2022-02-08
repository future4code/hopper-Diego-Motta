// Exercícios de interpretação de código

// 1:
// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

// No primeiro console.log será impresso apenas o valor da variável b, nesse caso o número 10.
// Já no segundo console.log será impresso o valor de ambas as variáveis, 10 e 5, a e b respectivamente.


// 2:
// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

// Será impresso 10 10 10, já que o valor das variáveis foi alterado durante o código.

//3:
// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

// O programa identifica o valor da hora trabalhada de uma pessoa, perguntando seus rendimentos e tempo de trabalho.
// Os nomes poderiam ser alterados para "horasTrabalhadas" e "recebimentoDia", assim como já colocar a função number() no imput do usuário
// ficando o código dessa forma:

//  let horasTrabalhadas = Number(prompt("Quantas horas você trabalha por dia?"))
//  let recebimentoDia = Number(prompt("Quanto você recebe por dia?"))
//  alert(`Voce recebe ${recebimentoDia/horasTrabalhadas} por hora`)

// Exercícios de escrita de código

// 1.
let nome0
let idade0

console.log(typeof nome0)
console.log(typeof idade0)

// as variáveis foram definidas como tipo undefined, justamente por não terem um valor,
// logo o programa não consegue identificar seu tipo

let nome = prompt("Digite Seu nome")
let idade = Number(prompt("Digita Sua Idade"))

console.log(typeof nome)
console.log(typeof idade)

// Dessa vez o tipo das variáveis foram definidos, pois receberam um valor  
// Esses tipos foram impressos porquê a variável nome é uma função, portanto Object. 
// e a variável idade foi definida como Number.

alert("Olá "+nome+", você tem "+idade+" anos.")


// 2.

const pergunta1 = "Você é pai/mãe de pet?"
const pergunta2 = "Você tem crises de ansiedade?"
const pergunta3 = "Você declara imposto de renda?"

let resposta1 = prompt("Responda com SIM ou NÃO - "+pergunta1)
let resposta2 = prompt("Responda com SIM ou NÃO - "+pergunta2)
let resposta3 = prompt("Responda com SIM ou NÃO - "+pergunta3)

alert(pergunta1+" - "+resposta1)
alert(pergunta2+" - "+resposta2)
alert(pergunta3+" - "+resposta3)


// 3.

let a = 10
let b = 25

let c = b

b = a
a = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)