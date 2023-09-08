// ======================================= O que é uma Promise ===================================================
// Uma promise é um objeto que representa um valor futuro ou uma falha em uma operação assíncrona.
// ELa possui três estados principais:

//Pendente(Pending): Estado inicial, quando a operação ainda está em andamento 
//Resolvida(Fulfilled): Quando a operação é bem sucedida e retorna um valor
//Rejeitada(Rejected): Quando a operação falha e retorna um valor(um erro)

//Criando uma promise:
const myPromise = new Promise((resolve, reject) =>{
    // Simulando uma operação assíncrona que demora 2 segundos
    setTimeout(()=>{
        const sucesso = true; // Altere para false para simular um erro
        if(sucesso){
            resolve("Operação bem-sucedida") // Resolvendo a Promise com um valor
        }else{
            reject("Algo deu errado") // Rejeitando a Promise com um motivo de erro
        }
    }, 2000)
});

// A Promise é criada com um construtor que recebe uma função executora, que por sua vez recebe dois argumentos: 
// resolve e reject. Esses dois métodos são usados para controlar o estado final da Promise, ou seja, se ela é 
// resolvida com sucesso ou rejeitada com um erro.

// ========================================= Manipulando o resultado da Promise ===================================
// Você pode usar os métodos .then() e .catch() para lidar com o resultado da Promise:

myPromise
    .then(result =>{
        console.log("Resolvido: ", result);
    })
    .catch(error =>{
        console.error("Reijetado: ", error);
    })

// No código acima, usamos .then() para lidar com o valor resolvido da Promise e .catch() para lidar com 
// o motivo de erro se a Promise for rejeitada.

function operacaoAssincrona() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sucesso = true;
        if (sucesso) {
          resolve("Operação bem-sucedida!");
        } else {
          reject("Algo deu errado!");
        }
      }, 2000);
    });
  }
  
  function executarOperacao() {
    operacaoAssincrona()
      .then(resultado => {
        console.log("Resolvido:", resultado);
      })
      .catch(erro => {
        console.error("Rejeitado:", erro);
      });
  }
  
  executarOperacao();

//   ========================================== ASSINCRONAS =======================================================

// async é uma palavra-chave em JavaScript que é usada para criar funções assíncronas. Funções assíncronas são funções
// que trabalham de forma assíncrona, o que significa que elas podem executar operações em segundo plano e não 
// bloqueiam a execução do código subsequente.

// O uso de funções assíncronas, juntamente com a palavra-chave await, torna a manipulação de Promises (operações assíncronas) 
// muito mais fácil de ler e entender, pois torna o código assíncrono parecido com código síncrono.

// Em programação, o código síncrono (ou código sequencial) é aquele que é executado linha por linha, de cima para baixo.

async function myFunction(){
    try{
        const resolve = await operacaoAssincrona();
        console.log("Resultado da operação assíncrona: ", resolve)
    }catch(erro){
        console.log("Erro na operação assíncrona: ", erro)
    }
}