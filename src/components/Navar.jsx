import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { GiHamburgerMenu } from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import "../components/Home.css";

function Navar() {
  const { user, logout } = useAuth();
  const [ActiveItem, setActiveItem] = useState("Home");
  const [menu, setMenu] = useState("false");

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    const path = window.location.pathname;
    setActiveItem(path.split("/")[1]);
  }, []);

  const handlemenu = () => {
    const state = !menu;
    setMenu(state);
  };

  return (
    <>
      <nav className="navarmenu">
        <div className={menu ? "navarmenuactiveclose" : "navarmenuactive"}>
          <div className="navarLogo">
            <div className="logoNav">
              <img src="./assets/inmel-54b016e8.ico" alt="" />
            </div>
            <div className="nameLogo">
              <h1>{user.email.split("@")[0]}</h1>
            </div>
          </div>
          <div className={menu ? "containeritem" : "containeritemclose"}>
            <ul className="navarItem">
              <li>
                <Link to="/" className={ActiveItem === "Home" ? "active" : "/"}
                onClick={handlemenu} 
               >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/Bolsa"
                  className={
                    (user.email.split("@")[0]) === "admin"
                      ? null
                      : ActiveItem === "Bolsa"
                      ? "active"
                      : "Bolsa"
                  }
                >
                  Crear Bolsa
                </Link>
              </li>
              <li>
                <Link
                 to="/LoginModal"
                >
                  Cargar Tiempos
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLogout}
                >
                  Salir
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <GiHamburgerMenu
          className={menu ? "menuicons" : "menuiconsactive"}
          onClick={handlemenu}        
        />
        <FaTimes className={menu ? "menuclose" : "menuiconsclose"}
          onClick={handlemenu} />
      </nav>
    </>
  );
}

export default Navar;
