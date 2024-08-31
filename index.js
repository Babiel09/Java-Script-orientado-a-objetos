class Cliente{
    constructor(nome, cpf){
    this.nome = nome,
    this.cpf = cpf
    }
}

//Criando a conta corrente:

class ContaCorrente{
    constructor(agencia, saldo){
    this.agencia = agencia;
    this.saldo = saldo;
    }

//Criando metodos:

saque(valor){
    if(this.saldo >= valor){
        this.saldo -= valor
        }
    }  
}




const cliente1 = new Cliente()

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

//Add ao cliente1 a conta corrente:

const cliente1conta = new ContaCorrente()
cliente1conta.agencia = 1001;
cliente1conta.saldo = 1000;

const cliente2 = new Cliente()

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

//Fazendo a mesma coisa com o cliente2:

const cliente2conta = new ContaCorrente()

cliente2conta.agencia = 1001;
cliente2conta.saldo = 1000;

cliente1conta.saque(400)
cliente2conta.saque(4000)







console.log(cliente1conta.saldo)
console.log(cliente2conta.saldo)
