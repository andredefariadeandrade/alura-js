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
        },
        {
            nome: 'samia',
            parentesco: 'filha',
            dataNas: '01/02/2022'
        }
    ],
    saldo: 100,

    depositar: function(valor) {
        return this.saldo += valor;
    }


}


console.log(cliente.saldo);

cliente.depositar(500);
console.log(cliente.saldo);