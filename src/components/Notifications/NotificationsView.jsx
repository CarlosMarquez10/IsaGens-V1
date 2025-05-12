import React, { useState, useEffect } from 'react';
import './NotificationsView.css';

const NotificationsView = ({ onClose }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notificationStates, setNotificationStates] = useState({});

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://74pbcspn-3020.use2.devtunnels.ms/api/generar-notificaciones');
      const data = await response.json();
      if (data.success) {
        setNotifications(data.notificaciones);
        // Initialize notification states
        const initialStates = {};
        data.notificaciones.forEach(notification => {
          initialStates[notification.Placa] = {
            whatsapp: notification.WhatsApp === 1,
            correo: notification.Correo === 1
          };
        });
        setNotificationStates(initialStates);
      } else {
        setError('Error al obtener las notificaciones');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationChange = (placa, type) => {
    setNotificationStates(prev => ({
      ...prev,
      [placa]: {
        ...prev[placa],
        [type]: !prev[placa][type]
      }
    }));
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Notificaciones Generadas</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {loading ? (
            <div className="loading">Cargando...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="notifications-table">
              <div className="notifications-table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Placa</th>
                      <th>Kilometraje Cambio Aceite</th>
                      <th>Kilometraje Actual</th>
                      <th>Kilometraje Calculado</th>
                      <th>Estado</th>
                      <th>Mensaje Fijo</th>
                      <th>WhatsApp</th>
                      <th>Correo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notifications.map((notification) => (
                      <tr key={notification.Placa}>
                        <td>{notification.Placa}</td>
                        <td>{notification["Kilometraje Cambio Aceite"]}</td>
                        <td>{notification["Kilometraje Actual"]}</td>
                        <td>{notification["Kilometraje Calculado"]}</td>
                        <td className={`estado ${notification.Estado.toLowerCase().replace(/\s+/g, '-')}`}>
                          {notification.Estado}
                        </td>
                        <td>{notification["Mensaje"]}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={notificationStates[notification.Placa]?.whatsapp || false}
                            onChange={() => handleNotificationChange(notification.Placa, 'whatsapp')}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={notificationStates[notification.Placa]?.correo || false}
                            onChange={() => handleNotificationChange(notification.Placa, 'correo')}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="summary-notificaciones">
                <div>Total Actualizadas: {notifications.length}</div>
                <div>Notificaciones Vifente: {notifications.filter(n => n.Estado === 'VIGENTE').length}</div>
                <div>Notificaciones Alerta: {notifications.filter(n => n.Estado === 'CAMBIAR INMEDIATO').length}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsView; 