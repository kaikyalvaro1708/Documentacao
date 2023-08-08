// Aliases e interfaces permitem que os tipos sejam facilmente compartilhados
// entre diferentes variáveis/objetos

// ========================== ALIASES TYPE =================================
// Permitem definir tipos com um nome personalizado
// Aliases podem ser usados para tipos mais complexos como objetos e arrays

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2023
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

// =========================== INTERFACES ===================================
// As interfaces são semelhantes aos aliases de tipo, exceto que se 
// aplicam apenas a object tipos. Servem como rascunho

interface Rectangle{
    height:number,
    width: number
}

// extends = significa que você está criando uma nova interface copiando a original, mas sendo novo
interface ColorRed extends Rectangle{
    color: string
}

const colorRed: ColorRed ={
    height: 20,
    width: 10,
    color: 'red'
}
