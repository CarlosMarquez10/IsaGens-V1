import { useState, useCallback, useMemo } from "react";
import Navar from "../Navar";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import MapComponent from "./MapComponent";
import "../../App.css";
import "./PegConsulta.css";

const PegConsulta = () => {
  const [dataCliente, setDatosApi] = useState("");
  const [dataGps, setDataGps] = useState({ lat: "", lng: "" });
  const [msg, setMsg] = useState(
    "Ingrese el numero Cliente o del medidor, la consulta puede demorar unos segundos..."
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (type, cliente) => {
    setIsLoading(true);
    const endpoint = type === "Usuario" ? "users" : "medidor";
    const url = `https://74pbcspn-3001.use2.devtunnels.ms/api/${endpoint}/${cliente}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDatosApi(data);
      setDataGps({
        lat: parseFloat(data.Latitud.replace(",", ".")),
        lng: parseFloat(data.Longitud.replace(",", "."))
      });
    } catch (error) {
      console.error("Error al consumir la API:", error);
      setMsg(
        `No se encontró el ${type === "Usuario" ? "Usuario" : "Medidor"} - verifica el número del ${
          type === "Usuario" ? "cliente" : "medidor"
        } o informa al Cgo`
      );
      setDatosApi("");
      setDataGps({ lat: "", lng: "" });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleMapClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const startCoordinates = `${position.coords.latitude},${position.coords.longitude}`;
        const endCoordinates = `${dataCliente?.Latitud},${dataCliente?.Longitud}`;
        const googleMapsUrl = `https://www.google.com/maps/dir/${startCoordinates}/${endCoordinates}`;
        window.open(googleMapsUrl, "_blank");
      },
      (error) => {
        console.error("Error al obtener la ubicación:", error);
      }
    );
  };

  const mapCenter = useMemo(() => ({ lat: "8.100347", lng: "-72.913427" }), []);
  const markerPosition = useMemo(() => dataGps, [dataGps]);

  return (
    <>
      <Navar />
      <div className="containerConsultas">
        <div className="contDatosEntrada">
        <SearchForm onSearch={fetchData} />
        <SearchResults data={dataCliente} isLoading={isLoading} msg={msg} onMapClick={handleMapClick} />
        </div>
        <MapComponent center={mapCenter} position={markerPosition} cliente={dataCliente?.Cliente} />
      </div>
    </>
  );
};

export default PegConsulta;


// Explicación

// SearchForm: Componente que maneja la entrada del usuario y los botones de selección. Al seleccionar una opción, llama a la función onSearch que recibe como props para realizar la búsqueda.

// SearchResults: Componente que muestra los resultados de la búsqueda. Recibe data, isLoading, msg y onMapClick como props.

// MapComponent: Componente que muestra el mapa y la ubicación del cliente. Recibe center, position, y cliente como props.

// PegConsulta: Componente principal que maneja el estado y la lógica de negocio, y distribuye las tareas a los componentes hijos.