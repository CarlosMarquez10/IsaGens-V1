import React, { useState } from "react";
import Navar from "../Navar";
import { FaDownload } from "react-icons/fa6";
import "./FromConsecutivo.css";
import { useAuth } from "../../context/authContext";
import ReactPlayer from "react-player";

const FromConsecutivo = () => {
  const { user } = useAuth();
  const [fecha, setFecha] = useState("");
  const [asunto, setAsunto] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [recepcion, setRecepcion] = useState("");
  const [remitente, setRemitente] = useState("");
  const [recibido, setRecibido] = useState("");
  const [consecutivo, setConsecutivo] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleGetConsecutivo = async () => {
    try {
      const response = await fetch(
        "https://74pbcspn-3007.use2.devtunnels.ms/ConsultaConsecutivo",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener el consecutivo");
      }

      const data = await response.json();
      setConsecutivo(data.newConsecutivo);
    } catch (error) {
      console.error("Error al obtener el consecutivo:", error);
      setError("Error al obtener el consecutivo");
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const newRow = {
      FECHA: fecha,
      ASUNTO: asunto,
      DESTINATARIO: destinatario,
      RECEPCION: recepcion,
      REMITENTE: remitente,
      RECIBIDO: recibido,
    };
    try {
      const response = await fetch(
        "https://74pbcspn-3007.use2.devtunnels.ms/DatosSolicitudes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRow),
        }
      );

      if (!response.ok) {
        throw new Error("Error al agregar la correspondencia");
      }

      const result = await response.json();
      setSuccessMessage(
        "El consecutivo solicitado le llegará en un momento al correo corporativo inmel"
      );

      setFecha("");
      setAsunto("");
      setDestinatario("");
      setRecepcion("");
      setRemitente("");
      setRecibido("");

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
    } catch (error) {
      console.error("Error al enviar la correspondencia:", error);
      setError("Error al enviar la correspondencia");

      setTimeout(() => {
        setError("");
      }, 4000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(
        "https://74pbcspn-3007.use2.devtunnels.ms/DescargarArchivo",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Error al descargar el archivo");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download =
        "CTFA00121_Control_consecutivos_correspondencia_enviada.xlsx";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
      setError("Error al descargar el archivo");

      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  const remitentes = [
    "Diego Medina",
    "Edgar Mendoza",
    "Jonathan Estupinan",
    "Alvaro Gonzalez",
    "Edson Jaimes",
    "Marcos Suarez",
    "Alexis Martinez",
    "Sol Rodriguez",
    "Jose Novoa",
    "Edgardo Bayona",
    "Nelly Duarte",
    "Maria Rodriguez",
    "Miryam Sierra",
    "Anderson Ortiz",
    "Eudin Contreras",
    "Carlos Marquez",
  ];

  const isAuthorizedToExport = ["marcos.suarez", "carlos.marquez"].includes(
    user.email.split("@")[0]
  );



  return (
    <>
      <div className="navCons">
        <Navar />
      </div>

      <div className="container">
        
        <div className="contentWrapper">
          <header>
            <img src="/assets/inmel.png" alt="Inmel Logo" />
            <h1>CONTROL DE CONSECUTIVOS DE CORRESPONDENCIA ENVIADA</h1>
            <h2>CTF-A001-21 REV. 0</h2>
          </header>
          <div className="navConsecutivo">
            {isAuthorizedToExport && (
              <button
                className="btnConsecutivoExportar"
                type="button"
                onClick={handleDownload}
                disabled={isLoading}
              >
                <FaDownload />
              </button>
            )}
          </div>
          <div className="contendorfrom">
            {isLoading && <div className="loading">Procesando...</div>}
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            {error && <div className="error-message">{error}</div>}
            {consecutivo && (
              <div className="consecutivo-message">
                Nuevo Consecutivo: {consecutivo}
              </div>
            )}
            <form
              className="correspondenceForm"
              id="correspondenceForm"
              onSubmit={handleSubmit}
            >

<input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
            <input
              type="text"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              placeholder="Asunto"
              required
            />
            <input
              type="text"
              value={destinatario}
              onChange={(e) => setDestinatario(e.target.value)}
              placeholder="Destinatario"
              required
            />
            <input
              type="text"
              value={recepcion}
              onChange={(e) => setRecepcion(e.target.value)}
              placeholder="Recepción"
              required
            />
            <select
              value={remitente}
              onChange={(e) => setRemitente(e.target.value)}
              required
            >
              <option value="">Seleccione el Remitente</option>
              {remitentes.map((remitente, index) => (
                <option key={index} value={remitente}>
                  {remitente}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={recibido}
              onChange={(e) => setRecibido(e.target.value)}
              placeholder="Recibido"
            />
            <button
              className="btnConsecutivos"
              type="submit"
              disabled={isLoading}
            >
              Solicitar Consecutivo
            </button>  
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FromConsecutivo;



