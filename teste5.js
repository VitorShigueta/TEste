function inverter(string) {
    const tempString = string.split("");
    let resultado = [];
    for(let index = tempString.length - 1; index >= 0; index--) {
        resultado  += tempString[index];
    }
    return resultado
}

//Não estava claro se precisava mudar o tamanho para minúsculas e maiúsculas por isso deixei do jeito que estava
console.log(inverter("String"));