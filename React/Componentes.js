// ============================================== COMPONENTES ========================================================

// componentes são como funções que retornam elementos HTML
// Eles servem ao mesmo propósito que as funções JavaScript, mas trabalham isoladamente e retornam HTML.
// Os componentes vêm em dois tipos, componentes de classe e componentes de função

// =============== Componente class

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

// Um componente de classe deve incluir a extends React.Componentinstrução. Esta instrução cria uma herança para 
// React.Component e dá ao seu componente acesso às funções do React.Component.
// O componente também requer um render()método, este método retorna HTML.

// ============== Componente de função

function Car02() {
    return <h2>Hi, I am a Car!</h2>;
}
// Um componente Function também retorna HTML e se comporta da mesma maneira que um componente Class


// ================================================= PROPS ================================================================
// Os componentes podem ser passados como props, que significa propriedades
// Props são como argumentos de função e você os envia para o componente como atributos

function Car03(props) {
    return <h2>I am a {props.color} Car!</h2>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car03 color="red"/>);