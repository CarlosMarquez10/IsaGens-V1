import React from 'react';
import Navar from '../Navar';
import FloatingMenu from '../FloatingMenu/FloatingMenu';
import './Motocheck.css';

const Motocheck = () => {
  return (
    <>
      <Navar />
      <FloatingMenu />
      <div className="motocheck-container">
        {/* Aquí va el contenido principal de Motocheck */}
      </div>
    </>
  );
};

export default Motocheck;
