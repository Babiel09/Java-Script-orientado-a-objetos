export class Cliente{

    constructor(nome, cpf, cidade){
    
    this.nome = nome 
    this._cpf = cpf
    this.cidade = cidade
    }
    get cpf(){
        return this._cpf
    }
    
}