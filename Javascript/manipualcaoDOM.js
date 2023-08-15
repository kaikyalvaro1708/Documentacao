// ===================================== MANIPULÇÃO DO DOM =================================================

// =============================== Seleção de Elementos HTMl
// É possível selecionar os elementos através de suas classes, tags e outros atributos

const elementsWithClass = document.getElementsByClassName('my-class'); // por class
const paragraph = document.getElementsByTagName("p"); // pela tag


// =============================== Modificar atributos e classes
// É possível alterar e classes de elementos para modificar sua aparência e comportamente

const myImage = document.querySelector(".my-image");

// Alterar o atributo 'src' de uma imagem
myImage.src = "nova-imagem.jpg";

//adicionar e remover classes
myImage.classList.add('bordered');
myImage.classList.remove('old-class');


// ===================================== Manipulação de eventos
// Além do exemplo de addEventListener, você pode também remover event listeners usando removeEventListener.

const myButton = document.querySelector(".my-button");

function handClick(){
    console.log("Botão foi clicado");
}

myButton.addEventListener("click", handClick);

//remover o event listener
myButton.removeEventListener('click', handClick);


// ================================== Trabalhando com Pais e Filhos
// Você pode acessar os elementos pai e filhos de um elemento e percorrer a árvore DOM.
const parentElement = document.querySelector('.parent');
const childElements = parentsElement.children;

for(const child of childElements){
    console.log(child.textContent);
}


// ================================== Clonagem de elementos
// Você pode clonar elementos existentes no DOM e inseri-los em outras partes da página.

const originalElement = document.querySelector(".original");
const clonedElement = originalElement.cloneNode(true); // true para clonar filhos também

const targetElement = document.querySelector(".target");
targetElement.appendChild(clonedElement);


// ================================== Remoção de Elementos
// Você pode remover elementos do DOM usando o método remove().
const elementToRemove = document.querySelector(".to-remove");
elementToRemove.remove();


// ================================== Estilos inline vs Estilos CSS
// A manipulação de estilos inline pode ser feita usando a propriedade 'style'

const myElement = document.querySelector('.my-element');

//Estilo inline
myElement.style.backgroundColor = 'red';

//Usando CSS
myElement.classList.add('highlight');


// Recursos do DOM:
//     O DOM oferece muitos outros recursos, como criar e manipular nós de texto, manipulação de formulários,
// e muito mais. É importante consultar a documentação oficial para uma compreensão completa das capacidades 
// do DOM.
//     Lembre-se de que, ao manipular o DOM, é importante considerar a performance. Múltiplas manipulações do DOM 
// podem ser custosas, então agrupe as modificações sempre que possível para evitar reflows desnecessários.
//     Além disso, considere usar bibliotecas como jQuery ou estruturas como React, Angular ou Vue.js, 
// que abstraem muitas das complexidades da manipulação direta do DOM e oferecem padrões mais eficientes 
// de manipulação e atualização.

