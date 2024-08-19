import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "../PruebaMedidor/PruebaMedidor.css";
import { Link } from "react-router-dom";

const data = [
  "cgo",
  "marcos.suarez",
  "jose.novoa",
  "jonathan.estupinan",
  "diego.medina",
  "alvaro.gonzalez",
  "edgar.mendoza",
  "sol.angel",
  "alexis.martinez",
  "edson.jaimes",
  "edgardo.bayona",
  "eudin.contreras",
  "carlos.marquez",
  "nelly.duarte",
  "maria.Rodriguez",
]

function Consecutivo() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const autorizado = user.email.split("@")[0];

  const handleClick = () => {
    if (data.includes(autorizado)) {
      navigate("/FromConsecutivo");
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
              src="/assets/consecutivo.png"
              alt=""
              className="imgmedidormonofase"
            />
          </div>
          <Link to="" className="containerDatoCard">
            <p className="titleCard">Consecutivo</p>
            <p className="DescripcionCard">
              {/* Solicitar Consecutivo. */}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Consecutivo;
