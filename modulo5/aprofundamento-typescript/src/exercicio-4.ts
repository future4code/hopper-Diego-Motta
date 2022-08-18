// a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) O código já esta com a tipagem correta, bastaria rodar o npm run start apóes configurar o package.json com o comando tsc

// c) O arquivo já está na página src, o que determina esses caminhos são as seguintes configurações no tsconfig.json:
// "outDir": "./build", 
// "rootDir": "./src", 

// d) Executando o comando tsc sem parâmetros, que converte todos os arquivos com a extensão .ts que encontrar.