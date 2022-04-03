```JS
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let ocorrencias = arrayDeNumeros.filter(num => num === numeroEscolhido).length;
    if(ocorrencias !== 0){
      return `O número ${numeroEscolhido} aparece ${ocorrencias}x`
    }else if(ocorrencias === 0){
      return `Número não encontrado`
    }
}
```