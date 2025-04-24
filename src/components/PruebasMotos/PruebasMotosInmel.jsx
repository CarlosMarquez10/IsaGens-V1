import React from "react";
import Navar from "../Navar";
import "./PruebasMotosInmel.css";

// Declaración de la variable miVariable
const miVariable = 'https://74pbcspn-3008.use2.devtunnels.ms/buscar';

// Definición del componente FormMain y sus funciones fuera de PruebMedidor
const FormMain = () => {
  return (
    <iframe className='myiframe' src={miVariable} width="100%" height="600px">
      Tu navegador no soporta iframes.
    </iframe>
  );
};

export const PruebasMotosInmel = () => {
  return (
    <>
      <Navar />
      <main>
        {/* Uso del componente FormMain */}
        <FormMain />
      </main>
    </>
  );
};
