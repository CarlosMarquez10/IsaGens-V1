import React from 'react';
import './DownloadData.css';

const DownloadView = ({ onClose }) => {
  const handleDownload = (type) => {
    // Aquí irán las llamadas al backend cuando esté listo
    console.log(`Descargando ${type}`);
  };

  return (
    <div className="download-overlay">
      <div className="download-container">
        <div className="download-header">
          <h2>Descargar Datos</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="download-content">
          <div className="download-section">
            <button 
              className="download-button drivers"
              onClick={() => handleDownload('conductores')}
            >
              <div className="download-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="download-info">
                <h3>Datos de Conductores</h3>
                <p>Descarga la información completa de los conductores</p>
              </div>
            </button>

            <button 
              className="download-button oil"
              onClick={() => handleDownload('aceites')}
            >
              <div className="download-icon">
                <i className="fas fa-oil-can"></i>
              </div>
              <div className="download-info">
                <h3>Datos de Aceites</h3>
                <p>Descarga el registro de cambios de aceite</p>
              </div>
            </button>

            <button 
              className="download-button enablements"
              onClick={() => handleDownload('habilitaciones')}
            >
              <div className="download-icon">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <div className="download-info">
                <h3>Habilitaciones Diarias</h3>
                <p>Descarga el registro de habilitaciones</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadView; 