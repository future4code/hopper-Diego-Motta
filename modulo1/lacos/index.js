// Exercícios de interpretação de código

// 1. O código inicialmente atribui o valor 0 à variável valor, e então dentro do for é adicionado o valor "i" à variável valor;
// o "i" irá aumentar de 1 em 1 enquanto for menor que 5.
// no console será impresso o valor 10.

// 2. A) Serão impressos em diferentes linhas os valores: 19, 21, 23, 25, 27 e 30.

// B) Seria possível criando uma condicional dentro do for...of..., utilizando o método .indexOf. Por exemplo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   var pos = lista.indexOf(numero)
//   console.log(pos)
// 	}

// 3. Quatro linhas com 1, 2, 3 e 4 asteriscos respectivamente.


// Exercícios de escrita de código

// 1. 
let numeroDePets = Number(prompt("Quantos animais de estimação você tem?"))
const nomeDosPets = []
// A)
if (numeroDePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
// B)
}else{
    while (numeroDePets>0){
        nomeDosPets.push(prompt("Diga o nome dos seus pets"));
        numeroDePets -= 1
    }
// C)    
    console.log(nomeDosPets)
}

// 2. 
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// A)
for (var num of arrayOriginal){
    console.log(num)
}
// B)
for (var num of arrayOriginal){
    console.log(num/10)
}
// C)
const novoArray = []
for (var num of arrayOriginal){
    if((num%2)===0){
        novoArray.push(num)
    }
}
console.log(novoArray)
// D)
const arrayDeStrings = []
for (var num of arrayOriginal){
    arrayDeStrings.push(`O elemento do índex ${arrayOriginal.indexOf(num)} é: ${num}`)
}
console.log(arrayDeStrings)
// E)
let maiorNumero = 0
for (var num of arrayOriginal){
    if(num > maiorNumero){
        maiorNumero = num
    }
}
let menorNumero = maiorNumero
for(var i = 0; i < arrayOriginal.length-1; i++){
    if(menorNumero>arrayOriginal[i]){
        menorNumero = arrayOriginal[i]
    }
}
console.log(`O maior número é ${maiorNumero}, e o menor número é ${menorNumero}`)

// Desafio
// 1.
if(confirm(`Vamos jogar um jogo de advinha? Precisamos que um jogador pense um número e que outro jogador tente acertar esse número, vamos lá?`)===true){
    
    console.log(`Vamos jogar!`)
    
    let numeroDeTentativas = 0
    
    const numeroJogador = Number(prompt(`Primeiramente digite o número`))
    
    let tentativa = Number(prompt(`Chegou a vez do outro usuário, tente advinhar qual o número correto`))
        numeroDeTentativas += 1
        if(tentativa === numeroJogador){
            console.log(`Parabéns! Você acertou de primeira! O número escolhido é ${numeroJogador}`)
        }else{
            while(tentativa != numeroJogador){
                if(tentativa>numeroJogador){
                    numeroDeTentativas +=1
                    tentativa = Number(prompt(`Errou. O número escolhido é menor`))
                }else if(tentativa<numeroJogador){
                    numeroDeTentativas +=1
                    tentativa = Number(prompt(`Errou. O número escolhido é maior`))
                }
                if(tentativa === numeroJogador){
                console.log(`Acertou! O número escolhido é ${numeroJogador}\nO número de tentativas foi: ${numeroDeTentativas}`)
                }       
            }
        }    
        
}else{
console.log(`Fim de Jogo :(`)
}

// 2.

if(confirm(`Agora vamos jogar o mesmo jogo, mas contra o computador, está pronto?`)===true){
    
    console.log(`Vamos jogar!`)
    
    let numeroDeTentativasPc = 0
    
    const numeroComputador = Math.floor(Math.random()*100)+1
    let tentativa = Number(prompt(`Chegou a sua vez, o computador escolheu um número entre 0 e 100, tente advinhar qual o número correto`))
        numeroDeTentativasPc += 1
        if(tentativa === numeroComputador){
            console.log(`Parabéns! Você acertou de primeira! O número escolhido é ${numeroComputador}`)
        }else{
            while(tentativa != numeroComputador){
                if(tentativa>numeroComputador){
                    numeroDeTentativasPc +=1
                    tentativa = Number(prompt(`Errou. O número escolhido é menor`))
                }else if(tentativa<numeroComputador){
                    numeroDeTentativasPc +=1
                    tentativa = Number(prompt(`Errou. O número escolhido é maior`))
                }
                if(tentativa === numeroComputador){
                console.log(`Acertou! O número escolhido é ${numeroComputador}\nO número de tentativas foi: ${numeroDeTentativasPc}`)
                }       
            }
        }    
        
}else{
console.log(`Fim de Jogo :(`)
}
// Sim, foi fácil fazer a alteração. Apenas precisei entender como gerar um número aleatório e então ajustar o restante da lógica.