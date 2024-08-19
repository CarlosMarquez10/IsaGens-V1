import React from "react";

// Función para renderizar una barra de progreso
const renderBarraProgresoAtento = (region, datos) => {
  const maxCantidad = 4;
  const atentosEjecutado = datos?.atentosEjecutado ?? 0;
  const porcentaje = Math.min((atentosEjecutado / maxCantidad) * 100, 100);

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
        <h4>{atentosEjecutado}/{maxCantidad}</h4>
      </div>
    </div>
  );
};

export const InspAtentoGeneral = ({ inspectorInicial }) => {
  if (!inspectorInicial) {
    return <div>No hay datos disponibles para inspecciones no conformes.</div>;
  }

  const regiones = [
    {
      nombre: "Cúcuta-Drásticos",
      datos: inspectorInicial?.CucutaDrastico ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Cúcuta-Facturación",
      datos: inspectorInicial?.CucutaFacturacion ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Cúcuta-Scr",
      datos: inspectorInicial?.CucutaScr ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Pamplona",
      datos: inspectorInicial?.Pamplona ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Ocaña",
      datos: inspectorInicial?.Ocana ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Tibu-Pueblos",
      datos: inspectorInicial?.TibuPueblos ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Tibu",
      datos: inspectorInicial?.Tibu ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Aguachica",
      datos: inspectorInicial?.Aguachica ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Cúcuta-SSTA",
      datos: inspectorInicial?.CucutaSsta ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Aguachica-SSTA",
      datos: inspectorInicial?.AguachicaSsta ?? { atentosEjecutado: 0 },
    },
    {
      nombre: "Cúcuta-Admon",
      datos: inspectorInicial?.CucutaAdmon ?? { atentosEjecutado: 0 },
    },
  ];

  return (
    <div className="slide">
      <div className="titleAtentos">
        <h2>Atentos General</h2>
      </div>
      {regiones.map((region) =>
        renderBarraProgresoAtento(region.nombre, region.datos)
      )}
    </div>
  );
};