import React from 'react';
import Navar from "../Navar";

// Declaración de la variable miVariable
const miVariable = 'https://medidorprueba.web.app/';

// Definición del componente FormMain y sus funciones fuera de PruebMedidor
const FormMain = () => {
  return (
    <iframe className='myiframe' src={miVariable} width="100%" height="600px">
      Tu navegador no soporta iframes.
    </iframe>
  );
};

// Definición del componente PruebMedidor
function PruebMedidor() {
  return (
    <>
      <Navar/>
      <main>
        {/* Uso del componente FormMain */}
        <FormMain />
      </main>
    </>
  );
}

export default PruebMedidor;

