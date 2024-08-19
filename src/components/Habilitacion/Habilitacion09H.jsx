import React from "react";
import Navar from "../Navar";
import "./Habilitacion09H.css";

// Declaración de la variable miVariable
const miVariable = 'https://74pbcspn-5500.use2.devtunnels.ms/';

// Definición del componente FormMain y sus funciones fuera de PruebMedidor
const FormMain = () => {
  return (
    <iframe className='myiframe' src={miVariable} width="100%" height="600px">
      Tu navegador no soporta iframes.
    </iframe>
  );
};

export const Habilitacion09H = () => {
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
