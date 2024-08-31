//Criando a conta corrente:



export class ContaCorrente{
    _cliente
    set cliente(novoValor){
        if(novoValor = this._cliente){
        this._cliente = novoValor
        }
    }

    //Criando acessor para acessar explicitamente o valor do '_cliente'
    get cliente(){
        return this._cliente
    }

    agencia

    _saldo = 1000
    //Criando um acessor para poder pegar de maneira separada o saldo de um determinado cliente
    //Que foi definido dentro do index.js
    get saldo(){
        return this._saldo
    }


//Criando metodos:

sacar(valor){
    if(this._saldo >= valor){
        this._saldo -= valor
        return 'Você sacou: ',valor
        }
    }  

depositar(valor){
    if(valor >= 0){
        this._saldo += valor
        } else if(valor <= 0){
            return
        }
    }
    //Criando método de transferência:
    transferir(valor, conta){
        if(valor >= 1){
            const valorsacado = this.sacar(valor)
        conta.depositar(valorsacado)
        }else if( transferir.valor > this._saldo){
            console.log('Você não pode transferir um valor que você não tem')
        }
    }
}

