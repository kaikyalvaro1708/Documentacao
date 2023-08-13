// ============================================= THROW ===================================================================
// É usado para lançar explicitamente uma exceção, ou seja, um erro, em parte do código que acontece
// algo inesperado. Isso permite que você indique que algo deu errado e precisa ser tratado

a = 5;
b = 10;

function dividir (a, b){
    if(b === 0){
        throw new Error("Divisão por zero não permitido");
    }
    return a/b;
}

// ========================================== TRY...CATCH =========================================================
// O bloco try é usado para envolver um trecho de código onde você espera que uma exceção possa ocorrer. Ele permite 
// que você continue a execução mesmo que uma exceção seja lançada, desde que você tenha um bloco catch correspondente.

try{
    const resultado = dividir(10, 0);
    console.log(resultado);
} catch (erro){
    console.log(erro.message) //pega do Throw
}

// catch: O bloco catch é usado para capturar exceções que foram lançadas dentro do bloco try. 
// Ele fornece uma variável onde você pode acessar a informação sobre o erro que ocorreu.


// ============================================ FINALLY ========================================================
// O bloco finally é opcional e é usado para definir um trecho de código que será executado
// independentemente se uma exceção ocorrer ou não.

try {
    // Código que pode lançar exceções
} catch (erro) {
    // Tratamento do erro
} finally {
    // Código a ser executado sempre
}

function verificarIdade(idade) {
    if (idade < 0) {
        throw new Error("A idade não pode ser negativa.");
    }
    if (idade < 18) {
        console.warn("É menor de idade.");
    } else {
        console.log("É maior de idade.");
    }
}

try {
    verificarIdade(-5);
} catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
}
