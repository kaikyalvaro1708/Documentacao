// ============================ STATE (Estado) ===============================
// O state é um conceito que permite que um componente matenha e atualize seus
//  próprios dados internos. Isso é crucial para criar componentes interativos dinâmicos. 

// ==================== STATE EM COMPONENTES DE CLASSES ======================
// Em componentes de classe, o estado é gerenciado usando a propriedade state. 

import React, { Component } from 'React';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () =>{
        this.setState(prevState =>({
            count: prevState.count + 1
        }));
    };

    render(){
        return(
            <div>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.incrementCount}>Incrementar</button>
            </div>
        )
    };
}

export default Counter;

// - import React, { Component } from 'react';: Importa o React e a classe Component.
// - class Counter extends Component { ... }: Define a classe do componente Counter.
// - No construtor (constructor(props) { ... }), estamos inicializando o estado com count definido como 0.
// - incrementCount é um método que usa setState para atualizar o valor de count quando o botão é clicado.
// - O método render() define o que será renderizado na interface. Exibe o valor de count e um botão que chama incrementCount quando clicado.


// ============================ STATE USANDO HOOKS ============================
// É possível usar o estado em componentes funcionais usando o 'useState'

import React, {useState} from 'React';

export function Counter02 (){
    const[count, setCount] = useState(0);

    const incrementCount02 = () =>{
        setCount(prevCount => prevCount + 1);
    };

    return(
        <div>
            <p>Contagem: {this.state.count}</p>
            <button onClick={this.incrementCount}>Incrementar</button>
        </div>
    )
}

// Aqui, o 'useState' é um hook que retorna uma variável ('count') e uma função
// ('setCount') para atualizá-la. O valor inicial do estado é definido no 'useStatus'.
// Sempre use o valor retornando pela função do hook para atualizá-la o estado, pois isso
// Garante que as atualizações sejam feitas de forma imutável e reativa.

