import React, { createContext, useState, useContext } from "react";

const InspectorContextPerfil = createContext();

export const useInspector = () => useContext(InspectorContextPerfil);

export const InspectorProviderPerfil = ({ children }) => {
  const [inspectorperfil, setInspectorInicial] = useState(null);
//https://74pbcspn-3000.use2.devtunnels.ms
  const fetchInspectorDataPerfil = (inspectorName) => {
    return fetch(`https://74pbcspn-3000.use2.devtunnels.ms/api/files/json-perfil?filename=${inspectorName}`)
      .then((response) => response.json())
      .then((data) => {
        setInspectorInicial(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching the inspector profile:", error);
        throw error; // Lanza el error para manejarlo en el componente
      });
  };

  return (
    <InspectorContextPerfil.Provider value={{ inspectorperfil, fetchInspectorDataPerfil }}>
      {children}
    </InspectorContextPerfil.Provider>
  );
};
