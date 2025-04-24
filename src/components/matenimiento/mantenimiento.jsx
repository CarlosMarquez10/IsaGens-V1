import React from 'react';
import Navar from "../Navar";
import '../Card/matenimiento.css'


// Definición del componente PruebMedidor
function mantenimientoInfo() {
  return (
    <>
      <Navar/>
      <main>
         <div className="container-matenimiento">
            <h2>Mantenimiento</h2>
            <p>Esta es la sección de mantenimiento</p>
         </div>
      </main>
    </>
  );
}

export default mantenimientoInfo;

