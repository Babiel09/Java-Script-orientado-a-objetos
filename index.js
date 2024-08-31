//Importando os clientes e a contacorrente!:

import {Cliente} from './cliente.js'

import {ContaCorrente} from './Conta.js'




const cliente1 = new Cliente()

cliente1.nome = "Ricardo"
cliente1.cpf = 11122233309

//Add ao cliente1 a conta corrente:

const cliente1conta = new ContaCorrente()
cliente1conta.agencia = 1001;
cliente1conta._saldo = 1000

const cliente2 = new Cliente()
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

//Fazendo a mesma coisa com o cliente2:

const cliente2conta = new ContaCorrente()

cliente2conta.agencia = 1001;
cliente2conta._saldo = 1000




const valorsacado = cliente1conta.sacar(50)


//Testando pra ver se tudo deu certo:
console.log(valorsacado)
console.log(cliente1conta)