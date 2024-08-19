import React from "react";
import "./PruebaMedidor.css";
import { Link } from "react-router-dom";

function PruebaMedidor() {
  return (
    <>
      <div className="containerCard">
        <div className="containerCar">
          <div className="containerImg">
            <img
              src="/assets/tecun.gif"
              alt=""
              className="imgmedidormonofase"
            />
          </div>
          <Link to="/Prumedidor" className="containerDatoCard">
            <p className="titleCard">Medidor</p>
            <p className="DescripcionCard">
              {/* Realiza la prueba de tiempo y potencia. Ingresa los datos y
              calcula. */}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PruebaMedidor;
