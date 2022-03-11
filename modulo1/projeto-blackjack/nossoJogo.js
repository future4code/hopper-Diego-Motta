/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")){
   const cartasUsuario = {
      carta1: comprarCarta(),
      carta2: comprarCarta(),
   }
   const cartasComputador = {
      carta1: comprarCarta(),
      carta2: comprarCarta()
   }
   const valorUsuario = cartasUsuario.carta1.valor+cartasUsuario.carta2.valor
   const valorComputador = cartasUsuario.carta1.valor+cartasUsuario.carta2.valor
   
   console.log(`Usuário - cartas: ${cartasUsuario.carta1.texto} ${cartasUsuario.carta2.texto} - pontuação ${valorUsuario}\nComputador - cartas: ${cartasComputador.carta1.texto} ${cartasComputador.carta2.texto} - pontuação ${valorUsuario}`)
   
   if(valorUsuario===valorComputador){
      console.log("Empate!")
   }else if(valorUsuario>valorComputador){
      console.log("O usuário ganhou!")
   }else if(valorUsuario<valorComputador){
      console.log("O computador ganhou!")
   }
}else{
   console.log("O jogo acabou")
}


