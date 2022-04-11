const cliente = {
    nome: 'andre',
    idade: 22,
    cpf: 123456,
    email: 'an@.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]));