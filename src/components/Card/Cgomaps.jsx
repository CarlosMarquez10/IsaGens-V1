import React from "react";
import "../PruebaMedidor/PruebaMedidor.css";
import { Link } from "react-router-dom";

function Cgomaps() {
  return (
    <>
      <div className="containerCard">
        <div className="containerCar">
          <div className="containerImg">
            <img
              src="/assets/cgomaps.png"
              alt=""
              className="imgmedidormonofase"
            />
          </div>
          <Link to="/Cgomapas" className="containerDatoCard">
            <p className="titleCard">CgoMaps</p>
            <p className="DescripcionCard">
              {/* Puedes crear, graficar tus rutas y tambien exportar las en formato kml y Excel.  */}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cgomaps;