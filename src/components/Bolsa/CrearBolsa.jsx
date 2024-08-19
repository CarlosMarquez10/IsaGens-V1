import React, { useEffect, useState } from "react";
import Navar from "../Navar";
import "../Card/ContCgomaps";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

// Definición del componente FormMain y sus funciones fuera de PruebMedidor
const FormMain = () => {
  return (
    <div className="myiframecont">
      <iframe
        className="myiframe"
        src="https://79a9-179-1-110-85.ngrok-free.app/"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        seamless="seamless"
      >
        Tu navegador no soporta iframes.
      </iframe>
    </div>
  );
};

function CrearBolsa() {
  const { user } = useAuth();
  const [Permiso, setPermiso] = useState("");
  const navigate = useNavigate();

  const authorizedUsers = ["carlos.marquez", "diego.medina", "edgar.mendoza"];

  useEffect(() => {
    // Verifica si el usuario actual está en el arreglo de usuarios autorizados
    if (!authorizedUsers.includes(user.email.split("@")[0])) {
      setPermiso("No eres Administrador, para ingresar...");
      setTimeout(() => {
        navigate("/"); // redirige al inicio después de 3 segundos
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <>
      <Navar />
      <main>
        {Permiso === "" ? (
          <FormMain />
        ) : (
          <h1 className="permisoMjs">{Permiso}</h1>
        )}
      </main>
    </>
  );
}

export default CrearBolsa;
