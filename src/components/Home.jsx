import Navar from "./Navar";
import { useAuth } from "../context/authContext";
import PruebaMedidor from "./PruebaMedidor/PruebaMedidor";
import Consulta from "./Card/Consulta";
import Cgomaps from "./Card/Cgomaps";
import Solicitud from "./Card/Tiempos";
import Consecutivos from "./Card/Consecutivos";
import Inspecciones from "./Card/ReporteInspecciones";
import { Habilitaciones } from "./Card/Habilitaciones";
import { CardConsultaPagos } from "./Card/CardConsultaPagos";

export function Home() {
  const { logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Navar />
      <div className="containerTarjeta">
        <PruebaMedidor />
        <Consulta />
        <Cgomaps />
        <Solicitud />
        <Consecutivos />
        <Inspecciones />
        <Habilitaciones />
        <CardConsultaPagos />
      </div>
    </>
  );
}
