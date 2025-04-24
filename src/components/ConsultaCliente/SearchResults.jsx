import { PiMapPinLineDuotone } from "react-icons/pi";

const SearchResults = ({ data, isLoading, msg, onMapClick }) => {
  return (
    <section className="resultsSection">
      {isLoading && (
        <img className="gifLoading" src="../assets/loading.gif" alt="Cargando..." />
      )}
      {!isLoading && (
        <div className="containerdataform">
          {data ? (
            <>
              <article className="dataform-title">
                <h3>Datos Generales</h3>
              </article>
              <article className="dataformTrafo">
                <p>
                  <strong>Cliente:</strong>
                </p>
                <span className="dto_cliente">{data.Cliente}</span>
              </article>
              <article>
                <p className="dto_perfil">
                  <strong>Nombre:</strong>
                </p>
                <span>{data.Nombre}</span>
              </article>
              <article>
                <p className="dto_perfil">
                  <strong>Dirección:</strong>
                </p>
                <span>{data.Direccion}</span>
              </article>
              <article className="dataform">
                <article className="dataformTrafo">
                  <p>
                    <strong>Ciclo:</strong>
                  </p>
                  <span>{data.Ciclo}</span>
                </article>

                <article className="dataformTrafo">
                  <p>
                    <strong>Seccion:</strong>
                  </p>
                  <span>{data.Seccion}</span>
                </article> 
                <article className="dataformTrafo">
                  <p>
                    <strong>Trafo:</strong>
                  </p>
                  <span>{data.Tranformador}</span>
                </article>
              </article>
              <article className="dataform">
                <p>
                  <strong>Ruta-Lectura:</strong>
                </p>
                <span>{data.RutaLectura}</span>
              </article>
              <article className="dataform">
                <p>
                  <strong>Medidor:</strong>
                </p>
                <span>{data.DMedidor}</span>
              </article>
              <article className="dataform">
                <p>
                  <strong>Facturación :</strong>
                </p>
                <span>{data.Facturacion}</span>
              </article>
              <article>
                <p  className="dto_perfil">
                  <strong>Correo :</strong>
                </p>
                <span>{data.Ddata}</span>
              </article>
              <article className="dataform">
                <p>
                  <strong>Area :</strong>
                </p>
                <span>{data.Area}</span>
              </article>
              <article className="dataform">
                <p>
                  <strong>Telefono :</strong>
                </p>
                <span>{data.Telefono}</span>
              </article>
              <article className="dataform">
                <p>
                  <strong>Anterior:</strong>
                </p>
                <span>{data.Anterior}</span>
              </article>
              <article className="dataform">
                <p>
                  <strong>Posterior:</strong>
                </p>
                <span>{data.Posterior}</span>
              </article>
              <article className="dataform">
                <p>
                  <strong>Gps:</strong>
                </p>
                <span>
                  {data.Latitud},{data.Longitud}
                </span>
                <PiMapPinLineDuotone className="iconmapform" onClick={onMapClick} />
              </article>
            </>
          ) : (
            <p>{msg}</p>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchResults;
