// Inspecciones.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "../PruebaMedidor/PruebaMedidor.css";
import { Link } from "react-router-dom";

const data = [
  "marcos.suarez",
  "carlos.marquez",
  "diego.medina",
  "edgar.mendoza",
  "jonathan.estupinan",
  "alvaro.gonzalez",
  "edson.jaimes",
  "miryam.sierra",
  "anderson.ortiz",
  "maria.rodriguez",
  "karen.pacheco",
  "alexis.martinez",
  "hober.davila",
  "sol.angel",
  "cristian.penaranda",
  "jose.novoa",
  "cristian.noriega",
  "eudin.contreras",
  "edgardo.bayona",
  "edgar.tulio",
  "francisco.galan",
  "eduar.coral",
  "cgo",
];

function Inspecciones() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const autorizado = user.email.split("@")[0];

  const handleClick = () => {
    if (data.includes(autorizado)) {
      navigate("/InicioRepInspeccion");
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
              src="/assets/10485039.png"
              alt=""
              className="imgmedidormonofase"
            />
          </div>
          <Link to="" className="containerDatoCard">
            <p className="titleCard">Inspecciones Campo</p>
            <p className="DescripcionCard">
             
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Inspecciones;

