import React from "react";
import { Link } from "react-router-dom";

import "../PruebaMedidor/PruebaMedidor.css";

function Consulta() {
  return (
    <>
      <div className="containerCard">
        <div className="containerCar">
          <div className="containerImg">
            <img
              src="/assets/searchuser.webp"
              alt=""
              className="imgsearchuser"
            />
          </div>
          <Link to="/Consult" className="containerDatoCard">
            <p className="titleCard">Consultas</p>
            <p className="DescripcionCard">
              {/* Podras realizar consulta general con el numero del <b>Cliente</b> o <b>Medidor</b> */}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Consulta;
