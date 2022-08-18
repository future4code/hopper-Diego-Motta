// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 58
// Aparece o seguinte erro: "O tipo 'number' não pode ser atribuído ao tipo 'string'.ts(2322)".
// Não é possível atribuir um valor de tipo diferente do definido.


// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
// Como fazer para que essa variável também aceite strings? 
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = 42 + "diego"
// é possível definir mais de um tipo na variavel utilizando o caractere |.
// ou então atribuir o tipo any, apesar de não ser recomendado.


// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// nome, que é uma string;
// idade, que é um número;
// corFavorita, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

type Pessoa = {
    nome: string
    idade: number
    corFavorita: ArcoIris
}

enum ArcoIris {
    violeta = "Violeta",
    indigo = "Índigo",
    azul = "Azul",
    verde = "Verde",
    amarelo = "Amarelo",
    laranja = "Laranja",
    vermelho = "Vermelho"
}

const diego: Pessoa = {
    nome: 'Diego Motta',
    idade: 29,
    corFavorita: ArcoIris.indigo
}

const jordan: Pessoa = {
    nome: 'Jordan Luis',
    idade: 30,
    corFavorita: ArcoIris.verde
}

const lucca: Pessoa = {
    nome: 'Lucca Serejo',
    idade: 23,
    corFavorita: ArcoIris.vermelho
}

console.log(diego, jordan, lucca)