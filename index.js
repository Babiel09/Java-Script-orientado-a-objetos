class Cliente{
    
    nome 
    cpf
    
}

//Criando a conta corrente:

class ContaCorrente{

    agencia
    #saldo


//Criando metodos:

saque(valor){
    if(this.#saldo >= valor){
        this.#saldo -= valor
        }
    }  

    depositar(valor){
    if(valor >= 0){
        this.#saldo += valor
    }else if(valor < 0){
        console.log('Já era fi "try again".')
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

cliente1conta.depositar(400)
cliente2conta.depositar(4000)







console.log(cliente1conta.saldo)
console.log(cliente2conta.saldo)
