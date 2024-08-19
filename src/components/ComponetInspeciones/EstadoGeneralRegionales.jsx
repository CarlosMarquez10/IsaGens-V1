import React from "react";
import "./PerfilInspector.css";
import { useInspectorData } from "../InspectorDataContext";

export const EstadoGenRegionales = () => {
  const { inspectorData, totalInspProgramadas, totalInspEjecutadas } = useInspectorData();

  // Convertir la cantidad a un porcentaje
  const progressPercentage = totalInspProgramadas > 0
    ? Math.min((totalInspEjecutadas / totalInspProgramadas) * 100, 100)
    : 0;

  return (
    <div className="slidePerfilRegionales">
      <div className="contLblAtentoperfil">
        <label>Cumplimiento General Inspecciones</label>
      </div>
      <div className="atentosContenedor">
        <div className="progress-barperfil">
          <div className="progress" style={{ width: `${progressPercentage}%` }}>
            {progressPercentage.toFixed(2)}%
          </div>
        </div>
        <div className="cantidadAtento">
          <h4>{totalInspEjecutadas}/{totalInspProgramadas}</h4>
        </div>
      </div>
    </div>
  );
};
