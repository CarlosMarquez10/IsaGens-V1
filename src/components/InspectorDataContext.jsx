import React, { createContext, useState, useContext, useEffect } from "react";

// Crear el contexto para los datos del inspector
export const InspectorDataContext = createContext();

// Hook personalizado para utilizar el contexto
export const useInspectorData = () => {
  const context = useContext(InspectorDataContext);
  if (!context) {
    throw new Error(
      "useInspectorData debe ser usado dentro de un InspectorDataProvider"
    );
  }
  return context;
};

// Proveedor de datos para el contexto del inspector
export const InspectorDataProvider = ({ children }) => {
  const [inspectorData, setInspectorData] = useState(null);
  const [totalInspProgramadas, setTotalInspProgramadas] = useState(0);
  const [totalInspEjecutadas, setTotalInspEjecutadas] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const calculateTotals = (data) => {
    let totalProgramadas = 0;
    let totalEjecutadas = 0;

    try {
      Object.entries(data).forEach(([_, regionalData]) => {
        if (regionalData.cantidadInspGeneral) {
          const totalesObj = regionalData.cantidadInspGeneral.find(
            (semana) => semana.totales
          );
          if (totalesObj?.totales) {
            totalProgramadas += Number(totalesObj.totales);
          }
        }

        if (regionalData.cantidadInspEjecutadas) {
          totalEjecutadas += Number(regionalData.cantidadInspEjecutadas);
        }
      });

      return { totalProgramadas, totalEjecutadas };
    } catch (err) {
      console.error("Error calculating totals:", err);
      throw new Error("Error al calcular los totales");
    }
  };

  const fetchInspectorData = async () => {
    try {
      setIsLoading(true);
      setError(null);
    
      const response = await fetch(
        `https://74pbcspn-3000.use2.devtunnels.ms/api/files/jsonGeneral`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (!data || typeof data !== "object") {
        throw new Error("Formato de datos inválido");
      }

      const { totalProgramadas, totalEjecutadas } = calculateTotals(data);

      setInspectorData(data);
      setTotalInspProgramadas(totalProgramadas);
      setTotalInspEjecutadas(totalEjecutadas);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching inspector data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para recargar los datos manualmente
  const refreshData = () => {
    fetchInspectorData();
  };

  useEffect(() => {
    fetchInspectorData();

    // Opcional: Actualizar datos cada cierto tiempo
    const interval = setInterval(fetchInspectorData, 300000); // 5 minutos

    return () => clearInterval(interval);
  }, []);

  return (
    <InspectorDataContext.Provider
      value={{
        inspectorData,
        totalInspProgramadas,
        totalInspEjecutadas,
        isLoading,
        error,
        refreshData,
      }}
    >
      {children}
    </InspectorDataContext.Provider>
  );
};
