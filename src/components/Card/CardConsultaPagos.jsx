import React from "react";
import { Link } from "react-router-dom";


export const CardConsultaPagos = () => {
  return (
    <>

      <div className="containerCard">
        <div className="containerCar">
          <div className="containerImg">
            <img
              src="/assets/ConsultaPagos.jpg"
              alt=""
              className="imgmedidormonofase"
            />
          </div>
          <Link to="/ConsultaPagos" className="containerDatoCard">
            <p className="titleCard">Consultar Pagos</p>
            <p className="DescripcionCard">
              {/* Puedes crear, graficar tus rutas y tambien exportar las en formato kml y Excel.  */}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
