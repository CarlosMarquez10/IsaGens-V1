import React, { useState } from 'react';
import FileUploadView from '../FileUpload/FileUploadView';
import DownloadView from '../DownloadData/DownloadView';
import UpdateDataView from '../UpdateData/UpdateDataView';
import NotificationsView from '../Notifications/NotificationsView';
import './FloatingMenu.css';

const FloatingMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFileUploadClick = () => {
    setShowFileUpload(true);
    setIsMenuOpen(false);
  };

  const handleDownloadClick = () => {
    setShowDownload(true);
    setIsMenuOpen(false);
  };

  const handleUpdateClick = () => {
    setShowUpdate(true);
    setIsMenuOpen(false);
  };

  const handleNotificationsClick = () => {
    setShowNotifications(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="floating-menu">
        <div className="dropdown-menu">
          <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          {isMenuOpen && (
            <div className="menu-items">
              <div className="menu-item" style={{ animationDelay: '0.1s' }}>
                <span>Vehiculos</span>
                <span className="badge">15</span>
              </div>
              {/* <div className="menu-item" style={{ animationDelay: '0.2s' }}>
                <span>Carros</span>
                <span className="badge">10</span>
              </div> */}
              <div className="menu-item" style={{ animationDelay: '0.3s' }} onClick={handleUpdateClick}>
                Actualizar Datos
              </div>
              <div className="menu-item" style={{ animationDelay: '0.4s' }}>Editar datos</div>
              <div className="menu-item" style={{ animationDelay: '0.5s' }} onClick={handleNotificationsClick}>
                Enviar Notificación
              </div>
              <div className="menu-item" style={{ animationDelay: '0.6s' }}>Enviar Correos</div>
              <div className="menu-item" style={{ animationDelay: '0.7s' }} onClick={handleFileUploadClick}>
                Subir Archivos
              </div>
              <div className="menu-item" style={{ animationDelay: '0.8s' }} onClick={handleDownloadClick}>
                Descargar Datos
              </div>
            </div>
          )}
        </div>
      </div>
      {showFileUpload && <FileUploadView onClose={() => setShowFileUpload(false)} />}
      {showDownload && <DownloadView onClose={() => setShowDownload(false)} />}
      {showUpdate && <UpdateDataView onClose={() => setShowUpdate(false)} />}
      {showNotifications && <NotificationsView onClose={() => setShowNotifications(false)} />}
    </>
  );
};

export default FloatingMenu; 