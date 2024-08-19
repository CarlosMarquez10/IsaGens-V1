import React, { createContext, useState, useContext, useEffect } from "react";

const InspectorDataContext = createContext();

export const useInspectorData = () => {
  return useContext(InspectorDataContext);
};

export const InspectorDataProvider = ({ children }) => {
  const [inspectorData, setInspectorData] = useState(null);
  const [totalInspProgramadas, setTotalInspProgramadas] = useState(0);
  const [totalInspEjecutadas, setTotalInspEjecutadas] = useState(0);
//https://74pbcspn-3000.use2.devtunnels.ms
  const fetchInspectorData = () => {
    fetch(`https://74pbcspn-3000.use2.devtunnels.ms/api/files/jsonGeneral`)
      .then((response) => response.json())
      .then((data) => {
        setInspectorData(data);

        // Calcula los totales
        let totalProgramadas = 0;
        let totalEjecutadas = 0;

        for (const regional in data) {
          if (data[regional].cantidadInspGeneral) {
            const totalesObj = data[regional].cantidadInspGeneral.find(semana => semana.totales);
            if (totalesObj) {
              totalProgramadas += totalesObj.totales || 0;
            }
          }

          if (data[regional].cantidadInspEjecutadas) {
            totalEjecutadas += data[regional].cantidadInspEjecutadas;
          }
        }

        setTotalInspProgramadas(totalProgramadas);
        setTotalInspEjecutadas(totalEjecutadas);
      })
      .catch((error) => {
        console.error("Error fetching the inspector profile:", error);
      });
  };

  useEffect(() => {
    fetchInspectorData(); // Llama a la función de contexto para hacer la petición al montar el componente
  }, []); // Empty dependency array ensures this runs only once

  return (
    <InspectorDataContext.Provider value={{ inspectorData, totalInspProgramadas, totalInspEjecutadas }}>
      {children}
    </InspectorDataContext.Provider>
  );
};
