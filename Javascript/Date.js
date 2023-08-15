// ====================================== Objeto Date e Time =================================================
// O objeto Date é usado para trabalhar com datas e horários em Javscript

// Criar um objeto Date com uma data específica (ano, mês, dia)
const currentDate = new Date();
console.log(currentDate)

// Criar um objeto Date com uma data específica (ano, mês, dia)
const specificDate = new Date (2004, 7, 17); // O mês começa em 0
console.log(specificDate);

// Criar um objeto Date com data e hora específicas
const dateTime = new Date (2004, 7, 17, 12, 30);
console.log(dateTime)

// ================================== MANIPULÇÃO DE DATAS ===================================================
// É possível realizar várias operações de manipulação em objetos Date, como adicionar ou subtrair dias, meses e anos.
console.log(`-`.repeat(30));

const  currentDate02 = new Date();
currentDate02.setDate(currentDate.getDate()+ 7); //adiciona 7 dias

const futureDateMonth = new Date();
futureDateMonth.setMonth(futureDateMonth.getMonth()+ 2);

const futureDate = new Date();
futureDate.setFullYear(futureDate.getFullYear()+ 1); //adiciona mais um ano

console.log(`${currentDate02} | ${futureDateMonth} | ${futureDate}`);


// =================================== FORMATAÇÃO DE DATAS ====================================================
// O JavaScript não possui formatação de datas nativamente, mas você pode criar suas próprias 
// funções de formatação ou usar bibliotecas como o date-fns ou o moment.js.

// console.log(`-`.repeat(30));

// // npm install date-fns
// import {format} from "date-fns";

// const currentDate03 = new Date();
// const formattedDate = format(currentDate03, "dd/MM/yyyy HH:mm:ss");
// console.log(formattedDate);


// ================================ DIFERRENÇAS DE TEMPO ========================================================
// Você pode calcular a diferença entre duas datas para obter a quantidade de tempo decorrido.
console.log(`-`.repeat(30));

// const startDate = new Date(2023, 0, 1);
// const endTime= new Date();
// const timeDifference = endTime - startDate;
// console.log(`A diferença de tempo é de: ${timeDifference}`); //Diferença em milisegundos

const startDate = new Date(2004, 7, 17);
const endDate = new Date();
const timeDifference = endDate - startDate; // Diferença em milissegundos

// Convertendo milissegundos para dias, horas, minutos e segundos
const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

// Formatando a saída
const formattedTimeDifference = `A diferença de tempo é de: ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;

console.log(formattedTimeDifference);



// ================================= MANIPULAÇÃO DE HORÁRIOS ==================================================
// O objeto Date também pode ser usado para trabalhar com horários.
console.log(`-`.repeat(30));

const currentTime = new Date();
const hours02 = currentTime.getHours();
const minutes02 = currentTime.getMinutes();
const seconds02 = currentTime.getSeconds();

console.log(currentTime);

// ================================= DATAS E HORAS PERSONALIZADAS ==================================================
// Você também pode definir datas e horários personalizados.
console.log(`-`.repeat(30));

const customDate = new Date();
customDate.setHours(3);
customDate.setMinutes(10);
customDate.setSeconds(20);

console.log(customDate);


// ========================================== BIBLIOTECA =====================================================

// Bibliotecas Alternativas:
// Lembre-se de que, embora a manipulação básica de datas seja possível usando objetos Date, bibliotecas como 
// o date-fns, moment.js ou recursos em frameworks como o luxon podem oferecer funcionalidades mais avançadas 
// e formatação simplificada.

// Exemplo usando moment.js (descontinuado, use com cautela):

// const moment = require("moment");

// const currentDate05 = moment();
// const formattedDate = currentDate05.format("DD/MM/yyyy HH:mm:ss");
// console.log(formattedDate);

// A manipulação de tempo e data é uma parte importante do desenvolvimento web, especialmente quando você
//  precisa lidar com agendamento, exibição de informações temporais e outras funcionalidades relacionadas 
//  ao tempo. Certifique-se de entender os métodos e as limitações dos objetos Date e considere o uso de 
//  bibliotecas especializadas para tarefas mais complexas.