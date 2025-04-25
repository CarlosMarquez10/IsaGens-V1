import React from 'react';
import Navar from '../Navar';
import './Motocheck.css';

const Motocheck = () => {
  return (
    <>
      <Navar />
      <div className="construction-container">
        <div className="construction-content">
          <h1>🚧 Sitio en Construcción 🚧</h1>
          <p>Estamos trabajando para brindarte la mejor experiencia.</p>
          <p>¡Vuelve pronto!</p>
          <div className="construction-animation">
            <div className="gear"></div>
            <div className="gear"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Motocheck;
