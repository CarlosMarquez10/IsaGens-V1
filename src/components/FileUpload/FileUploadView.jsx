import React from 'react';
import OilChangeUpload from './OilChangeUpload';
import EnablementsUpload from './EnablementsUpload';
import './FileUpload.css';

const FileUploadView = ({ onClose }) => {
  return (
    <div className="file-upload-overlay">
      <div className="file-upload-container">
        <div className="file-upload-header">
          <h2>Subir Archivos</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="file-upload-content">
          <OilChangeUpload />
          <div className="divider"></div>
          <EnablementsUpload />
        </div>
      </div>
    </div>
  );
};

export default FileUploadView; 