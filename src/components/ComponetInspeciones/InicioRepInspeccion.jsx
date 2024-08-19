import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navar from "../Navar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InicioRepInspeccion.css";
import { InspCampoGeneral } from "./InspCampoGeneral";
import { InspAtentoGeneral } from "./InspAtentosGeneral";
import { InspAccion } from "./InspAccion";
import { NoConformes } from "./NoConformes";
import { useInspectorData } from "../InspectorDataContext"; // Importa el contexto existente
import { useInspector } from "../InspectorContext"; // Importa el nuevo contexto
import { EstadoGenRegionales } from "./EstadoGeneralRegionales";
import { EstadoNc } from "./EstadoNc";

const InicioRepInspeccion = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedInspector, setSelectedInspector] = useState("");
  const [options, setOptions] = useState([]);
  const [errors, setErrors] = useState({});

  const { inspectorData } = useInspectorData(); // Usa el contexto existente
  const { fetchInspectorDataPerfil } = useInspector(); // Usa el nuevo contexto

  const cities = {
    Cucuta: [
      "Diego Medina",
      "Edgar Mendoza",
      "Jonathan Estupinan",
      "Alvaro Gonzalez",
      "Edson Jaimes",
      "Marcos Suarez",
      "Miryam Sierra",
      "Anderson Ortiz",
      "Maria Rodriguez",
      "Eduar Coral",
      "Francisco Galan",
      "Andres Tovar",
    ],
    Pamplona: ["Alexis Martinez", "Hober Davila"],
    Ocaña: ["Sol Rodriguez", "Cristian Peñaranda"],
    Aguachica: ["Jose Novoa", "Cristian Noriega", "Karen Pacheco"],
    Tibu: ["Eudin Contreras", "Edgardo Bayona", "Edgar Tulio"],
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setSelectedInspector(""); // Reset inspector when city changes
    setOptions(cities[city] || []);
    setErrors((prev) => ({ ...prev, city: "", inspector: "" })); // Clear errors
  };

  const handleInspectorChange = (event) => {
    const inspector = event.target.value;
    setSelectedInspector(inspector);
    setErrors((prev) => ({ ...prev, inspector: "" })); // Clear errors
  };

  const navigate = useNavigate();

  const perfil = () => {
    const newErrors = {};
    if (!selectedCity) newErrors.city = "Selecciona una Regional.";
    if (!selectedInspector) newErrors.inspector = "Selecciona un Inspector.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => {
        setErrors({});
      }, 3000); // Clear errors after 3 seconds
    } else {
      fetchInspectorDataPerfil(selectedInspector) // Realiza la petición fetch
        .then(() => {
          navigate("/PerfilInspector"); // Navega a la página del perfil
        })
        .catch((error) => {
          console.error("Error fetching the inspector profile:", error);
        });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="navInspecciones">
        <Navar />
      </div>
      <div className="containerInspecciones">
        <div className="contFiltroPerfil">
          <div className="contFiltros">
            <div className="contfiltro">
              <select value={selectedCity} onChange={handleCityChange} required>
                <option value="">Selecciona una Regional</option>
                {Object.keys(cities).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && <p className="error">{errors.city}</p>}
              <select
                value={selectedInspector}
                onChange={handleInspectorChange}
                required
              >
                <option value="">Inspector</option>
                {options.map((person, index) => (
                  <option key={index} value={person}>
                    {person}
                  </option>
                ))}
              </select>
              {errors.inspector && <p className="error">{errors.inspector}</p>}
            </div>
            <div className="btnfiltrosperf">
              <button className="btnFiltro" onClick={perfil}>
                Detalles
              </button>
            </div>
          </div>
          <div className="contPerfil">
            <div className="contfoto">
              <img className="imginicioperfil" src="/assets/inmel.ico" alt="" />
            </div>
            <div className="contnombreperfil">
              <h2>Inspecciónes de </h2>
              <h2>Campo</h2>
            </div>
          </div>
        </div>

  
        <div className="contEstadoRegionales">
          <EstadoGenRegionales />
        </div>
        <Slider {...settings}>
          <InspCampoGeneral inspectorInicial={inspectorData} />
          <InspAtentoGeneral inspectorInicial={inspectorData} />
          <NoConformes inspectorInicial={inspectorData} />
          <EstadoNc />
          <InspAccion inspectorInicial={inspectorData} />
        </Slider>
      </div>
    </>
  );
};

export default InicioRepInspeccion;
