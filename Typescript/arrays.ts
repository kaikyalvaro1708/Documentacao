//   ======================== ARRAYS =============================
// O typescript tem um jeito específico de usar arrays

const names: string[] = [];
names.push('kaiky') // não terá erros

// READONLY
// A readonly palavra-chave pode impedir que os arrays sejam alterados
const names02: readonly string[] = ['Kaiky'];
// names02.push('Alvaro') - Dará error


// O typescript também pode inferir o tipo de array se ela tiver valores
const numbers = [10, 20, 30];
numbers.push(4);

// numbers.push('2') ERROR
let head: number= numbers[0];

// ======================== TYPES ARRAYS =============================
// Uma tupla é um array tipado com comprimento e tipos predefinidos para cada indice
// Para definir uma tuple, especifique o tipo de cada elemento do array 

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'string']

// READONLY
const ourTuple02: readonly [number, boolean, string] = [10, false, 'string'];
