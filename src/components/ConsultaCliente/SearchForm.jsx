import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

// Array de videos disponibles
const videosCollection = [
  "https://www.youtube.com/watch?v=K6ljdYb1qFY",
  "https://www.youtube.com/watch?v=NHYpGAkQN9U",
  "https://www.youtube.com/watch?v=91tFhlam20M",
  "https://www.youtube.com/watch?v=ZfKN5BrbcQI",
  "https://www.youtube.com/watch?v=K6ljdYb1qFY",
  "https://www.youtube.com/watch?v=91tFhlam20M",
  "https://www.youtube.com/watch?v=aQ47HQBiRjU",
  "https://www.youtube.com/watch?v=NHYpGAkQN9U",
  "https://www.youtube.com/watch?v=K6ljdYb1qFY",
  "https://www.youtube.com/watch?v=91tFhlam20M",
];

const getRandomVideo = () => {
  const randomIndex = Math.floor(Math.random() * videosCollection.length);
  return videosCollection[randomIndex];
};

const LoadingModal = ({ isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <div className="loading-modal-overlay">
      <div className="loading-modal">
        <div className="loading-spinner"></div>
        <p>Consultando datos, por favor espere...</p>
      </div>
    </div>
  );
};

const SearchForm = ({ onSearch }) => {
  const [Cliente, setCliente] = useState("");
  const [selectsearch, setSelectsearch] = useState("");
  const [videoClicked, setVideoClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(getRandomVideo());

  // Hook para recargar la página después de 100000 ms
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, 100000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (tipo) => {
    setSelectsearch(tipo);
    // Se elimina la actualización del video para que se mantenga el inicial
    // setCurrentVideo(getRandomVideo());
    if (Cliente.trim() !== "") {
      setIsLoading(true);
      onSearch(tipo, Cliente);
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    } else {
      alert("Por favor, ingrese un número de cliente o medidor.");
      setIsLoading(false);
    }
  };

  // Se ejecuta al perder el foco del input.
  // Se agrega un retraso de 1 segundo para actualizar el estado y ejecutar las funciones.
  const handleVideoPlay = () => {
    if (!videoClicked) {
      setIsLoading(true);
      handleButtonClick("Usuario");
      setTimeout(() => {
        setVideoClicked(true);
      }, 4000);
    }
  };

  return (
    <div className="containerFormBtn">
      <div className="containerdatas" style={{ position: "relative" }}>
        <h1 className="ContainerConsultaTitle">Consulta General</h1>
        <div className={`datalbl ${videoClicked ? "behind" : ""}`}>
          <ReactPlayer
            url={currentVideo}
            controls={true}
            width={"80%"}
            height={"165px"}
            muted={true}
            style={{ pointerEvents: "auto", opacity: 0.001 }}
          />
        </div>
        <section className="containerbtnselection">
          <button
            className={`ConsultaSolicitud ${selectsearch === "Medidor" ? "active" : ""}`}
            onClick={() => handleButtonClick("Medidor")}
          >
            <img src="/assets/medidor.png" alt="Medidor" />
          </button>
          <button
            className={`ConsultaSolicitud ${selectsearch === "Usuario" ? "active" : ""}`}
            onClick={() => handleButtonClick("Usuario")}
          >
            <img src="/assets/user.png" alt="Usuario" />
          </button>
        </section>
        <div noValidate autoComplete="off" className="formConsulta" style={{ position: "relative" }}>
          <input
            className="inputformconsulta"
            type="number"
            id="outlined-basic"
            placeholder="Número Cliente ó Medidor"
            onChange={(e) => setCliente(e.target.value)}
            onBlur={() => setTimeout(handleVideoPlay, 50)}
            style={{ paddingRight: "2.5rem" }}
          />
        </div>
      </div>
      <LoadingModal isOpen={isLoading} />
      <style jsx>{`
        .loading-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .loading-modal {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
          max-width: 300px;
          width: 100%;
        }
        .loading-spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
          margin: 0 auto 15px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SearchForm;
