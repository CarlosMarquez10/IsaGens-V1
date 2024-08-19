import { useState } from 'react';
import Navar from "../Navar";
import "./InicioTiempos.css";
import FileUploadModal from '../Mod/ModalCargaFile'
import FileUploadModal01 from '../Mod/ModalGardarFile'

function InicioTiempos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen01, setModalIsOpen01] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleButtonClick01 = () => {
    setModalIsOpen01(true);
  };

  const handleCloseModal01 = () => {
    setModalIsOpen01(false);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedFiles([...selectedFiles, e.target.value]);
    } else {
      setSelectedFiles(selectedFiles.filter(file => file !== e.target.value));
    }
  };

  const handleDeleteClick = () => {
    // Aquí puedes enviar 'selectedFiles' a tu API REST
    console.log(selectedFiles); // Para propósitos de prueba
  };

  return (
    <>
      <Navar />
      {modalIsOpen && <FileUploadModal closeModal={handleCloseModal} />}
      {modalIsOpen01 && <FileUploadModal01 closeModal={handleCloseModal01} />}
      <main className="conatinerConstrution">
        <nav className="nav-container-tiempos">
          <div className="title-modulo-carga">
            <p>Archivos cargados</p>
          </div>
          <div className="container-btn-nav">
            <div className="subir-file">
              <button className="btn-carga-tiempos"  onClick={handleButtonClick}>Cargar</button>
            </div>
            <div className="delete-file">
              <button className="btn-delete-tiempos" onClick={handleDeleteClick}>Eliminar</button>
            </div>

            <div className="delete-file">
              <button className="btn-delete-tiempos" onClick={handleButtonClick01}>config</button>
            </div>
          </div>
        </nav>
        <section className="header-titles-campus" >
          <div className="cont-title-check">
            <p>Seleccionar</p>
          </div>
          <div className="cont-name-file">
            <p>Nombre del Archivo</p>
          </div>
          <div className="cont-date-file">
            <p>Fecha de Carga</p>
          </div>
          <div className="cont-name-user">
            <p>Responsable</p>
          </div>
        </section>
        <section className="conatiner-archivos">
          <article className="Cont-archivos">
            <div className="check-delete">
              <input 
                type="checkbox" 
                id="cbox1" 
                value="first_checkbox"
                onChange={handleCheckboxChange}></input>
            </div>
            <div className="name-file">
              <p>Nombre del archivo cargado</p>
            </div>
            <div className="Date-file-loand">
              <p>10/03/2024 10:00</p>
            </div>
            <div className="name-user-loand">
              <p>Nombre quien cargo</p>
            </div>
          </article>
          <article className="Cont-archivos">
            <div className="check-delete">
              <input 
                type="checkbox" 
                id="cbox2" 
                value="second_checkbox"
                onChange={handleCheckboxChange}></input>
            </div>
            <div className="name-file">
              <p>Nombre del archivo cargado</p>
            </div>
            <div className="Date-file-loand">
              <p>10/03/2024 10:00</p>
            </div>
            <div className="name-user-loand">
              <p>Nombre quien cargo</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default InicioTiempos;
