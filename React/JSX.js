// =================================================== REACT JSX =========================================================
// JSX significa Javascript em xml  
// JSX nos permite escrever html em react
// O JSX torna mais fácil de escrever e adicionar html em react

// Aqui estão dois exemplos. O primeiro usa JSX e o segundo não:

const myElement = <h1>I love JSX</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
console.log(myElement);

// Será exibido um h1 com "I love JSX"

const myElement02 = React.createElement('h1', {}, 'I do not use JSX!');

const root02 = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement02);

// No primeiro exemplo, o jsx nos permite escrever html diretamente no código javascript
// JSX é uma extensão da linguagem JavaScript baseada em ES6 e é traduzida para JavaScript regular em tempo de execução.



// =================================================== EXPRESSOES ==========================================================
// No JSX você pode escrever expressoes dentro de chaves {}
// Pode sr uma variável ou propriedade React ou qualquer outra expressão Javascript válida
// O JSX executará a expressão e retornará o resultado:
const elementNumber = <h1>  React is {5 + 5} times better with JSX</h1>



// ================================================== BLOCO DE HTML ===========================================================

// Para escrever grandes blocos de html, coloque entre parenteses
const elementHTMl = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );

// O código HTML deve ser agrupado em UM elemento de nível superior.
// Portanto, se você gosta de escrever dois parágrafos, deve colocá-los dentro de um elemento pai, como um divelemento.

const elementDiv = (
    <div>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </div>
  );



// ================================================== CLASSNAME ============================================================
// Quando o JSX é renderizado, ele traduz className atributos em class atributos.
// Use o atributo classNameem vez de classno JSX:

const elementClassName = <h1 className="myclass">Hello World</h1>;



// ============================================== CONDICIONAL - IF =========================================================
// O react suporta 'if' instruções, mas não dentro do JSX
// Para poder usar o instruções condicionais no JSX, você deve colocar as instruções fora do JSX
// ou usar uma expressão ternária

// Opção 01 - escreva "Olá" se x for menor que 10, caso contrário, "Adeus":

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const elementFora = <h1>{text}</h1>;

// Opção 02 - usar expressão ternária
const x02 = 5;

const elementTernario = <h1>{(x)< 10 ? "Hello" : "Goodbye"}</h1>


