const cliente = {
    nome: 'andre',
    idade: 22,
    cpf: 123456,
    email: 'an@.com',
    fones: ['123', '1234'],
    dependentes: [{
        nomes: 'Ana',
        parentesco: 'noiva',
        dataNas: '08/10/1999'
    }]
}

cliente.dependentes.push({
    nome: 'samia',
    parentesco: 'filha',
    dataNas: '01/02/2022'
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(d => d.dataNas === '01/02/2022')
console.log(filhaMaisNova[0].nome);