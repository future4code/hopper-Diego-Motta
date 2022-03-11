console.log("Boas vindas ao jogo de Blackjack!")
    
const cartasUsuario = []
// Define arrays para as mãos
const cartasComputador = []

const somaCartas = array =>{ // função que adiciona somente o valor das cartas dos arrays das mãos dos jogadores a um outro array e então retorna a soma dos valores das cartas.
   var valorMao = []
   for(var carta of array){ // var carta of array vai adicionar todas as cartas do array de cada mão.
      valorMao.push(carta.valor)
   }
   var resultado = 0;
   for(var i = 0; i < valorMao.length; i++){ // aqui é somado o valor das cartas, independente do número de cartas.
      resultado += valorMao[i]
   }
   return resultado;  // retorna o resultado da soma
}

const escreveTexto = array =>{ // função que adiciona a um array o texto das cartas
   var textoArray = [];
   for(let i=0; i<array.length; i++){ // adiciona todas as cartas do array das mãos
      textoArray.push(array[i].texto)
   }
   var texto = textoArray.join(" ") // transforma o array com os textos em uma string
   return texto
}


if(confirm("Quer iniciar uma nova rodada?")){
   for(let i=0; i<2; i++){ // adiciona aos arrays das mãos as duas cartas iniciais
      cartasUsuario.push(comprarCarta());
      cartasComputador.push(comprarCarta());
      continue;
         if(cartasUsuario[0].valor===11 && cartasUsuario[1].valor===11 || cartasComputador[0].valor===11 && cartasComputador[1].valor===11){
            cartasUsuario = []; // não sei se essa parte está funcionando, mas a ideia é "resetar" o loop caso ambas as cartas de umas das mãos for A
            cartasComputador = [];
            i = -1;
            continue
         }
   }
   while(somaCartas(cartasUsuario) <= 21){ // chama a função acima e testa se a mão do usuário é menor ou igual que 21
      if(confirm(`Suas cartas são ${escreveTexto(cartasUsuario)}. A carta revelada do computador é ${cartasComputador[0].valor, cartasComputador[0].texto}.\nDeseja comprar mais uma carta?`)===true){
         cartasUsuario.push(comprarCarta()) // chama a função que escreve o texto, é mostrada a primeira carta do computador e então pergunta para o usuario se ele quer comprar outra carta
      }else{ // como é um while isso vai ser perguntado até que o usuário não queira mais comprar cartas, ou a soma das suas cartas for superior a 21
         break
      }
   }
   if(somaCartas(cartasUsuario) <= 21){ // caso as cartas do usuario somem menos ou igual que 21 o computador irá comprar cartas
      while(somaCartas(cartasComputador)<=somaCartas(cartasUsuario) && somaCartas(cartasComputador) <= 17){
         cartasComputador.push(comprarCarta()) // enquanto as cartas do usuario forem menores ou iguais que 21 e as cartas do computador forem menores que 17, o computador irá comprar mais cartas.
      }
   }
  
   if(somaCartas(cartasUsuario)>21){ // textos de resultado:
      alert(`Suas cartas são ${escreveTexto(cartasUsuario)}.\nSua pontuação é ${somaCartas(cartasUsuario)}.\nAs cartas do computador são ${escreveTexto(cartasComputador)}.\nA pontuação do computador é ${somaCartas(cartasComputador)}.\nO computador ganhou!`)
   }else if(somaCartas(cartasUsuario)===somaCartas(cartasComputador)){
      alert(`Suas cartas são ${escreveTexto(cartasUsuario)}.\nSua pontuação é ${somaCartas(cartasUsuario)}.\nAs cartas do computador são ${escreveTexto(cartasComputador)}.\nA pontuação do computador é ${somaCartas(cartasComputador)}.\nEmpate!`)
   }else if(somaCartas(cartasUsuario)>somaCartas(cartasComputador) && somaCartas(cartasUsuario)<=21){
      alert(`Suas cartas são ${escreveTexto(cartasUsuario)}.\nSua pontuação é ${somaCartas(cartasUsuario)}.\nAs cartas do computador são ${escreveTexto(cartasComputador)}.\nA pontuação do computador é ${somaCartas(cartasComputador)}.\nVocê venceu!`)
   }else if(somaCartas(cartasUsuario)<somaCartas(cartasComputador) && somaCartas(cartasComputador)<=21){
      alert(`Suas cartas são ${escreveTexto(cartasUsuario)}.\nSua pontuação é ${somaCartas(cartasUsuario)}.\nAs cartas do computador são ${escreveTexto(cartasComputador)}.\nA pontuação do computador é ${somaCartas(cartasComputador)}.\nO computador venceu!`)
   }else if(somaCartas(cartasComputador)>21){
      alert(`Suas cartas são ${escreveTexto(cartasUsuario)}.\nSua pontuação é ${somaCartas(cartasUsuario)}.\nAs cartas do computador são ${escreveTexto(cartasComputador)}.\nA pontuação do computador é ${somaCartas(cartasComputador)}.\nVocê ganhou!`)
   }

}else{ // fechamento do if else principal, caso o usuario não queira jogar
   console.log(`Fim de Jogo!`)
}

// Desafio feito antes da aula de callback, vou tentar refazer algumas partes usando o map e filter