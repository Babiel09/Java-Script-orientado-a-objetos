//Importando os clientes e a contacorrente!:

import {Cliente} from './cliente.js'

import {ContaCorrente} from './Conta.js'



const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 12345233309;
cliente1.cidade = 'Belo-Horizonte'



//Add ao cliente1 a conta corrente:

const cliente1conta = new ContaCorrente()
cliente1conta.agencia = 1001;
cliente1conta._saldo = 900000000000000
cliente1conta._cliente = cliente1


const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.cidade = 'Xique-Xique'


//Fazendo a mesma coisa com o cliente2:
        //objeto:
const cliente2conta = new ContaCorrente()


//Referência ao objeto:
cliente2conta.agencia = 1001;
cliente2conta._saldo = 0
cliente2conta._cliente = cliente2



//Trasnferindo money $:

cliente1conta.transferir(9000, cliente2conta)


//const valorsacado = cliente1conta.sacar(200)


//Testando pra ver se tudo deu certo:
console.log(cliente1conta._saldo)
console.log(cliente2conta)