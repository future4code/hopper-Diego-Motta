// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const novoArray = []
    for(i=array.length-1;i>=0;i--){
        novoArray.push(array[i])
    }
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a, b) {
        return a-b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novoArray =[]
    for(var num of array){
        if(num%2===0){
            novoArray.push(num)
        }
    }
    return novoArray  
}   

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArrayQuadrado =[]
    for(var num of array){
        if(num%2===0){
            novoArrayQuadrado.push(num*num)
        }
    }
    return novoArrayQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(var num of array){
        if(num>maiorNumero){
            maiorNumero = num
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objeto = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: true,
        diferenca: 0
    }
    if(num1>num2){
        objeto.maiorNumero = num1
        objeto.maiorDivisivelPorMenor = (num1%num2)===0
        objeto.diferenca = num1-num2
    }else{
        objeto.maiorNumero = num2
        objeto.maiorDivisivelPorMenor = (num2%num1)===0
        objeto.diferenca = num2-num1
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const array = []
    for(var i = 0; array.length < n; i++){
        if((i%2)===0){
            array.push(i)
        }
    } 
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA===ladoB && ladoA===ladoC){
        return "Equilátero"
    }else if((ladoA===ladoB && ladoA!=ladoC) || (ladoA===ladoC && ladoA!=ladoB) || (ladoB===ladoC && ladoB!=ladoA)){
        return "Isósceles"
    }else if(ladoA!=ladoB!=ladoC){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function(a, b) {
        return a-b
    })
    const novoArray = []
    novoArray.push(array[array.length-2])
    novoArray.push(array[1])
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`    
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novoObjeto = {
        ...pessoa,
        nome: "ANÔNIMO",
    }
    return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizacao = array => {
        return (array.idade> 14 && array.idade < 60) && array.altura > 1.5 
    }
    const pessoasAutorizadas = pessoas.filter(autorizacao)
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizacao = array => {
        return (array.idade <= 14 || array.idade >= 60) || array.altura <= 1.5 
    }
    const pessoasNaoAutorizadas = pessoas.filter(naoAutorizacao)
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const teste = {
        ...contas,
    }
    // contas.reduce((a, b) => ({compras: a.compras + b.compras}));
    return teste   
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const consultaOrdemAlfabetica = consultas.sort((a, b) => {
        if(a.nome < b.nome){
            return -1;
        }
        if(a.nome > b.nome){
            return 1;
        }
        return 0
    })
    return consultaOrdemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
}