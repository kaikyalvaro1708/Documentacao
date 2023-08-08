// ================================= REACT RENDER ==============================
// o objetivo do react é redenrizar HTML em uma página web
// React renderiza HTML para a página da web usando uma função chamada createRoot()e seu método render().

// A createRoot() função deve receber um argumento, um elemento HTML
// O objetivo da função é definir o elemento HTMl onde um componente React deve ser exibido

// ------------------ RENDER
// O render()método é então chamado para definir o componente React que deve ser renderizado.

// Mas renderizar onde?

// Existe outra pasta no diretório raiz do seu projeto React, chamada "public". Nesta pasta, há um index.htmlarquivo.

// Você notará um único <div> no corpo deste arquivo. É aqui que nosso aplicativo React será renderizado.

// ------------------- Ex:Exiba um parágrafo dentro de um elemento com o id "root":

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);

// O resultado é exibido no <div id="root">elemento:

<body>
  <div id="root"></div>
</body>