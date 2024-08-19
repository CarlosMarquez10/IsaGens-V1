import React from 'react';
import "./ModalidadInspensiones.css";

export const ModalidadInspensiones = ({ inspectorData }) => {


  // Obtener los datos de las inspecciones anteriores y posteriores
  const cantidadInspAnterior = inspectorData?.CantidadInspPosterior || 0;
  const cantidadInspPosterior = inspectorData?.CantidaInspAnterior || 0;


  return (
    <div className="slide">
      <div className="titleAtentos">
        <h2>Modalidad de Inspeción</h2>
      </div>

      <div className="insp-accion">
        <table>
          <thead>
            <tr>
              <th>Regional</th>
              <th>Posterior</th>
              <th>Inmediata</th>
              <th className='tbMOdalidad' >Total</th>
            </tr>
          </thead>
          <tbody>
            <tr key={1}>
              <td>{inspectorData?.Proceso || 'Proceso desconocido'}</td>
              <td>{cantidadInspPosterior}</td>
              <td>{cantidadInspAnterior}</td>
              <td>{cantidadInspPosterior + cantidadInspAnterior}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

