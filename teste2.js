function fibonacci(num) {
    let sequencia = [0, 1];
    let next = 1;
    while (next <= num) {
        next = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
        if (next <= num) {
            sequencia.push(next);
        }
        if(next == num) {
            console.log("Está na sequência")
            console.log("Sequência = " + sequencia )
        }
    }
    if(sequencia[sequencia.length -1] < num) {
        console.log("Não está na sequência")
        console.log("Sequência = " + sequencia )
    }
}

fibonacci(34);
fibonacci(35);
fibonacci(8);
