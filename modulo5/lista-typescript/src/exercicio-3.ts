type Filme = {
    nome: string,
    ano: number,
    genero: GENERO
    pontuacao?: number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const filme1: Filme = {
    nome: "Duna",
    ano: 2021,
    genero: GENERO.ACAO,
    pontuacao: 74
}

const filme2: Filme = {
    nome: "Carrie",
    ano: 1976,
    genero: GENERO.TERROR
}

console.log(filme1, filme2)