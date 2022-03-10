//-----Exercícios de interpretação de código

// 1. A) Será impresso o elemento do array, o seu index e o array completo.

// 2. A) Aqui será impresso um novo array com apenas os nomes dos usuarios do array original.

// 3. A) Aqui será adicionado ao novo array apenas os objetos onde o elemento "apelido" sejam diferentes de "Chijo". E então será impresso esse array.


//-----Exercícios de escrita de código

// 1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
// A)
const nomeDosPets = pets.map(item => item.nome)
console.log(nomeDosPets)
// B)
const cachorrosSalsichas = pets.filter(item => item.raca === "Salsicha")
console.log(cachorrosSalsichas)
// C)
const cupomPoodles = pets.filter(item => item.raca === "Poodle").map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
console.log(cupomPoodles)


// 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// A)
const nomeDosProdutos = produtos.map(item => item.nome)
console.log(nomeDosProdutos)
// B)
const produtosComDesconto = produtos.map(item => ({nome: item.nome, preco: item.preco*0.95}))
console.log(produtosComDesconto)
// C)
const listaBebidas = produtos.filter(item => item.categoria==="Bebidas")
console.log(listaBebidas)
// D)
const produtosYpe = produtos.filter(item => item.nome.includes("Ypê"))
console.log(produtosYpe)
// E)
const compreYpe = produtos.filter(item => item.nome.includes("Ypê")).map(item=> `Compre ${item.nome} por ${item.preco}!`)
console.log(compreYpe)


//-----Desafio

// 1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
// A)
const pokemonsOrdemAlfabetica = pokemons.sort((a, b) => {
    if(a.nome < b.nome){
        return -1;
    }
    if(a.nome > b.nome){
        return 1;
    }
    return 0
}).map(item => item.nome)
console.log(pokemonsOrdemAlfabetica)
// B)
const tiposDosPokemons = pokemons.filter(({tipo}, index) => !(pokemons.map(item => item.tipo)).includes(tipo, index+1)).map(item => item.tipo)
console.log(tiposDosPokemons)