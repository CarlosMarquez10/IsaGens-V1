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
  "karen.pacheco",
  "alexis.martinez",
  "sol.angel",
  "jose.novoa",
  "eudin.contreras",
  "edgardo.bayona",
];

function PruebaMoto(){
  const { user } = useAuth();
  const navigate = useNavigate();
  const autorizado = user.email.split("@")[0];

  const handleClick = () => {
    if (data.includes(autorizado)) {
      navigate("/PruebasMotos");
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
              src="/assets/moto.jpg"
              alt=""
              className="imgmedidormonofase"
            />
          </div>
          <Link to="" className="containerDatoCard">
            <p className="titleCard">Prueba Motos</p>
            <p className="DescripcionCard"></p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PruebaMoto;
