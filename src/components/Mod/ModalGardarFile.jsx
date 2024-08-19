import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./ModalGardarFile.css";

Modal.setAppElement("#root"); 

function FileUploadModal({ closeModal }) {
  const [fileName, setFileName] = useState("");

  const handleInputChange = (event) => {
    setFileName(event.target.value);
  };

  const handleUpload = async () => {
    const data = {
      name: fileName,
    };

    try {
      const response = await axios.post("", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al cargar el archivo:", error);
    }

    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen
        onRequestClose={closeModal}
        style={{
          content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <div
          style={{
            width: "800px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid grey",
            borderRadius: "10px",
          }}
        >
          <div className="cont-title-subida-file">
            <p className="title-subida-file">Guardar Datos</p>
          </div>
          <input type="text" placeholder="Pegar el nombre del archivo" onChange={handleInputChange} />
          <button className="btn-subir-file" onClick={handleUpload}>Guardar</button>
        </div>
      </Modal>
    </div>
  );
}

export default FileUploadModal;


