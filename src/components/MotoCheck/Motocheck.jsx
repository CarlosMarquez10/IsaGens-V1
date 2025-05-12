import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navar from '../Navar';
import FloatingMenu from '../FloatingMenu/FloatingMenu';
import './motocheck-table.css';

const Motocheck = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotificaciones = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://74pbcspn-3020.use2.devtunnels.ms/api/motocambios/informacion');
        
        if (response.data.success) {
          setNotificaciones(response.data.data);
        } else {
          setError('Error al cargar los datos');
        }
      } catch (err) {
        setError('Error de conexión al servidor');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotificaciones();
  }, []);

  // Función para determinar el badge según el estado
  const getEstadoBadge = (estado) => {
    if (estado === 'VIGENTE') {
      return <span className="status-badge status-vigente">{estado}</span>;
    } else {
      return <span className="status-badge status-other">{estado}</span>;
    }
  };

  return (
    <>
      <Navar />
      
      <div className="motocheck-container">
        <div className="motocheck-header">
          <h1 className="motocheck-title">MotoCheck</h1>
          <p className="motocheck-subtitle">Control de cambio de aceite</p>
        </div>

        <div className="motocheck-card">
          <div className="card-header">
            <h2>Información de Notificaciones</h2>
            <p>Consulta el estado de las motocicletas y sus notificaciones de mantenimiento.</p>
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Cargando información...</p>
            </div>
          ) : error ? (
            <div className="error-container">
              <p className="error-message">{error}</p>
              <button 
                className="retry-button"
                onClick={() => window.location.reload()}
              >
                Reintentar
              </button>
            </div>
          ) : (
            <div className="motocheck-table-container">
              {notificaciones.length > 0 ? (
                <table className="motocheck-table">
                  <thead>
                    <tr>
                      <th>Nombre del Conductor</th>
                      <th>Teléfono</th>
                      <th>Placa</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notificaciones.map((item, index) => (
                      <tr key={index}>
                        <td>{item['Nombre del Conductor']}</td>
                        <td>{item.Teléfono}</td>
                        <td>{item.Placa}</td>
                        <td>{getEstadoBadge(item.Estado)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="empty-state">
                  <p>No hay datos disponibles</p>
                  <p>Intenta refrescar la página o verifica la conexión</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <FloatingMenu />
    </>
  );
};

export default Motocheck;