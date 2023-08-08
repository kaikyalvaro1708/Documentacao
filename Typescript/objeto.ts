// ================= Definindo os tipos de typescript =================

// objeto com duas inferencias
const user = {
    name: 'nome aqui',
    id: 0
}
// Você pode também usar o comando 'interface' para fazer um rascunho do objeto
interface User{
    name: String;
    id: number;
}

// Você pode mudar o formato do objeto js e dizer que é de outro tipo
const userExample: User = {
    name : 'Nome aqui',
    id: 0
}

// Você também pode usar interfaces declarando com classes
class UserAccount{
    name: String;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}