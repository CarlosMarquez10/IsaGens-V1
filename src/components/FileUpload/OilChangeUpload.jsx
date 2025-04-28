import React, { useState } from 'react';
import './FileUpload.css';

const OilChangeUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
          selectedFile.type === 'application/vnd.ms-excel') {
        setFile(selectedFile);
        setError('');
      } else {
        setError('Por favor, seleccione un archivo Excel válido');
        setFile(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Por favor, seleccione un archivo');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      formData.append('archivoAceite', file);

      console.log('Enviando archivo:', file.name, 'tipo:', file.type);

      const response = await fetch('https://4977md17-3020.use2.devtunnels.ms/api/archivos/subir-aceite', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      console.log('Respuesta del servidor:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('Error detallado:', errorData);
        throw new Error(errorData?.message || `Error al subir el archivo: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();
      setSuccess('Archivo subido exitosamente');
      setFile(null);
      e.target.reset();
    } catch (err) {
      setError(err.message || 'Error al subir el archivo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-section">
      <h3>Cambio de Aceite</h3>
      <form onSubmit={handleSubmit}>
        <div className="file-input-container">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".xlsx,.xls"
            id="oil-change-file"
            className="file-input"
          />
          <label htmlFor="oil-change-file" className="file-label">
            {file ? file.name : 'Seleccionar archivo Excel'}
          </label>
        </div>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <button 
          type="submit" 
          className="upload-button"
          disabled={loading || !file}
        >
          {loading ? 'Subiendo...' : 'Subir Archivo'}
        </button>
      </form>
    </div>
  );
};

export default OilChangeUpload; 