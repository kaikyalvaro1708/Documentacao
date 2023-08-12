// ========================================= ESTRUTURAS CONDICIONAIS ============================================
// As estrturas condicionais  permitem que você execute diferente blocos de código com base em condições
// específicas. Existem principalmente duas formas de estruturas condicionais em JS: o "if" e "switch"

// ========================================== IF e ELSE =====================================================
// é usado quando você precisa tomar decisões com base em uma única condição

const idade = 20;

if (idade >= 18){
    console.log("Você é maior de idade");
}

// If com else
const idade02 = 15;

if(idade02 >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}

// if com else if e else
const nota = 85;

if (nota>=90){
    console.log("A nota é A")
}else if(nota>=80){
    console.log("A nota é B")
}else if(nota>=70){
    console.log("A nota é C")
}else{
    console.log("A nota é D ou inferior")
}


// ============================================= SWITCH =======================================================
// O switch é usado para avaliar uma expressão e executar diferentes ações com base nos valores possíveis da expressão. 
// É especialmente útil quando você está comparando uma única variável com múltiplos valores possíveis

const diaSemana = "Quarta";

switch(diaSemana){
    case "segunda":
        console.log("Hoje é segunda-feira")
        break;
    case "terça":
        console.log("Hoje é terça-feira");
        break;
    case "quarta":
        console.log("Hoje é quarta-feira");
        break;
    case "quinta":
        console.log("Hoje é quinta-feira");
        break;
    case "sexta":
        console.log("Hoje é sexta-feira");
        break;
    default:
        console.log("Fim de semana!");
}

const numberCard = 90;

switch(numberCard){
    case 100:
        console.log("A carta é A.")
        break;
    case 90:
        console.log("A carta é B.");
        break;
    default:
        console.log("A carta é C ou inferiror.");
}

let trueOrFalse = "Real Madrid tem 15 champions"
trueOrFalse = true;

// com switch
switch(trueOrFalse){
    case true:
        console.log("Isso é verdade!")
        break;
    default:
        console.log("Isso é mentira!")
}

// com if
if (trueOrFalse === true){
    console.log("Isso é verdade!");
}else{
    console.log("Isso é mentira!");
}