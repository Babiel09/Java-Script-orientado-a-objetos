//Importando os clientes e a contacorrente!:

import {Cliente} from './cliente.js'

import {ContaCorrente} from './Conta.js'



const cliente1 = new Cliente("Ricardo", 12345233309, 'Belo-Horizonte');

//Add ao cliente1 a conta corrente:

const cliente1conta = new ContaCorrente(cliente1, 1001, 0)
cliente1conta.depositar(25800000)

const cliente2 = new Cliente("Alice",8822233309,'Xique-Xique');



//Fazendo a mesma coisa com o cliente2:
        //objeto:
const cliente2conta = new ContaCorrente(cliente2, 1001,  0)


//Trasnferindo money $:

cliente1conta.transferir(1, cliente2conta)

//const valorsacado = cliente1conta.sacar(200)


//Testando pra ver se tudo deu certo:
console.log(cliente1conta)
console.log(cliente2conta)
console.log(ContaCorrente.numeroDeContas)