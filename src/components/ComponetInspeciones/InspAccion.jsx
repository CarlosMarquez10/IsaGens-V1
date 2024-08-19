import React from "react";
import "./TablaInspecciones.css";
import { useInspectorData } from "../InspectorDataContext"; // Importa el contexto

const dataInicial = [
  { regional: "Cúcuta-Drásticos", posterior: 0, inmediata: 0 },
  { regional: "Cúcuta-Facturación", posterior: 0, inmediata: 0 },
  { regional: "Cúcuta-Scr", posterior: 0, inmediata: 4 },
  { regional: "Pamplona", posterior: 0, inmediata: 0 },
  { regional: "Ocaña", posterior: 2, inmediata: 0 },
  { regional: "Tibu-Pueblos", posterior: 0, inmediata: 0 },
  { regional: "Tibu", posterior: 0, inmediata: 0 },
  { regional: "Aguachica", posterior: 0, inmediata: 0 },
  { regional: "Cúcuta-SSTA", posterior: 0, inmediata: 0 },
  { regional: "Aguachica-SSTA", posterior: 0, inmediata: 0 },
  { regional: "Cúcuta-Admon", posterior: 0, inmediata: 0 },
];

const regionKeyMap = {
  "Cúcuta-Drásticos": "CucutaDrastico",
  "Cúcuta-Facturación": "CucutaFacturacion",
  "Cúcuta-Scr": "CucutaScr",
  Pamplona: "Pamplona",
  Ocaña: "Ocana",
  "Tibu-Pueblos": "TibuPueblos",
  Tibu: "Tibu",
  Aguachica: "Aguachica",
  "Cúcuta-SSTA": "CucutaSsta",
  "Aguachica-SSTA": "AguachicaSsta",
  "Cúcuta-Admon": "CucutaAdmon",
};

const getTotal = (data, key) => data.reduce((sum, row) => sum + row[key], 0);

export const InspAccion = () => {
  const { inspectorData } = useInspectorData(); // Usa el contexto

  if (!inspectorData) {
    return <div>Loading...</div>; // o un spinner de carga
  }

  const data = dataInicial.map((item) => {
    const regionalKey = regionKeyMap[item.regional];
    const regionalData = inspectorData?.[regionalKey] || {};
    return {
      ...item,
      posterior: regionalData?.FormaInspeccion?.Posterior ?? item.posterior,
      inmediata: regionalData?.FormaInspeccion?.Inmediata ?? item.inmediata,
    };
  });

  return (
    <div className="insp-accion">
      <div className="titleAtentos">
        <h2>Forma Inspección</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>Regional</th>
            <th>Posterior</th>
            <th>Inmediata</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.regional}</td>
              <td>{row.posterior}</td>
              <td>{row.inmediata}</td>
            </tr>
          ))}
          <tr className="totalesTable">
            <td>Totales</td>
            <td>{getTotal(data, "posterior")}</td>
            <td>{getTotal(data, "inmediata")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
