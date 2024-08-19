import React from "react";

export const InspCampoGeneral = ({ inspectorInicial }) => {
  if (!inspectorInicial) {
    return <div>No hay datos disponibles para inspecciones no conformes.</div>;
  }

  // Función para calcular el porcentaje
  const calcularPorcentaje = (ejecutadas, total) => {
    return total > 0 ? (ejecutadas / total) * 100 : 0;
  };

  // Función para renderizar una barra de progreso
  const renderBarraProgreso = (region, datos) => {
    const totalInspGeneral = datos?.cantidadInspGeneral?.find(
      (item) => item.totales !== undefined
    )?.totales || 0;

    const porcentaje = calcularPorcentaje(
      datos?.cantidadInspEjecutadas || 0,
      totalInspGeneral
    );

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
            {`${porcentaje.toFixed(1)}%`}
          </div>
        </div>
        <div className="cantidadAtento">
          <h4>
            {datos?.cantidadInspEjecutadas || 0}/{totalInspGeneral}
          </h4>
        </div>
      </div>
    );
  };

  const regiones = [
    {
      nombre: "Cúcuta-Drásticos",
      datos: inspectorInicial?.CucutaDrastico || {},
    },
    {
      nombre: "Cúcuta-Facturación",
      datos: inspectorInicial?.CucutaFacturacion || {},
    },
    {
      nombre: "Cúcuta-Scr",
      datos: inspectorInicial?.CucutaScr || {},
    },
    {
      nombre: "Pamplona",
      datos: inspectorInicial?.Pamplona || {},
    },
    {
      nombre: "Ocaña",
      datos: inspectorInicial?.Ocana || {},
    },
    {
      nombre: "Tibu-Pueblos",
      datos: inspectorInicial?.TibuPueblos || {},
    },
    {
      nombre: "Tibu",
      datos: inspectorInicial?.Tibu || {},
    },
    {
      nombre: "Aguachica",
      datos: inspectorInicial?.Aguachica || {},
    },
    {
      nombre: "Cúcuta-SSTA",
      datos: inspectorInicial?.CucutaSsta || {},
    },
    {
      nombre: "Aguachica-SSTA",
      datos: inspectorInicial?.AguachicaSsta || {},
    },
    {
      nombre: "Cúcuta-Admon",
      datos: inspectorInicial?.CucutaAdmon || {},
    },
  ];

  return (
    <div className="slide">
      <div className="titleAtentos">
        <h2>Inspecciones en Campo</h2>
      </div>
      {regiones.map((region) =>
        renderBarraProgreso(region.nombre, region.datos)
      )}
    </div>
  );
};
