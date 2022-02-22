// Exercícios de interpretação de código

// 1.
// a) O que vai ser impresso no console?

// console.log(filme.elenco[0]) - Aqui será impresso o nome "Matheus Nachtergaele". Posição 0 do array elenco.

// console.log(filme.elenco[filme.elenco.length - 1]) - "Virgini Cavendish". Último elemento do mesmo array acima.

// console.log(filme.transmissoesHoje[2]) - canal: "Globo", horario: "14h" - Posição 2 do segundo array do objeto.

// 2.
// a) Está sendo alterado apenas o nome do objeto. logo:
// console.log(cachorro) - Aqui seram impressas todas as informações. "nome: 'Juca', idade: '3', raca: 'SRD'"
// console.log(gato) - Aqui o nome foi alterado para "Juba" e  resto se manteve igual.
// console.log(tartaruga) - Por fim, o nome foi alterado para o nome do gato, mas substituindo o "a" pelo "o". "Jubo" 

// b) Ela copia as demais propriedades do objeto.

// 3.
// a) Será impresso "false" e "undefined" respectivamente.

// b) Será "false" pois foi definido isso dentro do objeto. E "undefined" porque não existe essa variável "altura".


// Exercícios de escrita de código

// 1. a)
const pessoa ={
    nome: "Diego",
    apelidos: ["Di", "Dih", "Diogo"]
}

const apresentacao = nome => {
    console.log(`Eu sou ${nome.nome}, mas pode me chamar de: ${nome.apelidos[0]}, ${nome.apelidos[1]} ou ${nome.apelidos[2]}`)
}

apresentacao(pessoa)

// b)
const pessoa2 ={...pessoa, apelidos: ["Didi", "Ogeid", "André"]}

apresentacao(pessoa2)


// 2. a)
const identificaoA = {
    nome: "Diego",
    idade: 28,
    profissao: "Contador"
}
const identificaoB = {
    nome: "Pedro",
    idade: 29,
    profissao: "Dentista"
}

// b)
const chamada = pessoa => [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
console.log(chamada(identificaoA))
console.log(chamada(identificaoB))

// 3. a)
const compras = {
    carrinho: []
}

// b)
const fruta1 = {
    nome: "Mamão",
    disponibilidade: true
}
const fruta2 = {
    nome: "Maçã",
    disponibilidade: true
}
const fruta3 = {
    nome: "Banana",
    disponibilidade: true
}

// c)
const adicionar = fruta => compras.carrinho.push(fruta)
adicionar(fruta1)
adicionar(fruta2)
adicionar(fruta3)

// d)
console.log(compras)

// Desafio

// 1.
const novoUsuario = (name, age, job) => console.log(usuario ={
    nome: name,
    profissao: job,
    idade: age
} )

novoUsuario("André", 35, "Nutricionista")

// 2.
const primeiroFilme={
    nome: "Christine o Carro Assassino",
    anoDeLançamento: 1983
}
const segundoFilme={
    nome: "Massacre do Microondas",
    anoDeLançamento: 1983
}
const comparaFilmes = (filmeA, filmeB) => console.log(`O primeiro filme foi lançado antes do segundo? ${filmeA.anoDeLançamento > filmeB.anoDeLançamento}
O primeiro filme foi lançado no mesmo ano do segundo? ${filmeA.anoDeLançamento === filmeB.anoDeLançamento}`)

comparaFilmes(primeiroFilme, segundoFilme)

// 3.

const frutaVendida = fruta => console.log(
    alteracao = {
        ...fruta,
        disponibilidade: !(fruta.disponibilidade)
    }
)
frutaVendida(fruta3)