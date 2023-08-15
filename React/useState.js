// ================================== useState =================================
// Permite adicionar estado a componentes funcionais

// O 'useState' é uma função que retorna uma tupla contendo o estado atual 
// e uma função para atualizá-lo.


// importar o hook
import React, {useState} from 'React';

// Declarar o Estado
const [state, setState] = useState(inicialValue);

// state - Variável que armazena o estado atual
// setState - função para atualizar o estado. É importante observar que essa
//  função aceita um argumento que pode ser o novo valor do estado ou função
//  que calcula o novo estado com base no estado anterior. Isso é semelhante 
//  ao this.setState em componente de classe.
// incialValue - valor incial do estado


// Usar o estado
return (
    <div>
      <p>Valor do estado: {state}</p>
      <button onClick={() => setState(newValue)}>Atualizar Estado</button>
    </div>
  );


// ===============================================================================

import React, { useState } from 'React';

export function DayNightToggle() {
  // Passo 2: Declarar o estado inicial como 'Dia'
  const [timeOfDay, setTimeOfDay] = useState('Dia');

  const toggleTime = () => {
    // Atualizar o estado alternando entre 'Dia' e 'Noite'
    setTimeOfDay(prevTime => (prevTime === 'Dia' ? 'Noite' : 'Dia'));
  };

  return (
    <div>
      <p>É {timeOfDay}</p>
      {/* Chamar a função de alternância quando o botão é clicado */}
      <button onClick={toggleTime}>Alternar</button>
    </div>
  );
}




