import React from 'react';
import Navar from "../Navar";

// Declaración de la variable miVariable
const miVariable = 'https://74pbcspn-3009.use2.devtunnels.ms/';

// Definición del componente FormMain y sus funciones fuera de PruebMedidor
const FormMain = () => {
  return (
    <iframe className='myiframe' src={miVariable} width="100%" height="600px">
      Tu navegador no soporta iframes.
    </iframe>
  );
};

// Definición del componente PruebMedidor
function Novedad() {
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

export default Novedad;

