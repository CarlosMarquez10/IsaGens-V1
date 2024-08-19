import React, { useState, useEffect } from "react";
import "./ConsultaPagos.css";
import Navar from "../Navar";

export const ConsultaPagos = () => {
  const [cliente, setCliente] = useState("");
  const [pagosData, setPagosData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [requestCounter, setRequestCounter] = useState(0);
  const [maxConcurrentRequests, setMaxConcurrentRequests] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://74pbcspn-3002.use2.devtunnels.ms/contador")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setRequestCounter(data.requestCounter);
          setMaxConcurrentRequests(data.maxConcurrentRequests);
        })
        .catch((error) => {
          console.error("Error fetching contador:", error);
        });
    }, 5000); // Consulta el contador cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (requestCounter >= maxConcurrentRequests) {
      setError("Demasiadas consultas en proceso. Por favor, espera.");
      return;
    }
    setIsLoading(true); // Comienza la carga
    try {
      const response = await fetch(
        "https://74pbcspn-3002.use2.devtunnels.ms/PagosOperario", // Asegúrate de que esta URL es correcta
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ numeroCliente: cliente }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPagosData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(
        "Hubo un problema al obtener los datos de pagos. Por favor, inténtalo de nuevo."
      );
    } finally {
      setIsLoading(false); // Termina la carga
    }
  };

  return (
    <>
      <Navar />
      <main className="ContainerConsultaPagos">
        <section className="ContainerConsultaPagos__title">
          <img src="../../../assets/ConsultaPagos.jpg" alt="logobody-pagos" />
          <h3>Consulta Pagos</h3>
        </section>
        <section className="Container_Titles_pagos">
          <h4>Últimos Pagos Registrados</h4>
          <div className="container_Cant-Consulta">
            <h4 className="avisoCantidad">Cantidad de consulta en ejecución : </h4>
            <h2 className="containe-contadorPeticiones">
              {requestCounter}/{maxConcurrentRequests}
            </h2>
            <h4 className="avisoCantidad">Por favor espere un turno... lo permitido son 3 consulta máximo.</h4>
          </div>
        </section>
        <section className="Container_Pagos-form">
          <form className="formPagos" onSubmit={handleSubmit}>
            <b className="labelPagos" htmlFor="Cliente">
              Cliente :
            </b>
            <input
              className="inputClientePagos"
              type="number"
              id="Cliente"
              name="Cliente"
              placeholder="Ingrese el Cliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              disabled={isLoading || requestCounter >= maxConcurrentRequests}
            />
            <button
              type="submit"
              disabled={isLoading || requestCounter >= maxConcurrentRequests}
            >
              <img
                className="btnPagos"
                src="../../../assets/searchuser.webp"
                alt=""
              />
            </button>
          </form>
        </section>
        <section className="datosdelPago">
          {error && <p className="error">{error}</p>}
          {isLoading && <p className="loading">Cargando...</p>}
          <div className="contenorRecaudo">
            {pagosData && (
              <>
                <div className="contPagosDiv">
                  <strong>Tipo de Pago : </strong> {pagosData.tipoPago}
                </div>
                <div className="contPagosDiv">
                  <strong>Fecha de Pago : </strong>
                  {pagosData.fechaPago}
                </div>
                <div className="contPagosDiv">
                  <strong>Recaudador :</strong> {pagosData.recaudador}
                </div>
              </>
            )}
          </div>
          <div className="fechaPagos">
            {pagosData && pagosData.datosPagos && (
              <table className="tablePagos">
                <thead>
                  <tr>
                    <th>Fecha Pago</th>
                    <th>Tipo Pago</th>
                    <th>Lote</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {pagosData.datosPagos.slice(0, 3).map((pago, index) => (
                    <tr key={index}>
                      <td>{pago["Fecha Pago"]}</td>
                      <td>{pago["Tipo Pago"]}</td>
                      <td>{pago["Lote"]}</td>
                      <td>{pago["Valor"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </main>
    </>
  );
};
