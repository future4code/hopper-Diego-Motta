// Exercício 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const x = Number(process.argv[3])
const y = Number(process.argv[4])

switch(process.argv[2]){
    case "soma":
        console.log(`Resultado da soma: ${x+y}`)
        break;
    case "subt":
        console.log(`Resultado da subtração: ${x-y}`)
        break;
    case "mult":
        console.log(`Resultado da multiplicação: ${x*y}`)
        break;    
    case "div":
        console.log(`Resultado da divisão: ${x/y}`)
        break;        
}