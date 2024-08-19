import { useState, useEffect  } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handelChage = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(`${user.email}@isagens.com`, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Usuario Incorrecto ó No existe ");
      }

      if (error.code === "auth/wrong-password") setError("Clave incorrecta");

      if (error.code === "auth/too-many-requests") setError("Clave incorrecta");

      if (error.code === "auth/user-not-found")
        setError("Usuario no Registrado");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <div className="containerroot01">
        <img src="/assets/LOGO_APRENDIZAJE.svg" alt="" className="imalogo" />
        <div className="containerLogin aparecer">
          {error && <p className="mensageerror">{error}</p>}

          <form onSubmit={handleSubmit} noValidate autoComplete="off">

            <div className={`form-group ${user.email && "filled"}`}>
              <input type="text" name="email" onChange={handelChage} value={user.email} />
              <label>Usuario</label>
            </div>

            <div className={`form-group ${user.password && "filled"}`}>
              <input  type="password" name="password" id="password" onChange={handelChage} value={user.password} />
              <label>Contraseña</label>
            </div>

            <button type="submit">Iniciar sesión</button>
          </form>

          <img src="/assets/logo-imel.svg" alt="" className="logoinmel" />
        </div>
      </div>
    </>
  );
}
