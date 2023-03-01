const faturamentos = [ {"SP": 67836.43}, {"RJ": 36678.66}, {"MG": 29229.88}, {"ES": 27165.48}, {"Outros": 19849.53}]

let soma = 0;
for(let index = 0; index < faturamentos.length; index++) {
    soma = soma + parseFloat(Object.values(faturamentos[index]));
}

for(let index = 0; index < faturamentos.length; index++) {
    let percentual  = 0;
    percentual = (100 / soma) * parseFloat(Object.values(faturamentos[index]));
    console.log(`O percentual de ${ Object.keys(faturamentos[index])} é ${percentual.toFixed(2)}%`)
}
    
