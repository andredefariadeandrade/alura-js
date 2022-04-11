class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo = +valor;
    }

    getSaldo() {
        console.log(this.saldo)
    }
}

const andre = new Cliente('andre', 'a.com', '123', 100)
andre.getSaldo();
console.log(andre)