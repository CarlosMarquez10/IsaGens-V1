import L from "leaflet";
import iconLocationUrl from "/assets/icon.svg"; 

export const IconLocation = L.icon({
    iconUrl: iconLocationUrl,
    iconRetinaUrl: iconLocationUrl,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 35], // size of the icon
    className: "leaflet-venue-icon",
});

