import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "../PruebaMedidor/PruebaMedidor.css";
import { Link } from "react-router-dom";

const data = [
  "cgo",
  "marcos.suarez",
  "jose.novoa",
  "diego.medina",
  "alvaro.gonzalez",
  "edgar.mendoza",
  "sol.angel",
  "alexis.martinez",
  "edson.jaimes",
  "edgardo.bayona",
  "eudin.contreras",
  "hober.davila",
  "carlos.marquez",
]

function Solicitud() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const autorizado = user.email.split("@")[0];

  const handleClick = () => {
    if (data.includes(autorizado)) {
      navigate("/Tiempo");
    } else {
      alert("No estás autorizado para continuar.");
    }
  };

  return (
    <>
      <div className="containerCard" onClick={handleClick}>
        <div className="containerCar">
          <div className="containerImg">
            <img
              src="/assets/Tiempos.png"
              alt=""
              className="imgmedidormonofase"
            />
          </div>
          <Link to="" className="containerDatoCard">
            <p className="titleCard">Solicitud</p>
            <p className="DescripcionCard">
              {/* Solicita el Historial y mas de un Cliente. */}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Solicitud;
