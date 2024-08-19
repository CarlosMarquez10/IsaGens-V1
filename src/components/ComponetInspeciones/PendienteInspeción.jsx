import React from "react";

export const PendienteInspección = ({ inspectorData }) => {
  // Asegurarte de que Cantidad_PtePorInspecciones existe y es un número
  const cantidadAtentos = inspectorData?.Cantidad_PtePorInspecciones || 0;
  // Convertir la cantidad a un porcentaje
  const progressPercentage = Math.min(Math.max(cantidadAtentos, 0), 100);

  // Definir los procesos especiales y los procesos a mostrar
  const procesosEspeciales = ["CUCUTA-SSTA", "CUCUTA-ADMON"];
  const procesosAMostrar = [
    "CUCUTA-DRASTICOS",
    "CUCUTA-SCR",
    "CUCUTA-FACTURACION",
  ];

  // Filtrar elementos según la lógica descrita
  const filteredInspecciones = inspectorData?.Nombre_PtePorInspecciones?.filter(
    (pteInsp) =>
      pteInsp.Proceso === inspectorData?.Proceso || procesosAMostrar.includes(inspectorData.Proceso)
  ) || [];

  return (
    <div className="slide">
      <div className="titleAtentos">
        <h2>Pendientes Por Inspección</h2>
      </div>

      <div className="atentosContenedor">
        <div className="contLblAtento">
          <label>{inspectorData?.Proceso || 'Proceso desconocido'}</label>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}>
            {progressPercentage}%
          </div>
        </div>
        <div className="cantidadAtento">
          <h4>
            {cantidadAtentos}/{inspectorData?.CantidadOperativa || 0}
          </h4>
        </div>
      </div>
      <div className="contenedorDetalleAtento">
        {filteredInspecciones.map((pteInsp, index) => (
          <div key={index} className="PteInspOpr">
            <h5>
              {index + 1}. {pteInsp.Nombre}
            </h5>
            <p>{pteInsp.Proceso}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};
