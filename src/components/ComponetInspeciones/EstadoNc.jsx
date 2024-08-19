import React from "react";
import "./InicioRepInspeccion.css";
import { useInspectorData } from "../InspectorDataContext";

export const EstadoNc = () => {
  const { inspectorData } = useInspectorData();

  if (
    !inspectorData ||
    !inspectorData.CucutaDrastico ||
    !inspectorData.CucutaDrastico.NoConformidaEstados
  ) {
    return <div>No hay datos disponibles para inspecciones no conformes.</div>;
  }

  return (
    <div className="slideNc">
      <div className="titleAtentos">
        <h2>No Conforme Sin Corrección</h2>
      </div>

      <div className="contenedorDetalleAtento">
        {inspectorData.CucutaDrastico.NoConformidaEstados?.map(
          (atento, index) => (
            <div key={index} className="atentosContPerfil">
              <h3>
                {index + 1}. {atento.Inspector}
              </h3>
              <h4>{atento.Estado}</h4>
              <p>
                {" "}
                <span>Importancia :</span>
                <b>{atento.Impacto}</b>
              </p>
              <p>
                <span>Operario : </span> {atento.Operario}
              </p>
              <p>
                {" "}
                <span>Descripción : </span> <b>{atento.Description}</b>
              </p>
              <p>
                {" "}
                <span>Fecha de Inspección :</span> {atento.FechaInspNC}
              </p>
              <p>
                {" "}
                <span>Fecha de Correción : </span> {atento.FechaEspCorrecion}
              </p>
              <br />
            </div>
          )
        )}
      </div>
    </div>
  );
};
