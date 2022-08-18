// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// Para a entrada das dados é utilizado um array de numeros, a saída também será composta numeros

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([100, 2, 35, 240, 0.50]))


// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
// Primeiramente é utilizada a função sort para ordenar os números do menor para o maior
// Todos os números do array são somados e então os dados são analisados na const estatisticas:
// maior: numerosOrdenados[numeros.length - 1], --- Aqui com os números já ordenados é verificado qual está na ultima posição, ou seja, o maior
// menor: numerosOrdenados[0], --- aqui é feito o inverso, na primeira posição estará o menor
// media: soma / numeros.length --- por fim é obtida a média dividindo a soma dos número pela sua contagem


// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. 

const amostraDeDados = {
    numeros: [100, 2, 35, 240, 0.50],
    obterEstatisticas(numeros:number[]){}
}

