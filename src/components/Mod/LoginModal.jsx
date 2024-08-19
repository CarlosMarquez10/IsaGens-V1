import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css";
import Navar from "../Navar";

function LoginModal() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/login",
        formData
      );
      console.log(response.data);
      if (response.data) {
        // Guarda el token en el almacenamiento local
        localStorage.setItem('token', response.data.token);
        navigate("/IncioTiempos");
      }
      
    } catch (error) {
      console.error(error);
      setErrorMessage("Las credenciales son incorrectas");
    }
    setFormData({ username: "", password: "" }); 
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <>
      <Navar />
      <div className="containar-loginModal">
        <div className="login-modal">
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            onChange={handleChange}
            value={formData.username}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            value={formData.password}
            className="login-input"
          />
          <button onClick={handleSubmit} className="login-button">
            Iniciar sesión
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </>
  );
}

export default LoginModal;
