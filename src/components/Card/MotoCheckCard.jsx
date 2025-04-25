import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "../PruebaMedidor/PruebaMedidor.css";

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
  "miryam.sierra",
]

function MotoCheckCard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const autorizado = user.email.split("@")[0];

  const handleClick = (e) => {
    if (!data.includes(autorizado)) {
      e.preventDefault();
      alert("No estás autorizado para acceder al control de aceite de motos.");
    }
  };

  return (
    <div className="containerCard">
      <Link to="/motocheck" onClick={handleClick} className="containerCar">
        <div className="containerImg">
          <img
            src="/assets/moto.png"
            alt="Control de Aceite de Motos"
            className="imgmedidormonofase"
          />
        </div>
        <div className="containerDatoCard">
          <p className="titleCard">MotoCheck</p>
        </div>
      </Link>
    </div>
  );
}

export default MotoCheckCard;
