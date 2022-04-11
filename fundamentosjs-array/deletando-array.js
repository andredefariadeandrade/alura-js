const notas = [10, 7, 8, 5, 10]
console.log(notas);

// deletando valor dentro de um array usando metodo .POP
notas.pop();
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`a média do aluno é ${media}`);

