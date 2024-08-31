class Cliente{
    constructor(nome, cpf, agencia, saldo){
    this.nome = nome,
    this.cpf = cpf,
    this.agencia = agencia,
    this. saldo = saldo
    }
}

const cliente1 = new Cliente()

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente()

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.group(cliente1)
console.group(cliente2)