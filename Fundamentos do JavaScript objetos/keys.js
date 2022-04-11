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

function oferecerSeguro(obj) {
    const propCliente = Object.keys(obj);
    if (propCliente.includes("dependentes")) {
        console.log(`oferta de seguro de vida para  ${obj.nome}`)
    }
}

console.log(Object.values(cliente));
console.log(Object.entries(cliente));

oferecerSeguro(cliente)