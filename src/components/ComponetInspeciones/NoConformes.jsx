import React from "react";

const renderBarraProgresoNoConformidades = (region, datos, realizadas) => {
  const noConformidades = datos?.NoConformidades ?? 0;
  const porcentaje = realizadas ? Math.min((noConformidades / realizadas) * 100, 100) : 0;

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
        <h4>{noConformidades}/{realizadas}</h4>
      </div>
    </div>
  );
};

export const NoConformes = ({ inspectorInicial }) => {
  if (!inspectorInicial) {
    return <div>No hay datos disponibles para inspecciones no conformes.</div>;
  }

  const regiones = [
    {
      nombre: "Cúcuta-Drásticos",
      datos: inspectorInicial?.CucutaDrastico || {},
      realizadas: inspectorInicial?.CucutaDrastico?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Cúcuta-Facturación",
      datos: inspectorInicial?.CucutaFacturacion || {},
      realizadas: inspectorInicial?.CucutaFacturacion?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Cúcuta-Scr",
      datos: inspectorInicial?.CucutaScr || {},
      realizadas: inspectorInicial?.CucutaScr?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Pamplona",
      datos: inspectorInicial?.Pamplona || {},
      realizadas: inspectorInicial?.Pamplona?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Ocaña",
      datos: inspectorInicial?.Ocana || {},
      realizadas: inspectorInicial?.Ocana?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Tibu-Pueblos",
      datos: inspectorInicial?.TibuPueblos || {},
      realizadas: inspectorInicial?.TibuPueblos?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Tibu",
      datos: inspectorInicial?.Tibu || {},
      realizadas: inspectorInicial?.Tibu?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Aguachica",
      datos: inspectorInicial?.Aguachica || {},
      realizadas: inspectorInicial?.Aguachica?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Cúcuta-SSTA",
      datos: inspectorInicial?.CucutaSsta || {},
      realizadas: inspectorInicial?.CucutaSsta?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Aguachica-SSTA",
      datos: inspectorInicial?.AguachicaSsta || {},
      realizadas: inspectorInicial?.AguachicaSsta?.cantidadInspEjecutadas ?? 0,
    },
    {
      nombre: "Cúcuta-Admon",
      datos: inspectorInicial?.CucutaAdmon || {},
      realizadas: inspectorInicial?.CucutaAdmon?.cantidadInspEjecutadas ?? 0,
    },
  ];

  return (
    <div className="slide">
      <div className="titleAtentos">
        <h2>No Conformidades General</h2>
      </div>
      {regiones.map((region) =>
        renderBarraProgresoNoConformidades(
          region.nombre,
          region.datos,
          region.realizadas
        )
      )}
    </div>
  );
};