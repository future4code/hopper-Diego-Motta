const comparaNumeros = (x: number, y: number) => {
    const soma = x + y;
    const subtracao = x - y;
    const multiplicacao = x * y;
    let comparacao;
    if(x>y){
        comparacao = x
    } else if(y>x){
        comparacao =  y
    }else{
        comparacao = 'Os dois são iguais'
    }
    console.log(`
    A soma desses números é ${soma};
    A subtração desses números é ${subtracao};
    A multiplicação desses números é ${multiplicacao};
    O maior deles é: ${comparacao}`)
}

comparaNumeros(Number(process.argv[2]), Number(process.argv[3]))