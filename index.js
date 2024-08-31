//Importando os clientes e a contacorrente!:

import {Cliente} from './cliente.js'

import {ContaCorrente} from './Conta.js'




//Add ao cliente1 a conta corrente:

const cliente1conta = new ContaCorrente()
cliente1conta.agencia = 1001;
cliente1conta._saldo = 0
cliente1conta.cliente = new Cliente()
cliente1conta.nome = "Ricardo"
cliente1conta.cpf = 11122233309
cliente1conta.cidade = 'BH'
cliente1conta.depositar(6000)


//Fazendo a mesma coisa com o cliente2:
        //objeto:
const cliente2conta = new ContaCorrente()


//Referência ao objeto:
cliente2conta.agencia = 1001;
cliente2conta._saldo = 1000
cliente2conta.cliente = new Cliente()
cliente2conta.nome = "Alice";
cliente2conta.cpf = 88822233309;
cliente2conta.cidade = 'Roraima'


//Trasnferindo money $:

cliente1conta.transferir(900, cliente2conta)


//const valorsacado = cliente1conta.sacar(200)


//Testando pra ver se tudo deu certo:
console.log(cliente1conta)