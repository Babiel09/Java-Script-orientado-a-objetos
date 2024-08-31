//Importando os clientes e a contacorrente!:

import {Cliente} from './cliente.js'

import {ContaCorrente} from './Conta.js'




const cliente1 = new Cliente()

cliente1.nome = "Ricardo"
cliente1.cpf = 11122233309
cliente1.cidade = 'BH'

//Add ao cliente1 a conta corrente:

const cliente1conta = new ContaCorrente()
cliente1conta.agencia = 1001;
cliente1conta._saldo = 0
cliente1conta.cliente = 'Ricardo'
cliente1conta.depositar(6000)

const cliente2 = new Cliente()
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.cidade = 'Roraima'

//Fazendo a mesma coisa com o cliente2:

const cliente2conta = new ContaCorrente()

cliente2conta.agencia = 1001;
cliente2conta._saldo = 1000
cliente2conta.cliente = 'Alice'


//Trasnferindo money $:

cliente1conta.transferir(124, cliente2conta)


//const valorsacado = cliente1conta.sacar(200)


//Testando pra ver se tudo deu certo:
console.log(cliente1conta)
console.log(cliente2conta)