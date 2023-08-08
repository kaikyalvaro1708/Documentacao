// Enum é uma classe especial que representa um grupo de constantes ( variáveis imutáveis)
// Enum vem em dois tipos: string e numeric

// ===================== NUMERIC ENUMS - DEFAULT =============================
enum CardinaDirections{
    North,
    East,
    South,
    West
}
let currentDirections = CardinaDirections.North;
// Por padrão, enums inicializarão o primeiro valor 0e adicionarão 1 a cada valor adicional:

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);

// Você pode atribuir valores numéricos exclusivos para cada valor de enumeração.
// Então os valores não serão incrementados automaticamente:

// ============================= STRINGS ==================================
enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CardinalDirections.North);
  // logs "West"
  console.log(CardinalDirections.West);

// Enums também podem conter strings. Isso é mais comum do que enumerações 
// numéricas, devido à sua legibilidade e intenção.

