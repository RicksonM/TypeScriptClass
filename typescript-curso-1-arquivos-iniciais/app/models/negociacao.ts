export class Negociacao{
    #valor;
    #data;
    #quantidade;


    constructor(valor, data, quantidade){
        this.#data = data;
        this.#valor = valor;
        this.#quantidade = quantidade;
    }

    
}