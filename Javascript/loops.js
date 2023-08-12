// ========================================= ESTRUTURAS DE REPETIÇÃO ===========================================
// =========================================    FOR ===============================================================
// O for é útil quando você sabe exatamente quantas vezes deseja repetir um bloco de código. Consiste em 3 etapas:

// Inicialização: Está parte é executada apenas uma vez no início
// Condição: A condição é verificada antes de cada iteração. Se a condição for verdadeira, o bloco de código
//  dentro do for será executado; caso contrário, o loop será encerrado.
// Atualização: Após cada iteração bem-sucedida, a atualização é executada,
//  permitindo que você modifique a variável de controle.

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// const nomesAlunos = ['Ana', 'Carlos', 'Felipe', 'Adriano', 'Rodrigo', 'Emerson', 'Leticia']

// for(let nomeAluno = 0; nomeAluno <nomesAlunos.length; nomeAluno++){
//     setTimeout(()=>{
//         console.log(nomesAlunos[nomeAluno])
//     },2000)
// }

// ============================================== WHILE ========================================================
// O "while" é uma estrutura de repetição que executa um bloco um bloco de código enquanto a condição 
// específica for verdadeira. A condição é verifica antes de cada iteração.

let contador = 0;

while (contador < 5){
    console.log(contador);
    contador++;
}


// =========================================== DO - WHILE =======================================================
// O do-while é semelhante ao while, mas a diferença é que o bloco de código dentro do do é executado pelo menos 
// uma vez, antes que a condição seja verificada. Isso é útil quando você deseja que o bloco seja executado 
// pelo menos uma vez, independentemente da condição.

let x = 0;

do{
    console.log(x)
    x++;
}while(x < 100);

// ======================================== FOREACH ==============================================================
// O método forEach é usado para iterar sobre os elementos de um array.
// Ele não retorna um novo array, apenas executa uma função (callback) para cada elemento.
// É útil quando você deseja realizar uma operação em cada elemento, mas não precisa criar um novo array.
// A principal finalidade do forEach é executar um código para cada elemento do array.

const tripulacao = ['Luffy', 'Zoro', 'Sanji', 'Nami', 'Usopp', 'Chopper', 'Nico Robin', 'Franklin', 'Brook']
tripulacao.forEach((tripulantes)=>{
    console.log(tripulantes);
})

// ====================================== Método MAP ==============================================================
// A principal finalidade do map é transformar os elementos do array e criar um novo array com os resultados.
// É útil quando você deseja criar um novo array com base nas transformações dos elementos do array original.

const numeros = [10, 20, 30, 40, 50];
const numeroNovos = numeros.map((numero)=>{
    return numero * 5;
});
console.log(numeroNovos)


const primeiroNome = ['Kaiky', 'Flavin', 'Roberto', 'Neymar', 'Rodrigo'];
const segundoNome = ['Alvaro', 'Do Pneu', 'Firmino', 'Junior', 'Faro'];

setTimeout(()=>{
        const nomesESobrenomes = primeiroNome.map((novosNomes, index)=>{
        return `Primero nome: ${novosNomes} | Segundo nome: ${segundoNome[index]}`;

    }, 2000)
    console.log(nomesESobrenomes);
}) 

const usuarios =[
    {
        nome: 'Kaiky',
        idade: '18 anos',
        cpf: '5858585885858',
        telefone: '95970-6834'
    }
]

usuarios.forEach((usuario)=>{
    console.log(usuario)
})