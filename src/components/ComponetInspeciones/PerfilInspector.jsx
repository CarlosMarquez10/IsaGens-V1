import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navar from "../Navar.jsx";
import Slider from "react-slick";
import { MdExitToApp } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InicioRepInspeccion.css";
import "./PerfilInspector.css";
import { InspecionesGenerales } from "./InspecionesGenerales.jsx";
import { AtentosPerfil } from "./AtentosPerfil.jsx";
import { ModalidadInspensiones } from "./ModalidadInspensiones.jsx";
// import { InspecionesPorHora } from "./InspecionesPorHora.jsx";
import { PendienteInspección } from "./PendienteInspeción.jsx";
import { EstadoGen } from "./EstadoGeneral.jsx";
import { useInspector } from "../InspectorContext.jsx";
import { CantidaPorsemana } from "./CantidaPorsemana.jsx";

const PerfilInspectors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { inspectorperfil } = useInspector(); // Usa el nuevo contexto
  const navigate = useNavigate();
  const location = useLocation();

  const InicioInp = () => {
    navigate("/InicioRepInspeccion");
  };

  return (
    <>
      <div className="navInspecciones">
        <Navar />
      </div>

      <div className="containerInspecciones">
        <div className="contFiltroPerfil">
          <div className="contPerfil">
            <div className="contfoto">
              <img src="/assets/perfil.png" alt="" />
            </div>
            <div className="contnombreperfil">
              <h3 className="rolPerfil">{inspectorperfil?.Rol}</h3>
              {/* Mostrar los datos del inspector */}
              {inspectorperfil && (
                <div className="datosNombrePerfil">
                  <h6>{inspectorperfil.Nombre}</h6>
                  <h6>{inspectorperfil.Cedula}</h6>
                  {/* Otros campos que necesites mostrar */}
                </div>
              )}
            </div>
          </div>
          <div className="contFiltros">
            <div className="btnfiltrosperfil">
              <button className="btnFiltroperfil" onClick={InicioInp}>
                <MdExitToApp />
              </button>
            </div>

            <div className="estadoGeneral">
              <EstadoGen inspectorData={inspectorperfil} />
            </div>
          </div>
        </div>

        <Slider {...settings}>
          <CantidaPorsemana inspectorData={ inspectorperfil } />
          <InspecionesGenerales inspectorData={inspectorperfil} />
          <AtentosPerfil inspectorData={inspectorperfil} />
          <PendienteInspección inspectorData={inspectorperfil} />
          <ModalidadInspensiones inspectorData={inspectorperfil} />

          {/* <InspecionesPorHora inspectorData={inspectorData} /> */}
        </Slider>
      </div>
    </>
  );
};

export default PerfilInspectors;
