const cliente = {
    nome: 'andre',
    idade: 22,
    cpf: 123456,
    email: 'an@.com',
    fones: ['123', '1234']
}

cliente.dependente = {
    nomes: {nome: 'ana', idade: 17},
    parentesco: 'noiva',
    dataNas: '08/10/1999'
}

console.log(cliente.dependente.nomes.nome)