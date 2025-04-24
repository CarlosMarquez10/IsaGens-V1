import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { IconLocation } from "../utils/icons";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ center, position, cliente }) => {
  const MapMover = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      if (position.lat && position.lng) {
        map.setView([position.lat, position.lng], 13); // Cambia el nivel de zoom según necesites
      }
    }, [position, map]);
    return null;
  };

  return (
    <section
      className="containerMapa"
      // style={{ position: 'relative', height: '100vh', width: '100%' }}
    >
      {/* Contenedor del mapa */}
      <MapContainer center={center} zoom={7} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='<a href="https://www.openstreetmap.org/copyright"></a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={IconLocation}>
          <Popup>{`Cliente: ${cliente}`}</Popup>
        </Marker>
        <MapMover position={position} />
      </MapContainer>


    </section>
  );
};

export default MapComponent;



// import { useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import { IconLocation } from "../utils/icons";
// import ReactPlayer from "react-player";
// import "leaflet/dist/leaflet.css";
// import AutoClickButton from '../otros/AutoClickButton';

// const MapComponent = ({ center, position, cliente }) => {
//   const MapMover = ({ position }) => {
//     const map = useMap();
//     useEffect(() => {
//       if (position.lat && position.lng) {
//         map.setView([position.lat, position.lng], 13); // Cambia el 13 por el nivel de zoom que desees
//       }
//     }, [position, map]);
//     return null;
//   };

//   return (
//     <section className="containerMapa">
//       {/* Video en segundo plano */}
//       <ReactPlayer
//         className="backgroundVideo"
//         url="https://www.youtube.com/watch?v=ZfKN5BrbcQI"
//         playing
//         loop
//         muted
//         width="100%"
//         height="100%"
//       />

//       {/* Aquí se renderiza el AutoClickButton */}
//       <AutoClickButton />

//       {/* Contenedor del mapa */}
//       <MapContainer center={center} zoom={7} style={{ height: "100%", width: "100%" }}>
//         <TileLayer
//           attribution='<a href="https://www.openstreetmap.org/copyright"></a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position} icon={IconLocation}>
//           <Popup>{`Cliente: ${cliente}`}</Popup>
//         </Marker>
//         <MapMover position={position} />
//       </MapContainer>
//     </section>
//   );
// };

// export default MapComponent;


