const apresentacao = (nome: string, data: string) =>{
    const dataSeparada: string[] = data.split('/');
    return `Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}`
}

console.log(apresentacao("Diego", "04/07/1993"))