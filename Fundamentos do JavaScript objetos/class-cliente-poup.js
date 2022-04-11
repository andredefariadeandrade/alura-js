class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor;
    }

    getSaldo() {
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoup) {
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup;
    }

    depositarPoup(valor) {
        this.saldoPoup += valor
    }
}

const nome = new ClientePoupanca('anderson', 'hm@gmail', '123', 100, 200);
console.log(nome)

nome.depositar(10)
nome.depositarPoup(1000);

console.log(nome)