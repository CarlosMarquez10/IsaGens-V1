import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import PegConsulta from "./components/ConsultaCliente/PegConsulta";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./service/ProtectedRoute";
import "./App.css";
import PruebMedidor from "./components/PruebaMedidor/PruebMedidor";
import ContCgomaps from "./components/Card/ContCgomaps";
import TiempoConsulta from "./components/Solicitudes/TiempoConsulta";
import CrearBolsa from "./components/Bolsa/CrearBolsa";
import LoginModal from "./components/Mod/LoginModal";
import InicioTiempos from "./components/Tiempos/InicioTiempos";
import FromConsecutivo from "./components/Consecutivos/FromConsecutivo";
import ReporteInspecciones from "./components/Card/ReporteInspecciones";
import InicioRepInspeccion from "./components/ComponetInspeciones/InicioRepInspeccion";
import PerfilInspectors from "./components/ComponetInspeciones/PerfilInspector";
import { InspectorDataProvider } from "./components/InspectorDataContext"; // Importa el InspectorDataProvider
import { InspectorProviderPerfil } from "./components/InspectorContext";
import { Habilitacion09H } from "./components/Habilitacion/Habilitacion09H";
import {ConsultaPagos} from "./components/ConsultaPagos/ConsultaPagos";
function App() {
  return (
    <div className="containerroot">
      <AuthProvider>
        <InspectorDataProvider>
          {" "}
          {/* Envuelve tu aplicación con el InspectorDataProvider */}
          <InspectorProviderPerfil>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/Bolsa"
                element={
                  <ProtectedRoute>
                    <CrearBolsa />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Prumedidor"
                element={
                  <ProtectedRoute>
                    <PruebMedidor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Cgomapas"
                element={
                  <ProtectedRoute>
                    <ContCgomaps />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Consult"
                element={
                  <ProtectedRoute>
                    <PegConsulta />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Tiempo"
                element={
                  <ProtectedRoute>
                    <TiempoConsulta />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/LoginModal"
                element={
                  <ProtectedRoute>
                    <LoginModal />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/IncioTiempos"
                element={
                  <ProtectedRoute>
                    <InicioTiempos />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/FromConsecutivo"
                element={
                  <ProtectedRoute>
                    <FromConsecutivo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ReporteInspecciones"
                element={
                  <ProtectedRoute>
                    <ReporteInspecciones />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/InicioRepInspeccion"
                element={
                  <ProtectedRoute>
                    <InicioRepInspeccion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/PerfilInspector"
                element={
                  <ProtectedRoute>
                    <PerfilInspectors />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/Habilitaciones"
                element={
                  <ProtectedRoute>
                    <Habilitacion09H />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ConsultaPagos"
                element={
                  <ProtectedRoute>
                    <ConsultaPagos />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </InspectorProviderPerfil>
        </InspectorDataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
