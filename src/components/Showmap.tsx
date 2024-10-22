import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import { useEffect } from 'react';

interface ICoord {
    coordinates: { lat: number; lon: number };
    onMapClick: (lat: number, lon: number) => void;
}

export const Map: React.FC<ICoord> = ({
    coordinates,
    onMapClick,
}) => {
   const MapClickHandler = () => {
      useMapEvents({
         click: (event) => {
            const { lat, lng } = event.latlng;
            onMapClick(lat, lng);
         },
      });
      return null;
   };

   const MapUpdater = ({ coordinates }: { coordinates: { lat: number, lon: number } }) => {
      const map = useMap();
      useEffect(() => {
         if (map) {
            map.setView([coordinates.lat, coordinates.lon], 10); 
         }
      }, [coordinates, map]);
      return null;
   };

   return (
      <div className="w-4/6 border" id="map">
         <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={7} style={{ height: "400px", width: "100%" }}>
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={[coordinates.lat, coordinates.lon]} />
            <MapUpdater coordinates={coordinates} />
            <MapClickHandler />
         </MapContainer>
      </div>
   );
};
