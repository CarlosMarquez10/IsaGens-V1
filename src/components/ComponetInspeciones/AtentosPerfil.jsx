import React from "react";
import "./AtentosPerfil.css";
// Función para renderizar una barra de progreso
const renderBarraProgresoAtento = (region, datos) => {
  const maxCantidad = 4;
  const atentosEjecutado = datos?.atentosEjecutado ?? 0;
  const porcentaje = (atentosEjecutado / maxCantidad) * 100;

  return (
    <div className="atentosContenedor" key={region}>
      <div className="contLblAtento">
        <label>{region}</label>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${porcentaje}%`,
          }}
        >
          {porcentaje.toFixed(2)}%
        </div>
      </div>
      <div className="cantidadAtento">
        <h4>
          {atentosEjecutado}/{maxCantidad}
        </h4>
      </div>
    </div>
  );
};

export const AtentosPerfil = ({ inspectorData }) => {
  const maxAtentosProgramados = 4;

  // Si inspectorData es null o undefined, muestra un mensaje o un indicador de carga
  if (!inspectorData) {
    return <div>Cargando datos...</div>;
  }

  // Obtener los datos de los atentos realizados
  const cantidadAtentosRealizados = inspectorData?.Cantidad_Atentos || 0;

  // Calcular el porcentaje de progreso
  const progressPercentage = Math.min(
    (cantidadAtentosRealizados / maxAtentosProgramados) * 100,
    100
  );

  // Agrupar los operarios con atentos y mostrar la lista tipoAtento
  const operarioConAtentos = inspectorData?.OperarioConAtentos || [];
  const operarioConAtentosList = operarioConAtentos.map((atento, index) => (
    <div key={index} className="atentosPerfil">
      <div className="contatentosOper">
        <h5 className="atentoNombreOper">
          {index + 1}. {atento.Nombre}
        </h5>
        <h5 className="tipoatentoOper">{atento.fecha}</h5>
      </div>
      <h6 className="atentoDescrition">{atento.DescubrirAtento}</h6>
      <p>{atento.tipoAtento}</p>
      <br />
    </div>
  ));

  return (
    <div className="slide">
      <div className="titleAtentos">
        <h2>Atentos</h2>
      </div>

      <div className="atentosContenedor">
        <div className="contLblAtento">
          <label>{inspectorData?.Proceso || "Proceso no disponible"}</label>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}>
            {progressPercentage.toFixed(2)}%
          </div>
        </div>
        <div className="cantidadAtento">
          <h4>
            {cantidadAtentosRealizados}/{maxAtentosProgramados}
          </h4>
        </div>
      </div>
      <div className="contenedorDetalleAtento">{operarioConAtentosList}</div>
    </div>
  );
};
