// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a Altura"))
  let largura = Number(prompt("Digite a Largura"))

  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em qual ano estamos?"))
  let anoNascimento = Number(prompt("Em qual ano você nasceu?"))

  console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  return peso/(altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome = prompt("Qual o seu nome?")
  let idade = Number(prompt("Quantos anos você tem?"))
  let email = prompt("Digite seu email")  

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
    var array = [];
      for(var i = 0; i < 3; i++)
        array.push(prompt("Digite uma cor"))

  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
  
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let primeiroUltimo = array[0]
let ultimoPrimeiro = array[array.length-1]
array[0] = ultimoPrimeiro
array[array.length-1] = primeiroUltimo
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoCarteira) {
  // implemente sua lógica aqui
  let anoCorrente = Number(prompt("Em qual ano estamos?"))
  let anoNasc = Number(prompt("Em qual ano você nasceu?"))
  let anoCart = Number(prompt("Em qual ano tirou sua carteira?"))  
  
  let idade = anoCorrente - anoNasc
  let tempoReg = anoCorrente - anoCart

  const resultado = (idade<=20 && tempoReg>=5) || (idade>20 && idade<=50 && tempoReg>=10) || (idade>50 && tempoReg>15)

  console.log(resultado)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

let primeiraRegra = ((ano%400)===0)  
let segundaRegra =((ano%4)===0)
let terceiraRegra = ((ano%100)===0 && (ano%400)!==0)

return primeiraRegra || segundaRegra && !terceiraRegra
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?")
  let escolaridade = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusica durante os horários do curso?")
  console.log((idade === "sim") && (escolaridade === "sim") && (disponibilidade === "sim"))
}