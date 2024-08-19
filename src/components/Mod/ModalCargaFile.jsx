import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./ModalCargaFile.css";

Modal.setAppElement("#root"); // Reemplaza esto con el id de tu elemento raíz

function FileUploadModal({ closeModal }) {
  //   const [modalIsOpen, setModalIsOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);


    try {
      const response = await axios.post(
        "https://2xd0k3p0-3001.use2.devtunnels.ms/api/upload",
        formData
        // config
      );
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
            <p className="title-subida-file">Cargar archivo</p>
          </div>
          <input type="file" onChange={handleFileChange} />
          <button className="btn-subir-file" onClick={handleUpload}>
            Subir
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default FileUploadModal;
