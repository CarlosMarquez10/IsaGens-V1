import React, { useState, useEffect } from 'react';
import './UpdateData.css';
import rotacionIcon from '../../../assets/rotacion.png';
import axios from 'axios';

const UpdateDataView = ({ onClose }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch('https://4977md17-3020.use2.devtunnels.ms/api/listar-archivos'); // https://4977md17-3020.use2.devtunnels.ms/api/conductores , https://4977md17-3020.use2.devtunnels.ms/api/motos
      const data = await response.json();
      
      if (data.success) {
        setFiles(data.data);
      } else {
        setError('Error al cargar los archivos');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (fileName) => {
    setUpdating(fileName);
    setError('');
    setSuccess('');
    try {
      let endpoint = '';
      
      if (fileName === 'Conductores.xlsx') {
        endpoint = 'https://4977md17-3020.use2.devtunnels.ms/api/conductores';
      } else if (fileName === 'Motos.xlsx') {
        endpoint = 'https://4977md17-3020.use2.devtunnels.ms/api/motos';
      } else {
        throw new Error('Archivo no válido para actualización');
      }

      const response = await axios.post(endpoint, {}, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) {
        setSuccess(`Archivo ${fileName} actualizado correctamente`);
      } else {
        throw new Error(response.data.message || 'Error al actualizar el archivo');
      }
    } catch (err) {
      setError(`Error al actualizar ${fileName}: ${err.message}`);
    } finally {
      setUpdating(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="update-overlay">
      <div className="update-container">
        <div className="update-header">
          <h2>Actualizar Datos</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="update-content">
          {loading ? (
            <div className="loading">Cargando archivos...</div>
          ) : (
            <>
              {error && <div className="error-message">{error}</div>}
              {success && <div className="success-message">{success}</div>}
              <div className="files-list">
                {files.map((file) => (
                  <div key={file.nombre} className="file-item">
                    <div className="file-info">
                      <h3>{file.nombre}</h3>
                      <p>Tamaño: {formatSize(file.tamaño)}</p>
                      <p>Última modificación: {formatDate(file.fechaModificacion)}</p>
                    </div>
                    <button
                      className={`update-button ${updating === file.nombre ? 'updating' : ''}`}
                      onClick={() => handleUpdate(file.nombre)}
                      disabled={updating === file.nombre}
                      title="Actualizar archivo"
                    >
                      <img 
                        src={rotacionIcon} 
                        alt="Actualizar" 
                        className={`update-icon ${updating === file.nombre ? 'rotacion' : ''}`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateDataView; 