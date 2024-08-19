import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

const SearchForm = ({ onSearch }) => {
  const [Cliente, setCliente] = useState("");
  const [selectsearch, setSelectsearch] = useState("");

  const handleSelectSearch = (value) => {
    if (Cliente.trim() === "") {
      alert("Por favor, ingrese un número de cliente o medidor.");
      return;
    }
    setSelectsearch(value);
    onSearch(value, Cliente);
  };

  return (
    <div className="containerFormBtn">
      <div className="containerdatas">
        <h1 className="ContainerConsultaTitle">Consulta General</h1>
        <section className="containerbtnselection">
          <button
            className={`ConsultaSolicitud ${
              selectsearch === "Medidor" ? "active red-background" : ""
            }`}
            onClick={() => handleSelectSearch("Medidor")}
          >
            <img src="/assets/medidor.png" alt="" />
          </button>
          <button
            className={`ConsultaSolicitud ${
              selectsearch === "Usuario" ? "active red-background" : ""
            }`}
            onClick={() => handleSelectSearch("Usuario")}
          >
            <FaUserAlt className="iconuserbtnselection" />
          </button>
        </section>
        <div className="containerFormConsulta">
          <div noValidate autoComplete="off" className="formConsulta">
            <input
              className="inputformconsulta"
              type="text"
              id="outlined-basic"
              placeholder="Numero Cliente ó Medidor"
              onChange={(e) => setCliente(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
