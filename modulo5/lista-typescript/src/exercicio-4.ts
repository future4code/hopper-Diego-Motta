enum Setores {
    marketing = 'marketing',
    vendas = 'vendas',
    financeiro = 'financeiro'
}

type Colaborador = {
    nome: string,
    salário: number,
    setor: Setores,
    presencial: boolean
}

const colaboradores: Colaborador[] = [
	{ nome: "Marcos", salário: 2500, setor: Setores.marketing, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setores.vendas, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setores.financeiro, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setores.marketing, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setores.financeiro, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setores.vendas, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setores.marketing, presencial: true }
]

const buscaSetor = (data: Colaborador[]) => {
    return data.filter(colaboradores => {
        return colaboradores.setor === "marketing" && colaboradores.presencial
    })
}

console.log(buscaSetor(colaboradores))