import React from 'react';
import './CantidadPorsemana.css'; // Asegúrate de tener este archivo CSS

export const CantidaPorsemana = ({ inspectorData }) => {
  const cantidadInspGeneral = inspectorData?.cantidadInspGeneral || [];

  const semanas = [
    { label: 'Semana 1', key: 'semana_1' },
    { label: 'Semana 2', key: 'semana_2' },
    { label: 'Semana 3', key: 'semana_3' },
    { label: 'Semana 4', key: 'semana_4' },
    { label: 'Semana 5', key: 'semana_5' },
  ];

  const cantidadesPorSemana = semanas.map(({ key }) => {
    const semanaData = cantidadInspGeneral.find(item => item[key]);
    return semanaData ? semanaData[key].cantidad : 0;
  });

  return (
    <div className="slide">
      <div className="titleAtentos">
        <h2>Inspecciones Por Semana</h2>
      </div>

      <div className="insp-accion">
        {/* <div className="regional">
          <strong>Regional:</strong> {inspectorData?.ProyectoSede}
        </div> */}
        <div className="semanas">
          {semanas.map(({ label }, index) => (
            <div key={index} className="semana">
              <div className="semana-label">{label}</div>
              <div className="semana-cantidad">{cantidadesPorSemana[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
